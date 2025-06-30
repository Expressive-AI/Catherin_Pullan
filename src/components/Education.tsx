import React from 'react';
import { GraduationCap, Calendar, BookOpen, Award, Star } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "MSc in Economics Analytics",
      institution: "Christ University",
      period: "2022–2024",
      coursework: ["Machine Learning", "Econometrics", "Data Visualisation", "Statistical Methods"],
      level: "masters",
      description: "Advanced graduate program focusing on economic data analysis and quantitative methods."
    },
    {
      degree: "BSc in Statistics",
      institution: "Vimala College, University of Calicut",
      period: "2019–2022",
      coursework: ["Game Theory", "Time Series", "R Software", "Mathematical Economics"],
      level: "bachelors",
      description: "Comprehensive undergraduate program in statistical theory and applications."
    },
    {
      degree: "12th Grade",
      institution: "Crescent Public School",
      period: "2018–2019",
      coursework: ["Physics", "Chemistry", "Mathematics", "Economics"],
      level: "high-school",
      description: "Strong foundation in sciences and mathematics with economics specialization."
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'masters': return 'from-blue-500 to-cyan-500';
      case 'bachelors': return 'from-teal-500 to-emerald-500';
      case 'high-school': return 'from-slate-500 to-slate-600';
      default: return 'from-slate-500 to-slate-600';
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'masters': return <Award size={20} className="text-white" />;
      case 'bachelors': return <GraduationCap size={20} className="text-white" />;
      case 'high-school': return <Star size={20} className="text-white" />;
      default: return <BookOpen size={20} className="text-white" />;
    }
  };

  return (
    <section id="education" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-4 rounded-2xl shadow-xl">
                  <GraduationCap className="text-white" size={36} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Journey</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index < educationData.length - 1 && (
                  <div className="absolute left-8 top-32 bottom-0 w-px bg-gradient-to-b from-slate-600 to-transparent transform translate-x-1/2"></div>
                )}
                
                <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-12">
                  {/* Timeline marker */}
                  <div className="flex-shrink-0 relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getLevelColor(edu.level)} shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300`}>
                      {getLevelIcon(edu.level)}
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-white/10 to-transparent rounded-3xl blur-sm"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 group">
                    <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <p className="text-xl text-cyan-400 font-semibold mb-4">{edu.institution}</p>
                        <p className="text-slate-300 leading-relaxed mb-4">{edu.description}</p>
                      </div>
                      
                      <div className="flex items-center text-slate-400 xl:ml-6">
                        <Calendar size={18} className="mr-3 text-cyan-400" />
                        <span className="font-medium bg-slate-700/50 px-4 py-2 rounded-full border border-slate-600/50">
                          {edu.period}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <BookOpen size={20} className="text-cyan-400 mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">Key Coursework</p>
                        <div className="flex flex-wrap gap-3">
                          {edu.coursework.map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="bg-slate-700/50 backdrop-blur-sm text-slate-200 px-4 py-2 rounded-xl text-sm border border-slate-600/50 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 cursor-default"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;