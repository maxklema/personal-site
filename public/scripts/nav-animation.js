document.addEventListener('DOMContentLoaded', function() {
  const nav = document.getElementById('site-nav');
  const links = nav.querySelectorAll('a');
  let isNavActive = false; // Track if nav is currently active
  
  links.forEach((link, index) => {
    link.addEventListener('mouseenter', function() {
      const linkRect = link.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      const offsetX = linkRect.left - navRect.left;
    
      if (isNavActive) {
        nav.style.setProperty('--left-delay', '0.3s');
        nav.style.setProperty('--width-delay', '0.3s');
      } else {
        nav.style.setProperty('--left-delay', '0s');
        nav.style.setProperty('--width-delay', '0s');
        isNavActive = true;
      }
      
      nav.style.setProperty('--indicator-width', linkRect.width + 'px');
      nav.style.setProperty('--indicator-x', offsetX + 'px');
      nav.style.setProperty('--opacity', '1');
    });
  });
  
  nav.addEventListener('mouseleave', function() {
    isNavActive = false; // Reset nav state
    nav.style.setProperty('--left-delay', '0s');
    nav.style.setProperty('--width-delay', '0s');
    nav.style.setProperty('--opacity', '0');
  });
});
