
import React, { useEffect, useState } from 'react';
import { Code, Monitor, Smartphone, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built from scratch to meet your specific business requirements and workflows.",
      features: [
        "Enterprise Applications",
        "API Development & Integration",
        "Database Design & Optimization",
        "Cloud-Native Solutions"
      ]
    },
    {
      icon: Monitor,
      title: "Web Development",
      description: "Modern, responsive websites and web applications that deliver exceptional user experiences.",
      features: [
        "React & Next.js Applications",
        "E-commerce Platforms",
        "Progressive Web Apps (PWA)",
        "CMS Development"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development",
      description: "Native and cross-platform mobile apps that engage users and drive business growth.",
      features: [
        "iOS & Android Development",
        "React Native Applications",
        "App Store Optimization",
        "Mobile UI/UX Design"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We specialize in creating innovative digital solutions that help businesses grow and succeed in today's competitive market.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 opacity-0 animate-fade-in`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-6 mx-auto">
                    <service.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-6 opacity-90">
              Let's discuss how we can help bring your ideas to life with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2" size={16} />
              </a>
              <a
                href="/projects"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
