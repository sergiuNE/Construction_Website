document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.fa-bars');
    const closeMenu = document.querySelector('.fa-xmark');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
      navLinks.classList.add('open');
      document.body.classList.add('no-scroll');
    });
  
    closeMenu.addEventListener('click', function() {
      navLinks.classList.remove('open');
      document.body.classList.remove('no-scroll');
    });
  });
  