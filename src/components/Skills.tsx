import React from 'react';
import { Code, Database, BarChart3, Brain, Users, Clock, Zap, Award, BookOpen } from 'lucide-react';

const Skills = () => {
  const technicalSkills = {
    "Programming Languages": {
      skills: ["Python", "R", "EViews", "Stata"],
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    "Data Libraries": {
      skills: ["Pandas", "NumPy", "Seaborn", "Sklearn", "Plotly", "GGplot"],
      icon: Database,
      color: "from-emerald-500 to-teal-500"
    },
    "Analytics Tools": {
      skills: ["Power BI", "Tableau", "Excel", "Jupyter", "R Studio", "VS Code"],
      icon: BarChart3,
      color: "from-purple-500 to-pink-500"
    },
    "Core Concepts": {
      skills: ["Data Modeling", "EDA", "Econometrics", "Industrial Economics"],
      icon: Brain,
      color: "from-orange-500 to-red-500"
    }
  };

  const softSkills = [
    { name: "Communication", level: 90, icon: Users, description: "Clear presentation of complex data insights" },
    { name: "Problem-solving", level: 95, icon: Brain, description: "Analytical thinking and creative solutions" },
    { name: "Attention to detail", level: 88, icon: BarChart3, description: "Precision in data analysis and reporting" },
    { name: "Teamwork", level: 92, icon: Users, description: "Collaborative approach to project delivery" },
    { name: "Time Management", level: 85, icon: Clock, description: "Efficient project planning and execution" }
  ];

  const courses = [
    { name: "Econometrics and Statistics in R & Python", provider: "Professional Development", level: "Advanced" },
    { name: "Advanced C++ and Python", provider: "Technical Training", level: "Advanced" },
    { name: "Data Science Foundations", provider: "Core Curriculum", level: "Intermediate" },
    { name: "Basics of Machine Learning", provider: "Specialized Training", level: "Intermediate" }
  ];

  const seminars = [
    { name: "Power BI Training", organization: "Nakheel", type: "Workshop" },
    { name: "Public Policy in India", organization: "Christ University", type: "Seminar" },
    { name: "Workshop on Research Methodology", organization: "Academic", type: "Workshop" },
    { name: "Webinar on Union Budget 2023–24", organization: "Economic Forum", type: "Webinar" }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, rgba(14, 165, 233, 0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-4 rounded-2xl shadow-xl">
                  <Zap className="text-white" size={36} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Expertise</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          </div>

          {/* Technical Skills */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Technical Proficiency</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {Object.entries(technicalSkills).map(([category, data], index) => {
                const IconComponent = data.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                      <div className="flex items-center mb-6">
                        <div className={`bg-gradient-to-br ${data.color} p-3 rounded-2xl shadow-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="text-white" size={24} />
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 leading-tight">{category}</h4>
                      </div>
                      <div className="space-y-3">
                        {data.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="inline-block bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-xl text-sm font-medium mr-2 mb-2 transition-all duration-300 hover:scale-105 cursor-default border border-slate-200 hover:border-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">Professional Skills</h3>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-slate-200/50">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {softSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={index} className="group">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="text-white" size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="text-xl font-bold text-slate-900">{skill.name}</h4>
                            <span className="text-lg font-semibold text-blue-600">{skill.level}%</span>
                          </div>
                          <p className="text-slate-600 mb-4 leading-relaxed">{skill.description}</p>
                          <div className="bg-slate-200 rounded-full h-3 overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-cyan-600 h-3 rounded-full transition-all duration-1000 ease-out shadow-sm"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Courses and Seminars */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Courses */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-slate-200/50">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-3 rounded-2xl shadow-lg mr-4">
                  <Award className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Professional Courses</h3>
              </div>
              <div className="space-y-6">
                {courses.map((course, index) => (
                  <div key={index} className="group p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all duration-300 border border-slate-200 hover:border-slate-300">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-slate-900 leading-tight group-hover:text-emerald-600 transition-colors duration-300">
                        {course.name}
                      </h4>
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {course.level}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm">{course.provider}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Seminars & Workshops */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-slate-200/50">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-2xl shadow-lg mr-4">
                  <BookOpen className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Seminars & Workshops</h3>
              </div>
              <div className="space-y-6">
                {seminars.map((seminar, index) => (
                  <div key={index} className="group p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all duration-300 border border-slate-200 hover:border-slate-300">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-slate-900 leading-tight group-hover:text-purple-600 transition-colors duration-300">
                        {seminar.name}
                      </h4>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {seminar.type}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm">{seminar.organization}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;