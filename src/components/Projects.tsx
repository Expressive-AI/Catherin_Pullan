import React from 'react';
import { Folder, ExternalLink, Code2, TrendingUp, BarChart3, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Industrial Efficiency of India Using DEA",
      description: "Analyzed industrial efficiency of Indian states using Data Envelopment Analysis (DEA) methodology to provide insights into state-level industrial performance and optimization opportunities.",
      technologies: ["Python", "R", "Excel"],
      category: "Research & Analysis",
      icon: TrendingUp,
      highlights: ["State-level Analysis", "DEA Methodology", "Performance Metrics"]
    },
    {
      title: "Cycle Sales Dashboard",
      description: "Created comprehensive visual dashboards for cycle sales data, highlighting key performance metrics to support data-driven decision-making for stakeholders and business growth strategies.",
      technologies: ["Power BI"],
      category: "Business Intelligence",
      icon: BarChart3,
      highlights: ["Interactive Dashboards", "KPI Tracking", "Sales Analytics"]
    }
  ];

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      'Python': 'from-blue-500 to-blue-600',
      'R': 'from-emerald-500 to-emerald-600',
      'Excel': 'from-teal-500 to-teal-600',
      'Power BI': 'from-yellow-500 to-orange-500'
    };
    return colors[tech] || 'from-slate-500 to-slate-600';
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-4 rounded-2xl shadow-xl">
                  <Folder className="text-white" size={36} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Projects</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div key={index} className="group relative">
                  {/* Card */}
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 transform hover:-translate-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-4 rounded-2xl shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300">
                        <IconComponent className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300" size={28} />
                      </div>
                      <button className="text-slate-400 hover:text-purple-400 transition-colors duration-300 p-2 rounded-lg hover:bg-slate-700/50">
                        <ExternalLink size={20} />
                      </button>
                    </div>

                    {/* Category Badge */}
                    <div className="mb-6">
                      <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold border border-purple-500/30">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide flex items-center">
                        <Zap size={14} className="mr-2 text-purple-400" />
                        Key Highlights
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <span
                            key={highlightIndex}
                            className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-lg text-sm border border-slate-600/50 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${getTechColor(tech)} shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Interested in My Work?</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Explore more projects and discover how data-driven insights can transform your business decisions.
              </p>
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;