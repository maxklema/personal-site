document.addEventListener('DOMContentLoaded', function() {
  const footerNav = document.getElementById("footer-nav");
  const footerLinks = footerNav.querySelectorAll('a');
  let isFooterNavActive = false;

  footerLinks.forEach((link) => {
    link.addEventListener('mouseenter', function() {

      const linkRect = link.getBoundingClientRect();
      const footerNavOffset = footerNav.getBoundingClientRect();
      const offsetX = linkRect.left - footerNavOffset.left;

      if (isFooterNavActive){
        footerNav.style.setProperty('--footer-width-delay', '0.3s');
        footerNav.style.setProperty('--footer-left-delay', '0.3s');
      } else {
        footerNav.style.setProperty('--footer-width-delay', '0s');
        footerNav.style.setProperty('--footer-left-delay', '0s');
        isFooterNavActive = true;
      }

      footerNav.style.setProperty('--footer-indicator-width', linkRect.width + 'px');
      footerNav.style.setProperty('--footer-indicator-x', offsetX + 'px');
      footerNav.style.setProperty('--footer-opacity', '1');
    });
  });

  footerNav.addEventListener('mouseleave', function() {
    isFooterNavActive = false;
    footerNav.style.setProperty('--footer-width-delay', '0s');
    footerNav.style.setProperty('--footer-left-delay', '0s');
    footerNav.style.setProperty('--footer-opacity', '0');
  });


});