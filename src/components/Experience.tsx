
import React, { useEffect, useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { experience } = portfolioData;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const formatDate = (dateString: string) => {
    if (dateString === 'Present') return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-16 text-center">
            My professional journey and career highlights
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative pl-20 transition-all duration-700 delay-${index * 200}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  
                  {/* Content card */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.position}
                        </h3>
                        <h4 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-3">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">
                          {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
