
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
