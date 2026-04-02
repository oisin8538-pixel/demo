import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50 z-10" />
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1552293164-607ec8360528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
        alt="Sport motorcycle"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl mb-6 max-w-4xl mx-auto">
          Ride the Future
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
          Premium motorcycles for those who live for the open road
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#bikes"
            className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg transition-colors"
          >
            View Our Collection
            <ArrowRight size={20} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg border-2 border-white/30 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
