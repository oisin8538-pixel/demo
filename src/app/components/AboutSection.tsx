import { Award, Shield, Wrench, Cog } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const features = [
  {
    icon: Cog,
    title: 'Precision Engineering',
    description: 'Every engine is hand-fitted and aligned for seamless integration with the bicycle frame.'
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Premium components and rigorous stress testing ensure your build goes the distance.'
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description: 'Each bike is test-ridden and inspected before handover. No compromises, ever.'
  },
  {
    icon: Wrench,
    title: 'Ongoing Support',
    description: 'Full aftercare, servicing, and tune-ups available to keep your ride in peak condition.'
  }
];

const steps = [
  { step: '01', title: 'Consultation', desc: 'Tell us what you need — commuting, sport, or something custom.' },
  { step: '02', title: 'Build', desc: 'We hand-fit and tune your chosen bundle to your exact specification.' },
  { step: '03', title: 'Test & Deliver', desc: 'Every bike is test-ridden, inspected, and delivered ready to ride.' },
];

export function AboutSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal(0.1);
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollReveal(0.1);
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal(0.1);

  return (
    <section id="about" className="py-24 sm:py-32 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(212,175,55,0.04)_0%,_transparent_50%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-5 border border-primary/30 rounded-full text-primary uppercase tracking-[0.25em] text-xs font-semibold">
            Why Choose Us
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-6 font-extrabold tracking-tight">
            The Midland Engine{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">
              Difference
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Founded in 2023 with a simple mission: build the most reliable, best-looking motorized bicycles in the Midlands.
            Every build reflects our obsession with quality craftsmanship.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-24">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`text-center p-8 bg-card border border-border rounded-2xl hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(212,175,55,0.06)] transition-all duration-500 group ${
                featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-6 border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon size={26} className="text-primary" />
              </div>
              <h3 className="text-lg mb-3 font-bold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* How It Works Process */}
        <div
          ref={stepsRef}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12 tracking-tight">
            How It <span className="text-primary">Works</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30" />

            {steps.map((step, i) => (
              <div
                key={step.step}
                className={`text-center relative transition-all duration-500 ${
                  stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background border-2 border-primary text-primary font-extrabold text-xl mb-4 relative z-10 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
                  {step.step}
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
