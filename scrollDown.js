document.addEventListener('DOMContentLoaded', function() {
    if (window.location.hash) {
      var link = document.querySelector('a[href="' + window.location.hash + '"]');
      if (link && link.getAttribute('data-clicked') === 'true') {
        var targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        history.replaceState(null, null, ' ');
      }
    }
  });
  
  document.querySelector('.arrowsDown a').addEventListener('click', function() {
    this.setAttribute('data-clicked', 'true');
  });
  