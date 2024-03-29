
    document.getElementById('login-btn').addEventListener('click', function() {
        document.getElementById('loginPopup').style.display = 'block';
    });

    document.getElementById('login-btn-mobile').addEventListener('click', function() {
      document.getElementById('loginPopup').style.display = 'block';
  });

    document.getElementById('closeBtn').addEventListener('click', function() {
      document.getElementById('loginPopup').style.display = 'none';
    });

    document.querySelector('.mobile-menu-button').addEventListener('click', function() {
      let overlay = document.getElementById('mobile-menu-overlay');
      let isOverlayVisible = overlay.style.display === "flex";
      overlay.style.display = isOverlayVisible ? "none" : "flex";
    });

    window.addEventListener('resize', function() {
      let overlay = document.getElementById('mobile-menu-overlay');
      if (window.innerWidth >= 1100) {
          overlay.style.display = 'none';
      }
    });

    document.querySelector('.mobile-menu-content').addEventListener('click', function() {
      let overlay = document.getElementById('mobile-menu-overlay');
        overlay.style.display = 'none';
    });

    function hiddenBox(id) {
      let textbox = document.getElementById('nr'+id);
      let isTextboxVisible = textbox.style.display === "block";
      textbox.style.display = isTextboxVisible ? "none" : "block";
    }

    function backToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
