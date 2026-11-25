(function () {
  const canvas = document.getElementById("smoke-canvas");
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext("2d");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let w = 0;
  let h = 0;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function makeSprite() {
    const size = 256;
    const off = document.createElement("canvas");
    off.width = off.height = size;
    const c = off.getContext("2d");
    const g = c.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    g.addColorStop(0, "rgba(214, 212, 202, 0.85)");
    g.addColorStop(0.45, "rgba(214, 212, 202, 0.3)");
    g.addColorStop(1, "rgba(214, 212, 202, 0)");
    c.fillStyle = g;
    c.fillRect(0, 0, size, size);
    return off;
  }

  const sprite = makeSprite();

  function spawn(initial) {
    return {
      x: Math.random() * w,
      y: initial ? Math.random() * h : h + 160,
      r: 150 + Math.random() * 280,
      vx: -0.18 - Math.random() * 0.4,
      vy: -0.1 - Math.random() * 0.28,
      alpha: 0.03 + Math.random() * 0.05,
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: 0.0006 + Math.random() * 0.0012
    };
  }

  let particles = [];

  function init() {
    resize();
    const count = Math.min(26, Math.max(12, Math.floor(w / 55)));
    particles = [];
    for (let i = 0; i < count; i++) particles.push(spawn(true));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.phase += p.phaseSpeed * 16;
      p.x += p.vx + Math.sin(p.phase) * 0.45;
      p.y += p.vy;
      if (p.y < -p.r - 180 || p.x < -p.r - 200 || p.x > w + p.r + 200) {
        particles[i] = spawn(false);
        continue;
      }
      ctx.globalAlpha = p.alpha;
      ctx.drawImage(sprite, p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);

  if (reduced) {
    resize();
    for (let i = 0; i < 10; i++) {
      const p = spawn(true);
      ctx.globalAlpha = p.alpha;
      ctx.drawImage(sprite, p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);
    }
    ctx.globalAlpha = 1;
  } else {
    init();
    requestAnimationFrame(draw);
  }
})();
