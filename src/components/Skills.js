import React from 'react';

const Skills = () => {
  const skills = [
    'Flutter', 'React Native', 'Android', 'iOS', 'Kotlin', 
    'Firebase', 'Stripe', 'Maps', 'CI/CD', 'JavaScript',
    'TypeScript', 'React', 'Node.js', 'MongoDB', 'Git'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-blue-500 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105"
            >
              <span className="text-gray-300 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;