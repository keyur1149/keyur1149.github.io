import React, { useEffect, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import portfolioData from "../data/portfolio.json";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { projects } = portfolioData;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 text-center max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a
            unique challenge and learning experience.
          </p>

          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 opacity-0 animate-fade-in`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed space-y-2">
                    {project.description.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{point.trim()}.</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
