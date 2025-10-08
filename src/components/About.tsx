
import React, { useEffect, useState } from 'react';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { personal, education } = portfolioData;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            About Me
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Profile Image */}
            <div className="lg:col-span-1 space-y-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative transform transition-all duration-500 hover:scale-[1.02] hover:-rotate-1">
                  <img
                    src={personal.image}
                    alt={personal.name}
                    className="w-full rounded-2xl shadow-2xl"
                    style={{
                      animation: 'float 5s ease-in-out infinite'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
              
              {/* Experience Highlight */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg animate-fade-in">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    1+ Years
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                    Professional Experience
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {personal.name}
                </h2>
                <p className="text-xl text-blue-600 dark:text-blue-400 mb-6">
                  {personal.title}
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {personal.bio}
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">{personal.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-blue-600 dark:text-blue-400" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">{personal.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ExternalLink className="text-blue-600 dark:text-blue-400" size={20} />
                    <a
                      href={personal.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Education
                </h3>
                {education.map((edu) => (
                  <div key={edu.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                      <span>{new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
