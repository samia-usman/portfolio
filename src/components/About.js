import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate mobile app developer with expertise in creating cross-platform applications 
              using React Native and Flutter. With a strong background in Android development and modern 
              web technologies, I bring ideas to life through clean, efficient code.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              My journey in software development has led me to work on various projects ranging from 
              e-commerce applications to social platforms, always focusing on user experience and 
              performance optimization.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg">Problem Solver</span>
              <span className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg">Team Player</span>
              <span className="bg-gray-700 text-gray-300 px-4 py-2 rounded-lg">Quick Learner</span>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-64 h-64 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-gray-400 text-lg">Profile Photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;