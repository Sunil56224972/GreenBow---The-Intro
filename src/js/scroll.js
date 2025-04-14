/**
 * Scroll Animation Module
 * 
 * Manages scroll-driven animations and section transitions:
 * - IntersectionObserver for section visibility
 * - Parallax effects on hero and vision sections
 * - Smooth scroll snap between sections
 * - Progress indicator updates
 * 
 * @author Sunil
 */

let sections = [];
let observers = [];

export function initScroll() {
  sections = document.querySelectorAll('.section');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: [0, 0.25, 0.5, 0.75, 1],
  };

  sections.forEach((section) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add('visible');
          applyParallax(section, entry.intersectionRatio);
        }
      });
    }, observerOptions);
    
    observer.observe(section);
    observers.push(observer);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function applyParallax(section, ratio) {
  const bg = section.querySelector('.section-wrapper');
  if (bg) {
    const offset = (1 - ratio) * 30;
    bg.style.transform = `translateY(${offset}px)`;
  }
}
