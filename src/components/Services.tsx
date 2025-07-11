import React, { useEffect, useState } from 'react';
import { Code, Globe, Smartphone, ArrowRight, CheckCircle, Zap, Shield, Layers, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Bespoke enterprise software engineered to streamline operations and scale with confidence.",
      features: [
        "AI-driven Automation",
        "Secure API Development", 
        "Scalable Architecture",
        "DevOps & Cloud Integrations"
      ],
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Crafting responsive, high-performance web platforms built for growth.",
      features: [
        "Jamstack & Next.js",
        "SEO-optimized E-commerce",
        "CMS & Headless CMS",
        "Lighthouse-optimized PWAs"
      ],
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development", 
      description: "Pixel-perfect native and cross-platform apps that deliver powerful user engagement.",
      features: [
        "iOS & Android Apps",
        "React Native Expertise",
        "UI/UX Prototyping",
        "App Store Strategy"
      ],
      gradient: "from-orange-600 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-400/5 dark:to-purple-400/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Premium Tech Solutions</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-black dark:text-white mb-6 leading-tight">
              Empowering Your
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Vision
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Explore our tailored services designed to fuel innovation and scale businesses globally.
            </p>

            <div className="text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 font-medium">
                Trusted by innovative companies worldwide
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400">
                Experience excellence in every project we deliver
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
              Our <span className="text-blue-600 dark:text-blue-400">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital solutions crafted with precision and powered by cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white dark:bg-gray-800 opacity-0 animate-fade-in`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardContent className="relative p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl mb-6 shadow-lg`}>
                    <service.icon className="text-white w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 group">
                        <div className="flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform duration-200" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button 
                      variant="ghost" 
                      className="group/btn text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium p-0"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Zap className="w-4 h-4 text-yellow-300 mr-2" />
            <span className="text-sm font-medium text-white/90">Ready to Transform?</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Elevate Your
            <span className="block">Digital Experience?</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Let's turn your ideas into scalable digital products that drive real business results.
          </p>

          <div className="text-center">
            <p className="text-lg text-white/90 mb-4 font-medium">
              Start your digital transformation journey today
            </p>
            <div className="flex justify-center items-center gap-6">
              <div className="flex items-center text-white/80">
                <Shield className="w-5 h-5 mr-2" />
                <span className="text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center text-white/80">
                <Layers className="w-5 h-5 mr-2" />
                <span className="text-sm">Expert Guidance</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-white/80">
            <p className="text-sm">
              🚀 Join 200+ companies that trust KJ for their digital transformation
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
