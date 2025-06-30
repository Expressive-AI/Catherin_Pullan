import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Download, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Flowing Light Effects */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-full blur-2xl animate-bounce"></div>
        </div>
        
        {/* Texture Overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-slate-700/10 to-transparent"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Handwritten Name */}
              <div className="mb-8">
                <h1 
                  className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-white leading-tight"
                  style={{ 
                    fontFamily: 'Dancing Script, cursive',
                    textShadow: '0 4px 8px rgba(0,0,0,0.5)',
                    background: 'linear-gradient(135deg, #ffffff 0%, #e0f2fe 50%, #b3e5fc 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Catherin Pullan
                </h1>
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
                  <Sparkles className="text-cyan-400" size={20} />
                  <p className="text-2xl md:text-3xl text-cyan-400 font-light tracking-wide">
                    Data Analytics Professional
                  </p>
                  <Sparkles className="text-cyan-400" size={20} />
                </div>
              </div>

              <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-slate-300 font-light">
                Motivated data analytics graduate with hands-on experience in 
                <span className="text-cyan-400 font-medium"> data science</span> and 
                <span className="text-cyan-400 font-medium"> statistical analysis</span>
              </p>

              {/* Contact Information Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto lg:mx-0">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-3 text-slate-300 group-hover:text-cyan-400 transition-colors">
                    <MapPin size={20} className="text-cyan-400" />
                    <span className="font-medium">Dubai, UAE</span>
                  </div>
                </div>
                <a 
                  href="mailto:pullancatherin@gmail.com"
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3 text-slate-300 group-hover:text-cyan-400 transition-colors">
                    <Mail size={20} className="text-cyan-400" />
                    <span className="font-medium truncate">pullancatherin@gmail.com</span>
                  </div>
                </a>
                <a 
                  href="tel:+971509716396"
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3 text-slate-300 group-hover:text-cyan-400 transition-colors">
                    <Phone size={20} className="text-cyan-400" />
                    <span className="font-medium">+971 509716396</span>
                  </div>
                </a>
                <a 
                  href="https://linkedin.com/in/catherin-pullan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3 text-slate-300 group-hover:text-cyan-400 transition-colors">
                    <Linkedin size={20} className="text-cyan-400" />
                    <span className="font-medium">LinkedIn Profile</span>
                  </div>
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <span className="relative z-10">Explore My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button 
                  onClick={() => window.location.href = '/Catherin_Pullan_CV.pdf'}
                  className="group relative px-8 py-4 bg-slate-800/80 backdrop-blur-sm text-white font-semibold rounded-2xl border-2 border-slate-600 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center space-x-3"
                >
                  <Download size={20} className="group-hover:text-cyan-400 transition-colors" />
                  <span className="group-hover:text-cyan-400 transition-colors">Download Resume</span>
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl"></div>
                
                {/* Image Container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-slate-600/50 shadow-2xl overflow-hidden group">
                  <img 
                    src="/catherin_pullan.jpg" 
                    alt="Catherin Pullan" 
                    className="w-full h-full object-cover rounded-3xl" 
                  />
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;