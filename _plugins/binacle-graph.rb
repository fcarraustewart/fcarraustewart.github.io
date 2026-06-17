# frozen_string_literal: true
#
# Binacle graph generator.
#
# Builds the "tech-stack <-> dev-blog" graph that the /binacle/ landing page
# renders. It runs at BUILD TIME from each post's `categories:` and `tags:`, so
# every future post you publish (and tag) shows up in the graph automatically —
# no manual graph upkeep.
#
# Output is exposed to Liquid as `site.data.binacle_graph` and serialized to
# /binacle/graph-data.json by binacle/graph-data.json.
#
# Node kinds:
#   - "post"     : a dev blog post (clicking it navigates to the post)
#   - "category" : a broad area (Chirpy categories, e.g. Firmware, SDR)
#   - "tag"      : a tech stack (e.g. C++, Zephyr, Jekyll)
#
# Edges: category->post, tag->post, and parent->child for hierarchical
# Chirpy categories ([Parent, Child]) so you can navigate between stacks.

module Binacle
  class GraphGenerator < Jekyll::Generator
    safe true
    priority :low

    def generate(site)
      nodes = {} # id => hash
      links = []

      upsert = lambda do |id, attrs|
        nodes[id] ||= attrs
        nodes[id]
      end

      site.posts.docs.each do |post|
        next if post.data['hidden'] # honour Chirpy's hidden posts

        pid = "post:#{post.url}"
        upsert.call(pid,
                    'id' => pid,
                    'label' => (post.data['title'] || File.basename(post.path, '.*')),
                    'kind' => 'post',
                    'url' => post.url,
                    'date' => (post.date ? post.date.strftime('%Y-%m-%d') : nil))

        categories = Array(post.data['categories'])
        categories.each_with_index do |cat, i|
          name = cat.to_s.strip
          next if name.empty?

          cid = "cat:#{name}"
          node = upsert.call(cid, 'id' => cid, 'label' => name, 'kind' => 'category', 'count' => 0)
          node['count'] += 1
          links << { 'source' => cid, 'target' => pid }

          # hierarchy edge: [Parent, Child] -> Parent links to Child
          if i.positive?
            parent = "cat:#{categories[i - 1].to_s.strip}"
            links << { 'source' => parent, 'target' => cid } unless parent == 'cat:'
          end
        end

        Array(post.data['tags']).each do |tag|
          name = tag.to_s.strip
          next if name.empty?

          tid = "tag:#{name}"
          node = upsert.call(tid, 'id' => tid, 'label' => name, 'kind' => 'tag', 'count' => 0)
          node['count'] += 1
          links << { 'source' => tid, 'target' => pid }
        end
      end

      site.data['binacle_graph'] = { 'nodes' => nodes.values, 'links' => links }
      Jekyll.logger.info 'Binacle:', "graph built (#{nodes.size} nodes, #{links.size} edges)"
    end
  end
end
