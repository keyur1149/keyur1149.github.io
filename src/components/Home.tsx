
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowRight, Briefcase } from 'lucide-react';
import portfolioData from '../data/portfolio.json';
import AnimatedBackground from './AnimatedBackground';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { personal, skills, showServices } = portfolioData;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const currentBio = showServices ? personal.companyBio : personal.bio;
  const currentTitle = showServices ? "IT Solutions & Development" : personal.title;

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {personal.name}
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              {currentTitle}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              {currentBio}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                View My Work
                <ArrowRight className="ml-2" size={16} />
              </Link>
              {showServices && (
                <Link
                  to="/services"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  <Briefcase className="mr-2" size={16} />
                  Our Services
                </Link>
              )}
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="text-blue-600" size={20} />
              </a>
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                <Github className="text-gray-700 dark:text-gray-300" size={20} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="text-red-600" size={20} />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              <img
                src={personal.image}
                alt={personal.name}
                className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className={`mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Technical Arsenal
          </h3>
          
          {/* Skills Grid with Enhanced Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Skill Icon/Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Skill Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {skill}
                    </span>
                    <div className="w-3 h-3 bg-green-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 delay-300"
                      style={{ 
                        width: `${Math.floor(Math.random() * 25) + 70}%`,
                        animationDelay: `${index * 200 + 500}ms`
                      }}
                    />
                  </div>
                  
                  {/* Experience Level */}
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {index < 3 ? 'Expert' : index < 6 ? 'Advanced' : 'Proficient'}
                  </span>
                </div>
                
                {/* Floating Effect on Hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Continuously expanding my skillset and embracing new technologies
            </p>
            <div className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-medium">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span>Always Learning</span>
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
