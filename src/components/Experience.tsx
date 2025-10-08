import React, { useEffect, useState } from 'react';
import { Calendar, Briefcase, Building2, Award } from 'lucide-react';
import portfolioData from '../data/portfolio.json';
import { Card, CardContent } from './ui/card';

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

  const calculateDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = endDate === 'Present' ? new Date() : new Date(endDate);
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    
    if (months < 12) return `${months} months`;
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    return remainingMonths > 0 ? `${years}yr ${remainingMonths}mo` : `${years} year${years > 1 ? 's' : ''}`;
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Work Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 text-center">
            My professional journey and achievements
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

            {/* Experience Cards */}
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={exp.id} className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 -ml-3 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

                  {/* Card */}
                  <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                {exp.company}
                              </h3>
                              {exp.endDate === 'Present' && (
                                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                                  Current
                                </span>
                              )}
                            </div>
                            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                              {exp.position}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</span>
                              </div>
                              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium">
                                {calculateDuration(exp.startDate, exp.endDate)}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="space-y-2">
                          {exp.description.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="mt-2 min-w-[6px] h-[6px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                {point.trim()}
                              </p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Summary */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <Building2 className="w-10 h-10 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {experience.length}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Positions Held</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Calendar className="w-10 h-10 text-purple-600 dark:text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {experience.reduce((sum, exp) => {
                    const start = new Date(exp.startDate);
                    const end = exp.endDate === 'Present' ? new Date() : new Date(exp.endDate);
                    return sum + (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
                  }, 0)}+
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Months Experience</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="w-10 h-10 text-pink-600 dark:text-pink-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {experience.reduce((sum, exp) => sum + exp.description.length, 0)}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Key Achievements</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
