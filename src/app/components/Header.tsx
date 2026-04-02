import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/60 group-hover:border-primary bg-black flex items-center justify-center transition-all duration-300 animate-pulse-ring">
              <img
                src="/images/logo.png"
                onError={(e) => { e.currentTarget.src = '/images/logo.jpg'; }}
                alt="Midland Engine Bikes Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground tracking-wide leading-tight">Midland Engine Bikes</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-primary/70 font-medium">Est. 2023 — Custom Builds</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'Bundles', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item === 'Home' ? 'home' : item === 'Bundles' ? 'bikes' : item.toLowerCase()}`}
                className="relative text-muted-foreground hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 text-primary-foreground bg-primary hover:bg-primary/90 transition-all px-5 py-2.5 rounded-full font-semibold text-sm uppercase tracking-wide shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              <Phone size={14} />
              <span>Get a Quote</span>
            </a>
          </div>

          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu with slide-down animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-80 mt-4 pb-4 border-t border-border pt-4' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col gap-4">
            {['Home', 'Bundles', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item === 'Home' ? 'home' : item === 'Bundles' ? 'bikes' : item.toLowerCase()}`}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="flex items-center gap-2 text-primary-foreground bg-primary px-5 py-2.5 rounded-full font-semibold text-sm uppercase tracking-wide w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone size={14} />
              <span>Get a Quote</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
