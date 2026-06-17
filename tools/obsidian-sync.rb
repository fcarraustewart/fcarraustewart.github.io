#!/usr/bin/env ruby
# frozen_string_literal: true
#
# obsidian-sync.rb — publish selected Obsidian notes into the Jekyll blog.
#
# Authoring stays in Obsidian; this script converts the notes you opt-in to
# publishing into Chirpy posts under _posts/, rewriting [[wikilinks]] and
# mapping front matter. It is the "keep the blog in sync with the vault" half;
# the /binacle/ graph then visualises whatever ends up in _posts/.
#
# A note is published when its YAML front matter contains `publish: true`.
#
#   ---
#   publish: true
#   title: My Dev Blog
#   date: 2026-06-17            # optional; falls back to file mtime
#   categories: [Firmware]      # optional
#   tags: [C++, Zephyr]         # optional — these become graph "stacks"
#   description: One-liner.      # optional
#   ---
#
# Usage:
#   tools/obsidian-sync.rb [--dry-run] [--prune]
#   VAULT="/path/to/vault" tools/obsidian-sync.rb
#
#   --dry-run  show what would change, write nothing
#   --prune    delete previously-synced posts whose source note is gone or
#              no longer has `publish: true`
#
# Managed posts carry `obsidian_source:` in their front matter so re-runs
# overwrite cleanly and --prune can identify them. Hand-written posts (without
# that key) are never touched.

require "yaml"
require "fileutils"
require "date"

ROOT       = File.expand_path("..", __dir__)
POSTS_DIR  = File.join(ROOT, "_posts")
ASSETS_DIR = File.join(ROOT, "assets", "img", "obsidian")
VAULT      = File.expand_path(ENV["VAULT"] || File.join(Dir.home, "Documents", "Obsidian Vault"))

DRY_RUN = ARGV.include?("--dry-run")
PRUNE   = ARGV.include?("--prune")

def slugify(str)
  str.to_s.downcase.strip
     .gsub(/[^a-z0-9\s-]/, "")
     .gsub(/[\s-]+/, "-")
     .gsub(/\A-+|-+\z/, "")
end

# Split a note into [front_matter_hash, body]. Returns [nil, full] if no FM.
def split_front_matter(text)
  if text =~ /\A---\s*\n(.*?\n)---\s*\n?(.*)\z/m
    fm = begin
      YAML.safe_load(Regexp.last_match(1), permitted_classes: [Date, Time]) || {}
    rescue StandardError => e
      warn "  ! YAML parse failed: #{e.message}"
      {}
    end
    [fm, Regexp.last_match(2)]
  else
    [nil, text]
  end
end

# ---- pass 1: discover publishable notes and their target slugs -------------
notes = []
Dir.glob(File.join(VAULT, "**", "*.md")).sort.each do |path|
  next if path.include?("/.obsidian/")

  fm, body = split_front_matter(File.read(path))
  next unless fm && fm["publish"] == true

  title = (fm["title"] || File.basename(path, ".md")).to_s
  notes << { path: path, fm: fm, body: body, title: title, slug: slugify(fm["slug"] || title) }
end

if notes.empty?
  puts "No notes with `publish: true` found in #{VAULT}"
  puts "(add `publish: true` to a note's front matter to publish it)"
end

# name/title -> slug, so [[wikilinks]] to other published notes become real links
link_index = {}
notes.each do |n|
  link_index[File.basename(n[:path], ".md").downcase] = n[:slug]
  link_index[n[:title].downcase] = n[:slug]
end

def convert_wikilinks(body, link_index)
  # image/file embeds ![[file.ext]] -> markdown image (copied separately)
  body = body.gsub(/!\[\[([^\]|]+?\.(?:png|jpe?g|gif|webp|svg))\]\]/i) do
    file = Regexp.last_match(1).strip
    "![](/assets/img/obsidian/#{File.basename(file)})"
  end
  # plain links [[Target|Alias]] or [[Target]]
  body.gsub(/\[\[([^\]|]+?)(?:\|([^\]]+))?\]\]/) do
    target = Regexp.last_match(1).strip
    alias_ = (Regexp.last_match(2) || target).strip
    slug = link_index[target.downcase]
    slug ? "[#{alias_}](/posts/#{slug}/)" : alias_
  end
end

def copy_embedded_images(body, vault, dry_run)
  body.scan(%r{/assets/img/obsidian/([^)\s]+)}).flatten.uniq.each do |name|
    found = Dir.glob(File.join(vault, "**", name)).reject { |p| p.include?("/.obsidian/") }.first
    next unless found

    dest = File.join(ASSETS_DIR, name)
    next if File.exist?(dest)

    puts "  + image #{name}"
    next if dry_run

    FileUtils.mkdir_p(ASSETS_DIR)
    FileUtils.cp(found, dest)
  end
end

# ---- pass 2: render each note into a Chirpy post ---------------------------
written = []
notes.each do |n|
  fm = n[:fm]
  date = fm["date"] ? DateTime.parse(fm["date"].to_s) : File.mtime(n[:path]).to_datetime
  year = date.strftime("%Y")
  fname = "#{date.strftime('%Y-%m-%d')}-#{n[:slug]}.md"
  rel   = File.join("_posts", year, fname)
  dest  = File.join(POSTS_DIR, year, fname)

  out_fm = {
    "title"           => n[:title],
    "date"            => date.strftime("%Y-%m-%d %H:%M:%S %z").sub(/(\d{2})(\d{2})\z/, '\1\2'),
    "categories"      => fm["categories"],
    "tags"            => fm["tags"],
    "description"     => fm["description"],
    "pin"             => fm["pin"],
    "math"            => fm["math"],
    "mermaid"         => fm["mermaid"],
    "image"           => fm["image"],
    "obsidian_source" => File.basename(n[:path]) # marks this post as managed
  }.reject { |_, v| v.nil? }

  body = convert_wikilinks(n[:body], link_index).strip
  copy_embedded_images(body, VAULT, DRY_RUN)

  content = "#{YAML.dump(out_fm)}---\n\n#{body}\n"
  written << rel

  if File.exist?(dest) && File.read(dest) == content
    puts "  = #{rel} (unchanged)"
    next
  end

  puts "#{DRY_RUN ? '  ~' : '  >'} #{rel}"
  next if DRY_RUN

  FileUtils.mkdir_p(File.dirname(dest))
  File.write(dest, content)
end

# ---- optional prune: remove managed posts whose note went away -------------
if PRUNE
  Dir.glob(File.join(POSTS_DIR, "**", "*.md")).each do |post|
    fm, = split_front_matter(File.read(post))
    next unless fm && fm["obsidian_source"] # only ever touch managed posts

    rel = post.sub("#{ROOT}/", "")
    next if written.include?(rel)

    puts "#{DRY_RUN ? '  ~ would delete' : '  - delete'} #{rel} (source gone/unpublished)"
    File.delete(post) unless DRY_RUN
  end
end

puts "\n#{DRY_RUN ? '[dry-run] ' : ''}synced #{written.size} note(s) from #{VAULT}"
