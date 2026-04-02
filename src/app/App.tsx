import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { BikesSection } from './components/BikesSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AnimatedBackground, GradientOrbs } from './components/AnimatedBackground';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Living background layers */}
      <GradientOrbs />
      <AnimatedBackground />

      {/* Page content — z-10 to sit above the background layers */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <StatsBar />
        <BikesSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}