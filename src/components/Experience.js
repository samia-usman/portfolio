import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Mobile Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Lead mobile development team, architecting scalable React Native and Flutter applications for enterprise clients."
    },
    {
      title: "Mobile App Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Developed cross-platform mobile applications using React Native and Flutter, integrated payment systems and APIs."
    },
    {
      title: "Android Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description: "Built native Android applications using Kotlin and Java, implemented Material Design principles and modern architecture patterns."
    },
    {
      title: "Junior Developer",
      company: "Software House",
      period: "2017 - 2018",
      description: "Started career developing mobile applications, learned modern development practices and agile methodologies."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-600"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center mb-12">
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-900"></div>
              
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                  <h4 className="text-blue-400 font-medium mb-2">{exp.company}</h4>
                  <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;