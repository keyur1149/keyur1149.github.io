
import React, { useEffect, useState, useRef } from 'react';
import { Calendar, Briefcase, Building2, TrendingUp, Sparkles } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import portfolioData from '../data/portfolio.json';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const { experience } = portfolioData;
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setIsVisible(true);

    // Intersection Observer for cards
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set(prev).add(index));
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(card);
      return observer;
    });

    // Scroll progress for timeline
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / (sectionHeight - viewportHeight), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      observers.forEach((observer) => observer?.disconnect());
      window.removeEventListener('scroll', handleScroll);
    };
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
    <div ref={sectionRef} className="min-h-screen pt-16 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollProgress * 100}px)` }}
        />
        <div 
          className="absolute bottom-1/4 -right-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${-scrollProgress * 150}px)` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl mb-6 backdrop-blur-sm border border-primary/10">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6">
              Professional Journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building innovative solutions and growing through challenging experiences
            </p>
          </div>

          {/* Timeline with scroll progress */}
          <div className="relative">
            {/* Animated timeline line */}
            <div className="absolute left-8 lg:left-1/2 lg:-ml-1 top-0 w-0.5 h-full bg-border">
              <div 
                className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
                style={{ height: `${scrollProgress * 100}%` }}
              />
            </div>

            {/* Experience Cards */}
            <div className="space-y-16 relative">
              {experience.map((exp, index) => {
                const isLeft = index % 2 === 0;
                const isCardVisible = visibleCards.has(index);
                
                return (
                  <div
                    key={exp.id}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className={`relative transition-all duration-700 ${
                      isCardVisible 
                        ? 'opacity-100 translate-x-0' 
                        : `opacity-0 ${isLeft ? '-translate-x-20' : 'translate-x-20'}`
                    }`}
                  >
                    <div className={`grid lg:grid-cols-2 gap-8 items-center ${!isLeft ? 'lg:grid-flow-dense' : ''}`}>
                      {/* Timeline Dot */}
                      <div className="absolute left-8 lg:left-1/2 lg:-ml-4 top-8 z-10">
                        <div className={`relative transition-all duration-500 ${isCardVisible ? 'scale-100' : 'scale-0'}`}>
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-background shadow-lg">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-ping opacity-75" />
                          </div>
                          {exp.endDate === 'Present' && (
                            <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-500 animate-pulse" />
                          )}
                        </div>
                      </div>

                      {/* Spacer for timeline */}
                      <div className={`hidden lg:block ${isLeft ? 'lg:order-1' : 'lg:order-2'}`} />

                      {/* Card Content */}
                      <Card
                        className={`group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 ml-20 lg:ml-0 ${
                          isLeft ? 'lg:order-2' : 'lg:order-1'
                        }`}
                      >
                        {/* Animated gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-700" />
                        
                        {/* Top gradient accent */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                        <CardContent className="p-8 relative">
                          {/* Header */}
                          <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-3">
                              <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                <Building2 className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                  {exp.company}
                                </h3>
                                <div className="flex items-center gap-2 mt-1">
                                  <TrendingUp className="w-4 h-4 text-muted-foreground" />
                                  <p className="text-lg font-semibold text-muted-foreground">
                                    {exp.position}
                                  </p>
                                </div>
                              </div>
                            </div>
                            
                            {exp.endDate === 'Present' && (
                              <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold rounded-full border border-green-500/30 animate-pulse">
                                Current
                              </span>
                            )}
                          </div>

                          {/* Timeline Info */}
                          <div className="flex items-center gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
                            <Calendar className="w-5 h-5 text-primary" />
                            <div className="flex items-center gap-2 text-sm">
                              <span className="font-semibold text-foreground">{formatDate(exp.startDate)}</span>
                              <span className="text-muted-foreground">→</span>
                              <span className="font-semibold text-foreground">{formatDate(exp.endDate)}</span>
                              <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded">
                                {calculateDuration(exp.startDate, exp.endDate)}
                              </span>
                            </div>
                          </div>

                          {/* Description */}
                          <ul className="space-y-3">
                            {exp.description.map((point, idx) => (
                              <li 
                                key={idx} 
                                className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-all duration-300 group/item"
                                style={{ 
                                  transitionDelay: isCardVisible ? `${idx * 100}ms` : '0ms',
                                  transform: isCardVisible ? 'translateX(0)' : 'translateX(-10px)',
                                  opacity: isCardVisible ? 1 : 0
                                }}
                              >
                                <div className="mt-2 min-w-[8px] h-[8px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover/item:scale-150 group-hover/item:shadow-lg group-hover/item:shadow-purple-500/50 transition-all duration-300" />
                                <span className="leading-relaxed flex-1">{point.trim()}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats Section with scroll animation */}
          <div 
            className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 ${
              scrollProgress > 0.7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Card className="relative overflow-hidden group border-2 hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="text-center p-8 relative">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                  {experience.length}
                </div>
                <div className="text-sm text-muted-foreground font-medium">Positions Held</div>
              </CardContent>
            </Card>
            
            <Card className="relative overflow-hidden group border-2 hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="text-center p-8 relative">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  {experience.reduce((sum, exp) => {
                    const start = new Date(exp.startDate);
                    const end = exp.endDate === 'Present' ? new Date() : new Date(exp.endDate);
                    return sum + (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
                  }, 0)}+
                </div>
                <div className="text-sm text-muted-foreground font-medium">Months of Experience</div>
              </CardContent>
            </Card>
            
            <Card className="relative overflow-hidden group border-2 hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="text-center p-8 relative">
                <div className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-2">
                  {experience.reduce((sum, exp) => sum + exp.description.length, 0)}
                </div>
                <div className="text-sm text-muted-foreground font-medium">Key Achievements</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
