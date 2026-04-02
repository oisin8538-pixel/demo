import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">MB</span>
            </div>
            <span className="text-xl font-bold text-gray-900">MotoBikes</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">Home</a>
            <a href="#bikes" className="text-gray-700 hover:text-red-600 transition-colors">Our Bikes</a>
            <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors">
              <Phone size={18} />
              <span className="text-sm">+1 (234) 567-890</span>
            </a>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">Home</a>
            <a href="#bikes" className="text-gray-700 hover:text-red-600 transition-colors">Our Bikes</a>
            <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Contact</a>
            <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors">
              <Phone size={18} />
              <span>+1 (234) 567-890</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
