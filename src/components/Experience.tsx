import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, Building, Clock } from 'lucide-react';

const Experience = () => {
  const experienceData = [
    {
      title: "Data Analyst",
      company: "Extremaa Technologies",
      location: "Kerala",
      period: "May 2024 – April 2025",
      type: "Part-time",
      achievements: [
        "Analyzed ERP data for schools, hotels, van sales",
        "Built dashboards for student data, pricing optimization, and sales performance",
        "Improved academic outcomes and route-level sales strategies"
      ],
      description: "Leading data analysis initiatives across multiple business verticals."
    },
    {
      title: "Data Scientist Intern",
      company: "NAKHEEL",
      location: "Dubai",
      period: "Jan 2024 – May 2024",
      type: "Internship",
      achievements: [
        "Applied data fusion techniques to traffic, event, and community datasets",
        "Generated insights using advanced analytics methods"
      ],
      description: "Specialized in advanced data fusion and analytics for urban development projects."
    },
    {
      title: "Statistics Faculty",
      company: "Christ PU College",
      location: "Bengaluru",
      period: "June 2024 – March 2025",
      type: "Part-time",
      achievements: [
        "Guided students on Python and statistics projects",
        "Coordinated ACC association events and mentored fest teams"
      ],
      description: "Teaching and mentoring students in statistical analysis and programming."
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Part-time': return 'from-blue-500 to-cyan-500';
      case 'Internship': return 'from-teal-500 to-emerald-500';
      default: return 'from-slate-500 to-slate-600';
    }
  };

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, rgba(14, 165, 233, 0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-4 rounded-2xl shadow-xl">
                  <Briefcase className="text-white" size={36} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Experience</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index < experienceData.length - 1 && (
                  <div className="absolute left-8 top-32 bottom-0 w-px bg-gradient-to-b from-slate-300 to-transparent transform translate-x-1/2"></div>
                )}
                
                <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-12">
                  {/* Timeline marker */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                      <Building size={20} className="text-white" />
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-sm"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                    <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getTypeColor(exp.type)} shadow-lg`}>
                            {exp.type}
                          </span>
                        </div>
                        <p className="text-xl text-blue-600 font-semibold mb-3">{exp.company}</p>
                        <p className="text-slate-600 leading-relaxed mb-4">{exp.description}</p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-slate-500">
                          <div className="flex items-center bg-slate-100 px-3 py-2 rounded-lg">
                            <MapPin size={16} className="mr-2 text-blue-500" />
                            <span className="font-medium">{exp.location}</span>
                          </div>
                          <div className="flex items-center bg-slate-100 px-3 py-2 rounded-lg">
                            <Clock size={16} className="mr-2 text-cyan-500" />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-slate-800 flex items-center">
                        <ChevronRight size={20} className="text-blue-500 mr-2" />
                        Key Achievements
                      </h4>
                      <div className="space-y-3 ml-7">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start space-x-3 group/item">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300"></div>
                            <p className="text-slate-700 leading-relaxed group-hover/item:text-slate-900 transition-colors duration-300">
                              {achievement}
                            </p>
                          </div>
                        ))}
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

export default Experience;