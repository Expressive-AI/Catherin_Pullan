import React from 'react';
import { Target, Quote } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, rgba(14, 165, 233, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-4 rounded-2xl shadow-xl">
                  <Target className="text-white" size={36} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Objective</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Decorative Quote Icons */}
            <Quote className="absolute -top-6 -left-6 text-blue-200 opacity-50" size={48} />
            <Quote className="absolute -bottom-6 -right-6 text-cyan-200 opacity-50 transform rotate-180" size={48} />
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 md:p-16 border border-slate-200/50 relative overflow-hidden">
              {/* Subtle Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-cyan-50/50 rounded-3xl"></div>
              
              <blockquote className="relative z-10 text-xl md:text-2xl leading-relaxed text-slate-700 text-center font-light italic">
                <span className="text-blue-600 font-semibold not-italic">Motivated data analytics graduate</span> skilled in 
                <span className="text-cyan-600 font-medium"> data visualization</span>, 
                <span className="text-blue-600 font-medium"> statistical analysis</span>, and 
                <span className="text-cyan-600 font-medium"> business intelligence</span>. 
                Proficient in tools like <span className="text-slate-900 font-semibold not-italic">Tableau</span>, 
                <span className="text-slate-900 font-semibold not-italic"> Power BI</span>, and 
                <span className="text-slate-900 font-semibold not-italic"> Python</span>, focusing on delivering 
                <span className="text-blue-600 font-medium"> actionable insights</span> to enhance 
                decision-making and operational efficiency. Eager to contribute 
                <span className="text-cyan-600 font-medium"> fresh perspectives</span>, grow with a forward-thinking 
                team, and drive <span className="text-blue-600 font-medium">innovation through data-driven solutions</span>.
              </blockquote>
              
              {/* Signature Line */}
              <div className="mt-8 flex justify-center">
                <div className="text-right">
                  <div className="w-32 h-px bg-gradient-to-r from-transparent to-slate-300 mb-2"></div>
                  <p className="text-slate-500 text-sm font-medium tracking-wide">CATHERIN PULLAN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;