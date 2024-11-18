import { useState } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { Button } from './Button';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-indigo-400">
            <Brain className="w-8 h-8" />
            <span className="font-bold text-xl hidden sm:block">Attention Matters</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-indigo-400 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-indigo-400 transition-colors">Pricing</a>
            <a href="#about" className="text-gray-300 hover:text-indigo-400 transition-colors">About</a>
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="p-2 md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col gap-4">
              <a 
                href="#features" 
                className="text-gray-300 hover:text-indigo-400 transition-colors"
                onClick={toggleMenu}
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="text-gray-300 hover:text-indigo-400 transition-colors"
                onClick={toggleMenu}
              >
                Pricing
              </a>
              <a 
                href="#about" 
                className="text-gray-300 hover:text-indigo-400 transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}