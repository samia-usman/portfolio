import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Mobile App",
      description: "A full-featured e-commerce application with payment integration, user authentication, and real-time notifications.",
      techStack: ["Flutter", "Firebase", "Stripe", "Node.js"],
      github: "https://github.com/yourusername/ecommerce-app",
      playStore: "https://play.google.com/store/apps/details?id=com.yourapp",
      appStore: "https://apps.apple.com/app/your-app/id123456789"
    },
    {
      title: "Social Media Platform",
      description: "A React Native social platform with real-time messaging, photo sharing, and location-based features.",
      techStack: ["React Native", "Firebase", "Maps API", "Redux"],
      github: "https://github.com/yourusername/social-app",
      playStore: "https://play.google.com/store/apps/details?id=com.yourapp2",
      appStore: null
    },
    {
      title: "Task Management App",
      description: "A productivity app built with native Android development featuring offline sync and team collaboration.",
      techStack: ["Android", "Kotlin", "Room", "WorkManager"],
      github: "https://github.com/yourusername/task-app",
      playStore: "https://play.google.com/store/apps/details?id=com.yourapp3",
      appStore: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="h-48 bg-gray-700 flex items-center justify-center">
                <span className="text-gray-400">Screenshot Placeholder</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                  >
                    GitHub
                  </a>
                  {project.playStore && (
                    <a
                      href={project.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                    >
                      Play Store
                    </a>
                  )}
                  {project.appStore && (
                    <a
                      href={project.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                    >
                      App Store
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;