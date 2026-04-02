import { useEffect, useRef } from 'react';

/**
 * Animated particle canvas background that creates floating gold dust particles.
 * Rendered on a <canvas> for maximum performance.
 */
export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeSpeed: number;
      maxOpacity: number;

      constructor(canvasW: number, canvasH: number) {
        this.x = Math.random() * canvasW;
        this.y = Math.random() * canvasH;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.2 - 0.1;
        this.maxOpacity = Math.random() * 0.5 + 0.1;
        this.opacity = Math.random() * this.maxOpacity;
        this.fadeSpeed = Math.random() * 0.008 + 0.002;
      }

      update(canvasW: number, canvasH: number) {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity += this.fadeSpeed;

        if (this.opacity >= this.maxOpacity || this.opacity <= 0) {
          this.fadeSpeed *= -1;
        }

        if (this.x < 0) this.x = canvasW;
        if (this.x > canvasW) this.x = 0;
        if (this.y < 0) this.y = canvasH;
        if (this.y > canvasH) this.y = 0;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${Math.max(0, this.opacity)})`;
        ctx.fill();
      }
    }

    const init = () => {
      resize();
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 120);
      particles = Array.from({ length: count }, () => new Particle(canvas.width, canvas.height));
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx);
      });

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      resize();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Re-measure height periodically in case content changes
    const heightInterval = setInterval(() => {
      const newH = document.documentElement.scrollHeight;
      if (canvas.height !== newH) {
        canvas.height = newH;
      }
    }, 3000);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      clearInterval(heightInterval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ opacity: 0.8 }}
      aria-hidden="true"
    />
  );
}

/**
 * Floating gradient orbs that create ambient "living" light behind content.
 * Pure CSS — no JS overhead.
 */
export function GradientOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden" aria-hidden="true">
      {/* Large warm gold orb — top right, slow drift */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          top: '5%',
          right: '-5%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)',
          animation: 'orb-drift-1 25s ease-in-out infinite',
        }}
      />

      {/* Medium cool silver orb — bottom left, opposite drift */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          bottom: '15%',
          left: '-8%',
          background: 'radial-gradient(circle, rgba(192,192,192,0.05) 0%, transparent 70%)',
          animation: 'orb-drift-2 30s ease-in-out infinite',
        }}
      />

      {/* Small accent orb — center, gentle pulse */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          top: '40%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)',
          animation: 'orb-drift-3 20s ease-in-out infinite',
        }}
      />

      {/* Noise texture overlay for depth/grain */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />
    </div>
  );
}
