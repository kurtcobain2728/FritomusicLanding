import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  type: 'star' | 'symbol' | 'orb';
  size: number;
  symbol: string;
  color: string;
  vx: number;
  vy: number;
  alpha: number;
  twinkleSpeed: number;
  twinkleVal: number;
  rot: number;
  vRot: number;
}

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

export const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationFrameId: number;

    const musicalSymbols = ['♪', '♫', '♩', '♬', '✦', '✧', '◈'];
    const colors = ['#ffffff', '#78dcff', '#ffd282', '#c89bff', '#64ffda'];
    const PARTICLE_COUNT = 165;
    let mouseX = -1000;
    let mouseY = -1000;

    let particles: Particle[] = [];
    let shockwaves: Shockwave[] = [];

    const resizeCanvas = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    const createParticle = (initial: boolean): Particle => {
      const typeRoll = Math.random();
      let type: 'star' | 'symbol' | 'orb' = 'star';
      if (typeRoll > 0.88) {
        type = 'symbol';
      } else if (typeRoll > 0.72) {
        type = 'orb';
      }

      return {
        x: Math.random() * width,
        y: initial ? Math.random() * height : height + 10,
        type,
        size:
          type === 'symbol'
            ? 12 + Math.random() * 8
            : type === 'orb'
            ? 2.5 + Math.random() * 2.5
            : 0.7 + Math.random() * 1.8,
        symbol: musicalSymbols[Math.floor(Math.random() * musicalSymbols.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.35,
        vy: -0.2 - Math.random() * 0.45,
        alpha: 0.15 + Math.random() * 0.75,
        twinkleSpeed: 0.01 + Math.random() * 0.03,
        twinkleVal: Math.random() * Math.PI * 2,
        rot: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.02,
      };
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(createParticle(true));
      }
    };

    const triggerShockwave = () => {
      if (shockwaves.length < 3) {
        shockwaves.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: 5,
          maxRadius: 180 + Math.random() * 140,
          alpha: 0.35,
        });
      }
    };

    const shockwaveInterval = setInterval(triggerShockwave, 3400);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Acoustic Shockwaves
      for (let w = shockwaves.length - 1; w >= 0; w--) {
        const wave = shockwaves[w];
        wave.radius += 1.8;
        wave.alpha = Math.max(0, 0.35 * (1 - wave.radius / wave.maxRadius));

        ctx.save();
        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(120, 220, 255, ${wave.alpha})`;
        ctx.lineWidth = 1.2;
        ctx.setLineDash([4, 6]);
        ctx.stroke();
        ctx.restore();

        if (wave.radius >= wave.maxRadius) {
          shockwaves.splice(w, 1);
        }
      }

      // Constellation filaments
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 75) {
            const linkAlpha = (1 - dist / 75) * 0.16;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(120, 220, 255, ${linkAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Render & update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.twinkleVal += p.twinkleSpeed;
        p.rot += p.vRot;

        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 120 && mDist > 0) {
          const force = (1 - mDist / 120) * 1.5;
          p.x += (mdx / mDist) * force;
          p.y += (mdy / mDist) * force;
        }

        if (p.y < -30) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -30) p.x = width + 20;
        if (p.x > width + 30) p.x = -20;

        const currentAlpha = Math.min(1, Math.max(0.1, p.alpha + Math.sin(p.twinkleVal) * 0.25));

        ctx.save();
        if (p.type === 'symbol') {
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.font = `${p.size}px -apple-system, sans-serif`;
          ctx.fillStyle = p.color;
          ctx.globalAlpha = currentAlpha * 0.85;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 8;
          ctx.fillText(p.symbol, -p.size / 2, p.size / 2);
        } else if (p.type === 'orb') {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = currentAlpha;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 12;
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = currentAlpha;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 4;
          ctx.fill();
        }
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    resizeCanvas();
    initParticles();
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(shockwaveInterval);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Ambient Cosmic Vector Background with Orbital Particle Rings */}
      <svg
        className="space-backdrop-svg"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g className="constellation-group">
          {/* Distant Stars */}
          <circle cx="120" cy="180" r="1.5" fill="#78dcff" className="star-twinkle-1" />
          <circle cx="280" cy="90" r="2" fill="#ffd282" className="star-twinkle-2" />
          <circle cx="450" cy="220" r="1" fill="#ffffff" className="star-twinkle-3" />
          <circle cx="680" cy="110" r="1.8" fill="#be8cff" className="star-twinkle-1" />
          <circle cx="890" cy="240" r="1.2" fill="#78dcff" className="star-twinkle-2" />
          <circle cx="1120" cy="95" r="2.2" fill="#ffd282" className="star-twinkle-3" />
          <circle cx="1340" cy="190" r="1.5" fill="#ffffff" className="star-twinkle-1" />

          <circle cx="180" cy="620" r="2" fill="#be8cff" className="star-twinkle-2" />
          <circle cx="360" cy="780" r="1.4" fill="#78dcff" className="star-twinkle-3" />
          <circle cx="560" cy="680" r="2.5" fill="#ffd282" className="star-twinkle-1" />
          <circle cx="820" cy="810" r="1.2" fill="#ffffff" className="star-twinkle-2" />
          <circle cx="1040" cy="670" r="1.8" fill="#be8cff" className="star-twinkle-3" />
          <circle cx="1260" cy="740" r="2" fill="#78dcff" className="star-twinkle-1" />

          {/* Constellation Filaments */}
          <path d="M120 180 L280 90 L450 220" stroke="rgba(120, 220, 255, 0.22)" strokeWidth="0.8" strokeDasharray="3 3" />
          <path d="M890 240 L1120 95 L1340 190" stroke="rgba(190, 140, 255, 0.2)" strokeWidth="0.8" strokeDasharray="3 3" />
          <path d="M180 620 L360 780 L560 680" stroke="rgba(120, 220, 255, 0.2)" strokeWidth="0.8" strokeDasharray="3 3" />
          <path d="M820 810 L1040 670 L1260 740" stroke="rgba(255, 210, 130, 0.2)" strokeWidth="0.8" strokeDasharray="3 3" />
        </g>

        {/* Celestial Orbital Rings / Pulsar Sound Waves */}
        <g className="orbital-ring">
          <circle cx="1150" cy="450" r="220" stroke="rgba(120, 220, 255, 0.14)" strokeWidth="1.2" strokeDasharray="6 8" />
          <circle cx="1150" cy="450" r="340" stroke="rgba(190, 140, 255, 0.12)" strokeWidth="1" strokeDasharray="4 6" />
          <circle cx="1150" cy="450" r="460" stroke="rgba(255, 210, 130, 0.08)" strokeWidth="0.8" />
          <circle cx="200" cy="400" r="300" stroke="rgba(120, 220, 255, 0.09)" strokeWidth="1" strokeDasharray="8 12" />
        </g>
      </svg>

      {/* Dynamic Cosmic Space & Musical Particles Simulation Canvas */}
      <canvas ref={canvasRef} className="cosmic-particle-canvas" aria-hidden="true" />
    </>
  );
};
