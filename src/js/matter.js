/**
 * Matter.js Physics Module
 * 
 * Creates physics-based word cloud animations using Matter.js:
 * - Falling word bodies with collision
 * - Ground and wall boundaries
 * - Mouse interaction (drag bodies)
 * - Canvas rendering sync
 * 
 * @author Sunil
 */

import Matter from 'matter-js';

const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint } = Matter;

let engine, render, runner;

export function initMatter(canvas) {
  engine = Engine.create({
    gravity: { x: 0, y: 0.5 },
  });

  const width = window.innerWidth;
  const height = window.innerHeight;

  render = Render.create({
    canvas,
    engine,
    options: {
      width,
      height,
      wireframes: false,
      background: 'transparent',
      pixelRatio: Math.min(window.devicePixelRatio, 2),
    },
  });

  // Create boundaries
  const ground = Bodies.rectangle(width / 2, height + 30, width + 100, 60, {
    isStatic: true,
    render: { visible: false },
  });
  const leftWall = Bodies.rectangle(-30, height / 2, 60, height + 100, {
    isStatic: true,
    render: { visible: false },
  });
  const rightWall = Bodies.rectangle(width + 30, height / 2, 60, height + 100, {
    isStatic: true,
    render: { visible: false },
  });

  Composite.add(engine.world, [ground, leftWall, rightWall]);

  // Create word bodies
  const words = [
    'HTML', 'CSS', 'JavaScript', 'Three.js', 'WebGL',
    'UI/UX', 'React', 'Vite', 'Node.js', 'Design',
    'Animation', '3D', 'Creative', 'Responsive',
  ];

  words.forEach((word, i) => {
    const x = Math.random() * (width - 200) + 100;
    const y = -(Math.random() * 500 + 100);
    const body = Bodies.rectangle(x, y, word.length * 12, 30, {
      restitution: 0.4,
      friction: 0.1,
      render: {
        fillStyle: 'transparent',
        strokeStyle: '#00ff88',
        lineWidth: 1,
      },
      label: word,
    });
    Composite.add(engine.world, body);
  });

  // Mouse interaction
  const mouse = Mouse.create(canvas);
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse,
    constraint: {
      stiffness: 0.2,
      render: { visible: false },
    },
  });
  Composite.add(engine.world, mouseConstraint);

  Render.run(render);
  runner = Runner.create();
  Runner.run(runner, engine);
}

export function disposeMatter() {
  if (runner) Runner.stop(runner);
  if (render) Render.stop(render);
  if (engine) Engine.clear(engine);
}
