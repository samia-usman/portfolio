import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          Your Name
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 animate-fade-in">
          Mobile App Developer | Android | React Native | Flutter
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-gray-400 hover:border-white text-gray-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;