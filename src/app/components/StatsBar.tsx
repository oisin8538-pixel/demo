import { useScrollReveal } from '../hooks/useScrollReveal';
import { Wrench, Bike, Trophy, Users } from 'lucide-react';

const stats = [
  { icon: Wrench, value: '50+', label: 'Builds Completed' },
  { icon: Bike, value: '3', label: 'Signature Bundles' },
  { icon: Trophy, value: '100%', label: 'Customer Satisfaction' },
  { icon: Users, value: 'Est 2023', label: 'Years of Passion' },
];

export function StatsBar() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section ref={ref} className="relative py-10 bg-card border-y border-border overflow-hidden">
      {/* Subtle gold gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20 mb-3">
                <stat.icon size={20} className="text-primary" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">{stat.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
