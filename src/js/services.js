/**
 * Services Module
 * 
 * Handles the service section interactions:
 * - Service card click â†’ detail page load
 * - Back button navigation
 * - Service page transition animations
 * - Dynamic page loading from src/pages/
 * 
 * @author Sunil
 */

const SERVICE_PAGES = {
  branding: 'src/pages/branding.html',
  'content-creation': 'src/pages/content-creation.html',
  'creative-consulting': 'src/pages/creative-consulting.html',
  'digital-campaigns': 'src/pages/digital-campaigns.html',
  'sns-marketing': 'src/pages/sns-marketing.html',
};

export function initServices() {
  // Back button handlers for all service pages
  document.addEventListener('click', (e) => {
    const backButton = e.target.closest('.back-button');
    if (backButton) {
      e.preventDefault();
      closeServicePage();
    }
  });
}

function closeServicePage() {
  const activePage = document.querySelector('.service-page.active');
  if (activePage) {
    activePage.classList.remove('active');
    activePage.classList.add('closing');
    setTimeout(() => {
      activePage.classList.remove('closing');
    }, 400);
  }
}

export function openServicePage(name) {
  const page = document.querySelector(.service-page-\);
  if (page) {
    page.classList.add('active');
  }
}
