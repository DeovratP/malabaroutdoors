/* Share bar for Malabar Outdoors posts.
   - "Share" opens the phone's own share menu (Instagram, WhatsApp, Messages…)
     and is hidden on browsers that don't have one.
   - "WhatsApp" opens WhatsApp with the post title and link filled in.
   - "Copy link" copies the post URL and confirms on the button. */
(function () {
  var bar = document.querySelector('.share');
  if (!bar) return;

  var url = location.href.split('#')[0];
  var h1 = document.querySelector('h1');
  var title = h1 ? h1.textContent.trim() : document.title;
  var text = title + ' — Malabar Outdoors';

  // WhatsApp
  var wa = bar.querySelector('[data-share="whatsapp"]');
  if (wa) wa.href = 'https://wa.me/?text=' + encodeURIComponent(text + '\n' + url);

  // Native share menu
  var native = bar.querySelector('[data-share="native"]');
  if (native && navigator.share) {
    native.hidden = false;
    native.addEventListener('click', function () {
      navigator.share({ title: text, text: text, url: url }).catch(function () {});
    });
  }

  // Copy link
  var copy = bar.querySelector('[data-share="copy"]');
  var status = bar.querySelector('.share-status');
  if (copy) {
    var label = copy.querySelector('span');
    var original = label.textContent;
    var timer;
    copy.addEventListener('click', function () {
      var done = function () {
        label.textContent = 'Link copied';
        copy.classList.add('is-done');
        if (status) status.textContent = 'Link copied to clipboard';
        clearTimeout(timer);
        timer = setTimeout(function () {
          label.textContent = original;
          copy.classList.remove('is-done');
          if (status) status.textContent = '';
        }, 2200);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(url).then(done, fallback);
      } else {
        fallback();
      }
      function fallback() {
        var t = document.createElement('textarea');
        t.value = url;
        t.setAttribute('readonly', '');
        t.style.position = 'absolute';
        t.style.left = '-9999px';
        document.body.appendChild(t);
        t.select();
        try { document.execCommand('copy'); done(); } catch (e) { prompt('Copy this link:', url); }
        document.body.removeChild(t);
      }
    });
  }
})();
