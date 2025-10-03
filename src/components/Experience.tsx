
import React, { useEffect, useState } from 'react';
import { Calendar, Briefcase, Building2, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';
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
    <div className="min-h-screen pt-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-lg mb-4">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
              Professional Journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building innovative solutions and growing through challenging experiences
            </p>
          </div>

          {/* Experience Grid */}
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card
                key={exp.id}
                className={`group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="p-8 relative">
                  <div className="grid md:grid-cols-[1fr,auto] gap-6">
                    {/* Left: Main Content */}
                    <div className="space-y-4">
                      {/* Company & Role */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Building2 className="w-5 h-5 text-primary" />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">
                            {exp.company}
                          </h3>
                          {exp.endDate === 'Present' && (
                            <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-semibold rounded-full border border-green-500/20">
                              Current
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-muted-foreground" />
                          <h4 className="text-xl font-semibold text-primary">
                            {exp.position}
                          </h4>
                        </div>
                      </div>

                      {/* Description Points */}
                      <ul className="space-y-3 mt-6">
                        {exp.description.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors group/item">
                            <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover/item:scale-150 transition-transform" />
                            <span className="leading-relaxed">{point.trim()}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Timeline Info */}
                    <div className="md:border-l md:pl-6 md:min-w-[200px] space-y-4">
                      <div className="flex flex-col gap-4">
                        {/* Date Range */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm font-medium">Timeline</span>
                          </div>
                          <div className="pl-6 space-y-1">
                            <p className="text-sm font-semibold text-foreground">
                              {formatDate(exp.startDate)}
                            </p>
                            <div className="h-8 border-l-2 border-dashed border-primary/30 ml-2" />
                            <p className="text-sm font-semibold text-foreground">
                              {formatDate(exp.endDate)}
                            </p>
                          </div>
                        </div>

                        {/* Duration Badge */}
                        <div className="bg-primary/5 border border-primary/10 rounded-lg p-4">
                          <p className="text-xs text-muted-foreground mb-1">Duration</p>
                          <p className="text-lg font-bold text-primary">
                            {calculateDuration(exp.startDate, exp.endDate)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6 border-2 hover:border-primary/50 transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">
                {experience.length}
              </div>
              <div className="text-sm text-muted-foreground">Positions</div>
            </Card>
            <Card className="text-center p-6 border-2 hover:border-primary/50 transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">
                {experience.reduce((sum, exp) => {
                  const months = (() => {
                    const start = new Date(exp.startDate);
                    const end = exp.endDate === 'Present' ? new Date() : new Date(exp.endDate);
                    return (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
                  })();
                  return sum + months;
                }, 0)}+
              </div>
              <div className="text-sm text-muted-foreground">Months of Experience</div>
            </Card>
            <Card className="text-center p-6 border-2 hover:border-primary/50 transition-colors">
              <div className="text-3xl font-bold text-primary mb-2">
                {experience.reduce((sum, exp) => sum + exp.description.length, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Key Achievements</div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
