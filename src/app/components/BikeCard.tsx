import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface BikeCardProps {
  name: string;
  price: string;
  image: string;
  description: string;
  features: string[];
  badge?: string;
  index: number;
}

export function BikeCard({ name, price, image, description, features, badge, index }: BikeCardProps) {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <div
      ref={ref}
      className={`bg-card border border-border rounded-2xl overflow-hidden group flex flex-col transition-all duration-700 hover:border-primary/40 hover:shadow-[0_8px_40px_rgba(212,175,55,0.12)] hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Image container with overlay gradient */}
      <div className="relative h-72 sm:h-80 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Price badge */}
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md text-primary border border-primary/30 px-4 py-2 rounded-full font-bold shadow-lg text-sm">
          {price}
        </div>

        {/* Optional highlight badge */}
        {badge && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
            {badge}
          </div>
        )}

        {/* Name overlay at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <h3 className="text-2xl font-bold text-foreground tracking-tight">{name}</h3>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{description}</p>

        {/* Features list */}
        <div className="space-y-3 mb-8 flex-1">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm">
              <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
              <span className="text-foreground/80">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="w-full inline-flex items-center justify-center gap-2 bg-transparent hover:bg-primary text-primary hover:text-primary-foreground border border-primary/60 hover:border-primary py-3.5 rounded-xl transition-all duration-300 font-semibold uppercase tracking-wider text-xs group/btn"
        >
          Enquire Now
          <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
