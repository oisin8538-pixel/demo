import { BikeCard } from './BikeCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

const bikes = [
  {
    name: 'Light Bundle',
    price: 'From €399',
    image: '/images/light-bundle.jpg',
    description: 'The perfect entry point into motorized cycling. Built for everyday commuting with clean integration, front illumination, and a rear utility rack. Reliable, fun, and ready to go.',
    features: ['80cc 2-Stroke Engine Kit', 'LED Front Headlight', 'Rear Cargo Rack with Toolbox', 'Standard 26" Frame', 'Easy Maintenance Design'],
  },
  {
    name: 'Standard Bundle',
    price: 'From €549',
    image: '/images/standard-bundle.jpg',
    badge: 'Most Popular',
    description: 'Our best-selling build combining rugged mountain bike geometry with raw engine power. Suspension fork and disc-ready hubs for riders who want more from every journey.',
    features: ['80cc 2-Stroke Performance Engine', 'Front Suspension Fork', 'Black Fuel Tank Integration', 'Mountain Bike Frame & Tyres', 'Enhanced Chain Tensioner'],
  },
  {
    name: 'Performance Bundle',
    price: 'From €749',
    image: '/images/performance-bundle.jpg',
    description: 'The flagship build. A sleek hybrid frame paired with our most powerful engine configuration, front disc brakes, and a tuned exhaust. For those who demand the absolute best.',
    features: ['80cc High-Output Tuned Engine', 'Front Disc Brake System', 'Performance Expansion Exhaust', 'Lightweight Hybrid Frame', 'Premium Component Package'],
  }
];

export function BikesSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="bikes" className="py-24 sm:py-32 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.04)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div
          ref={ref}
          className={`text-center mb-16 sm:mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-5 border border-primary/30 rounded-full text-primary uppercase tracking-[0.25em] text-xs font-semibold">
            Our Collection
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-6 font-extrabold tracking-tight">
            Signature{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">
              Bundles
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
            Three tiers of hand-built motorized bicycle excellence.
            Every build is crafted with precision, tested for reliability, and finished to perfection.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bikes.map((bike, i) => (
            <BikeCard key={bike.name} {...bike} index={i} />
          ))}
        </div>

        {/* Bottom trust callout */}
        <div className={`text-center mt-16 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-muted-foreground text-sm">
            Can't decide? <a href="#contact" className="text-primary hover:underline font-semibold">Get in touch</a> and we'll help you choose the perfect build.
          </p>
        </div>
      </div>
    </section>
  );
}
