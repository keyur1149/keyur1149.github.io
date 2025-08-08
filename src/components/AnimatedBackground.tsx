import React, { useState, useEffect } from 'react';
import backgroundContent from '../data/backgroundContent.json';

const AnimatedBackground: React.FC = () => {
  const [floatingElements, setFloatingElements] = useState<Array<{
    id: string;
    content: string;
    type: 'code' | 'cloud' | 'tech' | 'sql' | 'bash';
    x: number;
    y: number;
    delay: number;
    duration: number;
    rotation: number;
  }>>([]);

  useEffect(() => {
    const generateFloatingElements = () => {
      const allContent = [
        ...backgroundContent.codeSnippets.map(item => ({ content: item, type: 'code' as const })),
        ...backgroundContent.cloudConcepts.map(item => ({ content: item, type: 'cloud' as const })),
        ...backgroundContent.technologies.map(item => ({ content: item, type: 'tech' as const })),
        ...backgroundContent.sqlQueries.map(item => ({ content: item, type: 'sql' as const })),
        ...backgroundContent.bashCommands.map(item => ({ content: item, type: 'bash' as const }))
      ];

      const elements = Array.from({ length: 25 }, (_, i) => {
        const randomContent = allContent[Math.floor(Math.random() * allContent.length)];
        return {
          id: `element-${i}`,
          content: randomContent.content,
          type: randomContent.type,
          x: Math.random() * 95,
          y: Math.random() * 95,
          delay: Math.random() * 15,
          duration: 8 + Math.random() * 12,
          rotation: Math.random() * 20 - 10
        };
      });

      setFloatingElements(elements);
    };

    generateFloatingElements();
    
    // Regenerate elements periodically for dynamic effect
    const interval = setInterval(generateFloatingElements, 30000);
    return () => clearInterval(interval);
  }, []);

  const getElementStyles = (type: string) => {
    const baseStyles = "absolute text-xs sm:text-sm font-mono whitespace-nowrap animate-code-float select-none pointer-events-none";
    
    switch (type) {
      case 'code':
        return `${baseStyles} text-blue-600/30 dark:text-blue-300/40`;
      case 'cloud':
        return `${baseStyles} text-purple-600/30 dark:text-purple-300/40`;
      case 'tech':
        return `${baseStyles} text-emerald-600/30 dark:text-emerald-300/40`;
      case 'sql':
        return `${baseStyles} text-orange-600/30 dark:text-orange-300/40`;
      case 'bash':
        return `${baseStyles} text-pink-600/30 dark:text-pink-300/40`;
      default:
        return `${baseStyles} text-gray-600/30 dark:text-gray-300/40`;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      
      {/* Dynamic Floating Code/Tech Elements with proper contrast */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className={getElementStyles(element.type)}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
              transform: `rotate(${element.rotation}deg)`,
            }}
          >
            {element.content}
          </div>
        ))}
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-blue-400/20 dark:bg-blue-300/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
