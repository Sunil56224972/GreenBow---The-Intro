/**
 * GreenBow â€” Main Entry Point
 * 
 * Application bootstrapper that initializes all modules:
 * - Three.js 3D scene (hero prism, text rendering)
 * - Matter.js physics engine (word cloud animations)
 * - Scroll-driven animations and section transitions
 * - Navigation and menu system
 * - Mission terminal UI with typing effects
 * - Contact form interactions
 * 
 * @author Sunil
 */

import { initScene } from './scene.js';
import { initMatter } from './matter.js';
import { initScroll } from './scroll.js';
import { initNav } from './navigation.js';
import { initMission } from './mission.js';
import { initServices } from './services.js';

// Wait for DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Three.js 3D scene
  const threeCanvas = document.getElementById('threeCanvas');
  if (threeCanvas) {
    initScene(threeCanvas);
  }

  // Initialize Matter.js physics
  const matterCanvas = document.getElementById('matterCanvas');
  if (matterCanvas) {
    initMatter(matterCanvas);
  }

  // Initialize scroll-driven animations
  initScroll();

  // Initialize navigation
  initNav();

  // Initialize mission terminal
  initMission();

  // Initialize service page interactions
  initServices();
});
