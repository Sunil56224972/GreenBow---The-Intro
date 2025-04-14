/**
 * Mission Terminal Module
 * 
 * Creates the retro terminal UI in the mission section:
 * - Character-by-character typing animation
 * - Decode/scan visual effects
 * - Terminal command simulation
 * - Menu start/skip button handlers
 * 
 * @author Sunil
 */

let typeInterval;

export function initMission() {
  const lines = document.querySelectorAll('.mission-text-window .line');
  const decodingText = document.querySelector('.decoding-text');
  const startBtn = document.getElementById('firstMenuStart');
  const skipBtn = document.getElementById('firstMenuSkip');

  if (startBtn) {
    startBtn.addEventListener('click', () => startDecode(decodingText));
  }

  if (skipBtn) {
    skipBtn.addEventListener('click', () => skipDecode(decodingText, lines));
  }

  // Auto-start typing for visible lines
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        typeLine(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  lines.forEach((line) => observer.observe(line));
}

function typeLine(element) {
  const text = element.getAttribute('data-text') || '';
  let i = 0;
  element.textContent = '';
  
  typeInterval = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typeInterval);
    }
  }, 20);
}

function startDecode(container) {
  if (!container) return;
  container.textContent = '> DECODING MISSION PARAMETERS...';
  // Decode animation handled by CSS
}

function skipDecode(container, lines) {
  if (!container) return;
  clearInterval(typeInterval);
  container.textContent = '> MISSION DECODED';
  lines.forEach((line) => {
    line.textContent = line.getAttribute('data-text') || '';
  });
}
