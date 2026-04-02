import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BikesSection } from './components/BikesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BikesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}