
import React, { useEffect, useState, useRef } from 'react';
import { Calendar, Briefcase, Building2, Zap, Award, Code } from 'lucide-react';
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
    <div className="min-h-screen pt-16 bg-background relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 dark:bg-blue-600/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/30 dark:bg-purple-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-400/20 dark:bg-pink-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full mb-6">
              <Briefcase className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Career Timeline</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Professional Journey
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Crafting innovative solutions with cutting-edge technologies
            </p>
          </div>

          {/* Experience Cards - Bento Grid Style */}
          <div className="grid gap-8 mb-16">
            {experience.map((exp, index) => (
              <GlassCard key={exp.id} experience={exp} index={index} formatDate={formatDate} calculateDuration={calculateDuration} />
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              icon={Building2}
              value={experience.length}
              label="Positions"
              gradient="from-blue-500 to-cyan-500"
              delay={0}
            />
            <StatCard
              icon={Calendar}
              value={`${experience.reduce((sum, exp) => {
                const start = new Date(exp.startDate);
                const end = exp.endDate === 'Present' ? new Date() : new Date(exp.endDate);
                return sum + (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
              }, 0)}+`}
              label="Months Experience"
              gradient="from-purple-500 to-pink-500"
              delay={100}
            />
            <StatCard
              icon={Award}
              value={experience.reduce((sum, exp) => sum + exp.description.length, 0)}
              label="Achievements"
              gradient="from-pink-500 to-orange-500"
              delay={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Glassmorphism Card with 3D Tilt Effect
const GlassCard = ({ experience, index, formatDate, calculateDuration }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        className="relative transition-all duration-300 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? 'translateZ(20px)' : 'translateZ(0)'}`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
        
        {/* Glass card */}
        <div className="relative bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-2xl p-8 shadow-2xl">
          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-2xl" />
          
          <div className="grid md:grid-cols-[1fr,auto] gap-8">
            {/* Left: Content */}
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-600/30 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-foreground">
                      {experience.company}
                    </h3>
                    {experience.endDate === 'Present' && (
                      <div className="relative">
                        <span className="flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-muted-foreground" />
                    <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                      {experience.position}
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                {experience.description.map((point: string, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 group/item"
                    style={{
                      animation: `fadeIn 0.5s ease-out ${idx * 0.1}s both`
                    }}
                  >
                    <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover/item:scale-150 group-hover/item:shadow-lg group-hover/item:shadow-purple-500/50 transition-all duration-300" />
                    <p className="text-sm leading-relaxed text-muted-foreground group-hover/item:text-foreground transition-colors">
                      {point.trim()}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Timeline */}
            <div className="flex flex-col items-center md:items-end gap-6">
              {/* Date Badge */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-50" />
                <div className="relative bg-gradient-to-br from-blue-500/90 to-purple-500/90 backdrop-blur-sm rounded-2xl p-6 border border-white/30 text-white shadow-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Timeline</span>
                  </div>
                  <div className="space-y-2 text-center">
                    <div className="text-sm font-semibold">{formatDate(experience.startDate)}</div>
                    <div className="w-12 h-px bg-white/50 mx-auto" />
                    <div className="text-sm font-semibold">{formatDate(experience.endDate)}</div>
                  </div>
                </div>
              </div>

              {/* Duration Badge */}
              <div className="bg-gradient-to-br from-pink-500/20 to-orange-500/20 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 rounded-xl px-6 py-3">
                <div className="text-xs text-muted-foreground mb-1">Duration</div>
                <div className="text-xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 dark:from-pink-400 dark:to-orange-400 bg-clip-text text-transparent">
                  {calculateDuration(experience.startDate, experience.endDate)}
                </div>
              </div>

              {/* Tech Icon */}
              <div className="p-3 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-600/30">
                <Code className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ icon: Icon, value, label, gradient, delay }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -8;
    const rotateYValue = ((x - centerX) / centerX) * 8;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group"
      style={{
        perspective: '1000px',
        animationDelay: `${delay}ms`
      }}
    >
      <div
        className="relative transition-all duration-300 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
      >
        <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
        
        <div className="relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl border border-white/30 dark:border-gray-700/50 rounded-2xl p-8 shadow-xl">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className={`p-4 bg-gradient-to-br ${gradient} rounded-2xl shadow-lg`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div className={`text-5xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
              {value}
            </div>
            <div className="text-sm font-medium text-muted-foreground">
              {label}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
