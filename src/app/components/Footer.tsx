import { Facebook, Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border text-foreground relative">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6 group">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/60 group-hover:border-primary bg-black flex items-center justify-center transition-all duration-300">
                <img
                  src="/images/logo.png"
                  onError={(e) => { e.currentTarget.src = '/images/logo.jpg'; }}
                  alt="Midland Engine Bikes Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wide leading-tight">Midland Engine Bikes</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-primary/70 font-medium">Est. 2023</span>
              </div>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Hand-built motorized bicycles crafted in the Midlands with pride, precision, and an obsession for quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-xs uppercase tracking-[0.2em] text-foreground">Navigate</h4>
            <ul className="space-y-4">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Bundles', href: '#bikes' },
                { label: 'About Us', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Builds */}
          <div>
            <h4 className="font-bold mb-6 text-xs uppercase tracking-[0.2em] text-foreground">Our Builds</h4>
            <ul className="space-y-4">
              {['Light Bundle', 'Standard Bundle', 'Performance Bundle', 'Custom Builds'].map((item) => (
                <li key={item}>
                  <a href="#bikes" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-6 text-xs uppercase tracking-[0.2em] text-foreground">Connect</h4>
            <div className="flex gap-3 mb-8">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-background border border-border hover:border-primary hover:text-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:-translate-y-0.5"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div className="p-4 border border-border rounded-xl bg-background/50">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="text-primary font-semibold">DM us on Instagram</span> for the fastest response. We usually reply within a few hours.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Midland Engine Bikes. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors font-medium group"
            >
              Back to top
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
