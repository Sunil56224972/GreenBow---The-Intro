/**
 * Three.js Scene Module
 * 
 * Handles all WebGL rendering:
 * - Hero section 3D prism with refraction
 * - 3D text geometry for section titles
 * - Lighting and camera setup
 * - Responsive canvas resizing
 * - Animation loop with requestAnimationFrame
 * 
 * @author Sunil
 */

import * as THREE from 'three';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

let scene, camera, renderer;
let prismMesh, textMeshes = [];
let animationId;

export function initScene(canvas) {
  scene = new THREE.Scene();
  
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  setupLighting();
  createPrism();
  loadFonts();

  window.addEventListener('resize', onResize);
  animate();
}

function setupLighting() {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0x00ff88, 1);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  const pointLight = new THREE.PointLight(0x00ff44, 0.8, 50);
  pointLight.position.set(-3, 2, 4);
  scene.add(pointLight);
}

function createPrism() {
  const geometry = new THREE.ConeGeometry(1.5, 3, 3);
  const material = new THREE.MeshPhysicalMaterial({
    color: 0x00ff88,
    transparent: true,
    opacity: 0.3,
    roughness: 0.1,
    metalness: 0.1,
    transmission: 0.9,
    thickness: 1.5,
  });
  prismMesh = new THREE.Mesh(geometry, material);
  scene.add(prismMesh);
}

function loadFonts() {
  const loader = new FontLoader();
  loader.load('/fonts/Pretendard_Regular.json', (font) => {
    const textGeo = new TextGeometry('GREENBOW', {
      font,
      size: 0.5,
      height: 0.1,
      curveSegments: 12,
    });
    const textMat = new THREE.MeshStandardMaterial({ color: 0x00ff88 });
    const textMesh = new THREE.Mesh(textGeo, textMat);
    textMesh.position.set(-2, -2, 0);
    scene.add(textMesh);
    textMeshes.push(textMesh);
  });
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  animationId = requestAnimationFrame(animate);
  
  if (prismMesh) {
    prismMesh.rotation.y += 0.005;
    prismMesh.rotation.x += 0.002;
  }

  renderer.render(scene, camera);
}

export function disposeScene() {
  cancelAnimationFrame(animationId);
  renderer.dispose();
  window.removeEventListener('resize', onResize);
}
