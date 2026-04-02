import { Star, Quote } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const testimonials = [
  {
    name: 'James O.',
    location: 'Birmingham',
    text: "Absolutely buzzing with my Standard Bundle. The build quality is unreal — you can tell these lads actually care about what they put out. Runs like a dream every single day.",
    rating: 5,
    bundle: 'Standard Bundle',
  },
  {
    name: 'Liam K.',
    location: 'Coventry',
    text: "Got the Performance Bundle fitted and it's a different machine altogether. The disc brakes and tuned exhaust make all the difference. Best money I've spent this year, no question.",
    rating: 5,
    bundle: 'Performance Bundle',
  },
  {
    name: 'Sean M.',
    location: 'Wolverhampton',
    text: "Started with the Light Bundle for commuting and I'm blown away. Dead reliable, fires up first time every morning. Already thinking about upgrading to the Standard next.",
    rating: 5,
    bundle: 'Light Bundle',
  },
];

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.03)_0%,_transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-5 border border-primary/30 rounded-full text-primary uppercase tracking-[0.25em] text-xs font-semibold">
            Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            What Our <span className="text-primary">Riders</span> Say
          </h2>
          <p className="text-muted-foreground font-light text-lg">
            Real feedback from real customers across the Midlands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-card border border-border rounded-2xl p-8 relative hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(212,175,55,0.06)] transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Quote icon */}
              <Quote size={32} className="text-primary/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={16} className="text-primary fill-primary" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4 flex items-center justify-between">
                <div>
                  <p className="font-bold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.location}</p>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-primary/70 font-semibold bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  {t.bundle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
