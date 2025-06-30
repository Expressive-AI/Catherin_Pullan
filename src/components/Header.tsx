import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'education', 'experience', 'projects', 'skills'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-slate-700/50' 
          : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('hero')}
              className={`text-2xl font-bold transition-all duration-300 ${
                isScrolled ? 'text-white' : 'text-white'
              }`}
              style={{ 
                fontFamily: 'Dancing Script, cursive',
                fontSize: '2rem',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              Catherin Pullan
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-cyan-400'
                      : isScrolled 
                        ? 'text-slate-300 hover:text-white' 
                        : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-3 bg-slate-800/95 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-slate-700/50">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-cyan-400 bg-slate-700/50'
                        : 'text-slate-300 hover:text-white hover:bg-slate-700/30'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Contact Bar */}
      <div className={`fixed top-20 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="bg-slate-800/90 backdrop-blur-xl border-b border-slate-700/50">
          <div className="container mx-auto px-6 py-3">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <a 
                href="mailto:pullancatherin@gmail.com"
                className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors group"
              >
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">pullancatherin@gmail.com</span>
              </a>
              <a 
                href="tel:+971509716396"
                className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors group"
              >
                <Phone size={16} className="group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">+971 509716396</span>
              </a>
              <div className="flex items-center space-x-2 text-slate-300">
                <MapPin size={16} />
                <span className="hidden sm:inline">Dubai</span>
              </div>
              <a 
                href="https://linkedin.com/in/catherin-pullan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors group"
              >
                <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;