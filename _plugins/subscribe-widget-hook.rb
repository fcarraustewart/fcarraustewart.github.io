#!/usr/bin/env ruby
#
# Inject a floating "subscribe by email" widget into rendered post pages,
# without vendoring any theme layout/include (see CLAUDE.md's gem-drift
# warning). Runs after layout render, string-inserts before </body>.

WIDGET_HTML = <<~HTML
  <style>
    #followit-float{position:fixed;right:16px;bottom:90px;z-index:1000;font-family:inherit}
    #followit-float .followit-pill{display:flex;align-items:center;gap:6px;padding:10px 16px;border-radius:999px;border:0;background:#e37c3d;color:#fff;font-weight:700;font-size:14px;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.35)}
    #followit-float .followit-panel{display:none;position:absolute;bottom:52px;right:0;width:260px;padding:16px;border-radius:8px;background:var(--card-bg,#1e1e1e);border:1px solid var(--main-border-color,#383838);box-shadow:0 4px 20px rgba(0,0,0,.45)}
    #followit-float.open .followit-panel{display:block}
    #followit-float.open .followit-pill{display:none}
    #followit-float .followit-panel-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
    #followit-float .followit-panel-head span{color:var(--text-color,#e5e5e5);font-weight:700;font-size:14px}
    #followit-float .followit-close{background:none;border:0;color:var(--text-muted-color,#999);font-size:18px;line-height:1;cursor:pointer;padding:0}
    #followit-float input[type=email]{width:100%;height:38px;border-radius:6px;border:1px solid var(--main-border-color,#444);background:var(--main-bg,#222);color:var(--text-color,#e5e5e5);padding:0 10px;font-size:14px;outline:none}
    #followit-float button.followit-submit{width:100%;height:38px;margin-top:8px;border:0;border-radius:6px;background:#e37c3d;color:#fff;font-weight:700;cursor:pointer}
    #followit-float .followit-via{display:block;margin-top:8px;font-size:11px;text-align:center;color:var(--text-muted-color,#999);text-decoration:none;border-bottom:none}
  </style>
  <div id="followit-float">
    <div class="followit-panel">
      <div class="followit-panel-head">
        <span>Get new posts by email</span>
        <button type="button" class="followit-close" aria-label="Close">&times;</button>
      </div>
      <form action="https://api.follow.it/subscription-form/dmFjNVp6djdEOU15bmxJRCt4NVg5dmFobGFteW9uMUdKUHdRSC9iWWZBTE82ZTFYcGpOMVhBTXRGVmJ2ckNKZ2lXeGFCZHB5UGF4L0VLb2hqaWVYSUs1SXZBUkJ6dGN3TVJtbEg1cVJwOEVTNlJ2VGRjNUpSYW00UHkrVkhNRDZ8T1N4YmFnd2VSeGhqYkI2WlAzRmxZYjJ1emNXbXJIaEsrYWg1djI4MGM5Yz0=/8" method="post">
        <input type="email" name="email" required placeholder="Enter your email" spellcheck="false">
        <button type="submit" class="followit-submit">Subscribe</button>
      </form>
      <a href="/subscribe/" class="followit-via">via follow.it — more info</a>
    </div>
    <button type="button" class="followit-pill">
      <i class="fas fa-envelope" aria-hidden="true"></i>
      Subscribe
    </button>
  </div>
  <script>
    (function () {
      var root = document.getElementById('followit-float');
      if (!root) return;
      root.querySelector('.followit-pill').addEventListener('click', function () {
        root.classList.add('open');
      });
      root.querySelector('.followit-close').addEventListener('click', function () {
        root.classList.remove('open');
      });
    })();
  </script>
HTML

Jekyll::Hooks.register :documents, :post_render do |document|
  next unless document.collection.label == "posts"
  next unless document.output.include?("</body>")

  document.output.sub!("</body>", WIDGET_HTML + "</body>")
end
