/**
 * Navigation Module
 * 
 * Handles the top navigation bar:
 * - Mobile hamburger menu toggle
 * - Active section highlighting
 * - Scroll-based nav background opacity
 * - Menu item click handlers
 * 
 * @author Sunil
 */

export function initNav() {
  const menuButton = document.querySelector('.menu-button');
  const menuList = document.querySelector('.menu-list');
  const menuItems = document.querySelectorAll('.menu-item a');
  const topBar = document.querySelector('.top-bar');

  if (menuButton && menuList) {
    menuButton.addEventListener('click', () => {
      menuButton.classList.toggle('active');
      menuList.classList.toggle('open');
    });
  }

  // Close menu on item click (mobile)
  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      if (menuList) menuList.classList.remove('open');
      if (menuButton) menuButton.classList.remove('active');
    });
  });

  // Nav background on scroll
  if (topBar) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (scrollY > 50) {
        topBar.classList.add('scrolled');
      } else {
        topBar.classList.remove('scrolled');
      }
    });
  }
}
