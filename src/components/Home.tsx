
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowRight, Briefcase, Download, Eye } from 'lucide-react';
import portfolioData from '../data/portfolio.json';
import AnimatedBackground from './AnimatedBackground';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isResumeDialogOpen, setIsResumeDialogOpen] = useState(false);
  const { personal, skills, showServices } = portfolioData;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const currentBio = showServices ? personal.companyBio : personal.bio;
  const currentTitle = showServices ? "IT Solutions & Development" : personal.title;
  
  // Helper functions for resume links
  const getResumeViewUrl = (driveUrl: string) => {
    const fileId = driveUrl.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    return fileId ? `https://drive.google.com/file/d/${fileId}/view` : driveUrl;
  };

  const getResumeDownloadUrl = (driveUrl: string) => {
    const fileId = driveUrl.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    return fileId ? `https://drive.google.com/uc?export=download&id=${fileId}` : driveUrl;
  };

  const getResumeEmbedUrl = (driveUrl: string) => {
    const fileId = driveUrl.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : driveUrl;
  };

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

            {/* Resume Download Section */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Dialog open={isResumeDialogOpen} onOpenChange={setIsResumeDialogOpen}>
                <DialogTrigger asChild>
                  <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                    <Eye className="mr-2" size={16} />
                    View Resume
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full h-[80vh]">
                  <DialogHeader>
                    <DialogTitle>Resume - {personal.name}</DialogTitle>
                  </DialogHeader>
                  <div className="flex-1 w-full h-full">
                    <iframe
                      src={getResumeEmbedUrl(personal.resumeUrl)}
                      className="w-full h-full border-0 rounded-lg"
                      title="Resume PDF Viewer"
                    />
                  </div>
                </DialogContent>
              </Dialog>
              <a
                href={getResumeDownloadUrl(personal.resumeUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-medium rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                <Download className="mr-2" size={16} />
                Download CV
              </a>
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
            <div className="relative group perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative transform transition-all duration-700 hover:scale-105 hover:rotate-2 group-hover:shadow-2xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-700 animate-pulse"></div>
                <img
                  src={personal.image}
                  alt={personal.name}
                  className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl transform transition-all duration-700 group-hover:scale-[1.02]"
                  style={{
                    animation: 'float 6s ease-in-out infinite'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className={`mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Technical Skills
          </h3>
          
          {/* Skills Categories */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, categorySkills]) => {
              const categoryColors = {
                Frontend: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-300', dot: 'bg-blue-500' },
                Backend: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-700 dark:text-green-300', dot: 'bg-green-500' },
                Database: { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-700 dark:text-purple-300', dot: 'bg-purple-500' },
                'DevOps & Tools': { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-700 dark:text-orange-300', dot: 'bg-orange-500' },
                Concepts: { bg: 'bg-pink-100 dark:bg-pink-900/30', text: 'text-pink-700 dark:text-pink-300', dot: 'bg-pink-500' }
              };

              const colors = categoryColors[category] || categoryColors.Concepts;
              const isLargeCategory = category === 'Concepts' && categorySkills.length > 3;

              return (
                <div 
                  key={category} 
                  className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 ${isLargeCategory ? 'md:col-span-2 lg:col-span-2' : ''}`}
                >
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className={`w-3 h-3 ${colors.dot} rounded-full mr-3`}></span>
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <span key={skill} className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-medium`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
