import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {/* About Section */}
            <div className="lg:col-span-1">
              <h3 
                className="text-3xl font-bold mb-6"
                style={{ 
                  fontFamily: 'Dancing Script, cursive',
                  background: 'linear-gradient(135deg, #ffffff 0%, #e0f2fe 50%, #b3e5fc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Catherin Pullan
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                Data Analytics Professional passionate about transforming complex data into 
                <span className="text-cyan-400 font-medium"> actionable insights</span> that drive 
                business growth and innovation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-slate-300 group">
                  <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-slate-700 transition-colors">
                    <MapPin size={18} className="text-cyan-400" />
                  </div>
                  <span>Dubai, UAE</span>
                </div>
                <a 
                  href="mailto:pullancatherin@gmail.com"
                  className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-slate-700 transition-colors">
                    <Mail size={18} className="text-cyan-400" />
                  </div>
                  <span>pullancatherin@gmail.com</span>
                </a>
                <a 
                  href="tel:+971509716396"
                  className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-slate-700 transition-colors">
                    <Phone size={18} className="text-cyan-400" />
                  </div>
                  <span>+971 509716396</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-8 text-cyan-400">Quick Navigation</h4>
              <div className="space-y-4">
                {['About', 'Education', 'Experience', 'Projects', 'Skills'].map((link) => (
                  <button
                    key={link}
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-slate-300 hover:text-white transition-colors duration-300 text-left py-2 px-4 rounded-lg hover:bg-slate-800/50 w-full"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Connect Section */}
            <div>
              <h4 className="text-xl font-bold mb-8 text-cyan-400">Let's Connect</h4>
              <p className="text-slate-300 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, collaborations, 
                and innovative data-driven solutions.
              </p>
              <div className="flex space-x-4 mb-8">
                <a
                  href="https://linkedin.com/in/catherin-pullan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-2xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-blue-500/25"
                >
                  <Linkedin size={24} className="text-white" />
                </a>
                <a
                  href="mailto:pullancatherin@gmail.com"
                  className="group bg-gradient-to-br from-slate-700 to-slate-800 p-4 rounded-2xl hover:from-slate-600 hover:to-slate-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-slate-500/25"
                >
                  <Mail size={24} className="text-white" />
                </a>
              </div>
              
              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
              >
                <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform duration-300" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                Bringing dreams to digital reality with <span className="text-cyan-400">Expressive AI Pvt Ltd</span> — where innovation meets elegance.
              </p>
              <p className="text-slate-400 text-sm mt-4 md:mt-0 flex items-center">
                Meticulously crafted for her journey through data's infinite possibilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;