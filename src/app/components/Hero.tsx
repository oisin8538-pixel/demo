import { ArrowRight, ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Hero() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Layered background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-background/80 to-background z-10" />

      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] z-[5]"
        style={{
          backgroundImage: 'linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Performance bundle image as hero background */}
      <img
        src="/images/performance-bundle.jpg"
        alt="Performance Engine Bike"
        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity z-[2]"
      />

      <div ref={ref} className={`relative z-20 container mx-auto px-4 text-center pt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Badge */}
        <div className="inline-flex items-center justify-center px-5 py-2 mb-8 border border-primary/30 rounded-full bg-primary/10 text-primary uppercase tracking-[0.3em] text-xs font-semibold animate-gold-glow">
          ⚙ Est 2023 — Custom Engine Bikes
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 max-w-5xl mx-auto font-extrabold text-foreground tracking-tight leading-[0.95]">
          Power Your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-400 to-primary animate-shimmer">
            Ride
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-muted-foreground font-light leading-relaxed">
          Hand-built motorized engines fitted onto premium bicycles.
          <span className="text-foreground font-medium"> Precision. Power. Performance.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#bikes"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] text-sm uppercase tracking-wider"
          >
            Explore Bundles
            <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-foreground px-8 py-4 rounded-full border border-border hover:border-primary/50 transition-all duration-300 font-medium text-sm uppercase tracking-wider backdrop-blur-sm"
          >
            Request a Build
          </a>
        </div>

        {/* Featured bikes preview strip */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-12">
          {[
            { src: '/images/light-bundle.jpg', label: 'Light' },
            { src: '/images/standard-bundle.jpg', label: 'Standard' },
            { src: '/images/performance-bundle.jpg', label: 'Performance' },
          ].map((bike, i) => (
            <a
              key={bike.label}
              href="#bikes"
              className="group relative"
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-border group-hover:border-primary transition-all duration-500 shadow-lg group-hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] group-hover:scale-110">
                <img
                  src={bike.src}
                  alt={`${bike.label} Bundle`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <span className="block text-[10px] sm:text-xs text-muted-foreground group-hover:text-primary mt-2 uppercase tracking-wider font-medium transition-colors text-center">
                {bike.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#bikes"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}
