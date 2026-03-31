// Remove hashtag anchor links that appear on hover
(function() {
  function removeHashLinks() {
    const hashLinks = document.querySelectorAll('.hash-link, a[aria-label*="Direct link to"]');
    hashLinks.forEach(link => {
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removeHashLinks);
  } else {
    removeHashLinks();
  }

  window.addEventListener('popstate', removeHashLinks);
  setInterval(removeHashLinks, 1000);
})();
