import React from 'react';

const AnimatedBackground: React.FC = () => {
  // Code snippets for the floating animation
  const codeSnippets = [
    'const app = () => {}',
    'function render() {',
    'useState(false)',
    'useEffect(() => {',
    'return <div>',
    'import React from',
    'export default',
    'className="flex"',
    'onClick={handler}',
    'const [state] =',
    'async function',
    'await fetch()',
    'map((item) =>',
    'filter(Boolean)',
    'reduce((acc) =>',
    'props: {',
    'type: string',
    'interface Props',
    'extends Component',
    'this.setState()',
    '<Component />',
    'style={{ color:',
    'position: absolute',
    'display: flex',
    'justify-content:',
    'align-items:',
    'background: linear',
    'transform: scale',
    'transition: all',
    'animation: fade',
    'keyframes slide'
  ];

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-800 animate-gradient-shift"></div>
      
      {/* Morphing SVG Blobs */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30 dark:opacity-20"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="blob-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="blob-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(236, 72, 153)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="blob-gradient-3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="rgb(14, 165, 233)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Blob 1 */}
        <path
          d="M300,200 C450,150 550,250 600,400 C650,550 500,650 350,600 C200,550 150,350 300,200Z"
          fill="url(#blob-gradient-1)"
          className="animate-blob-1"
        />
        
        {/* Blob 2 */}
        <path
          d="M700,300 C850,250 950,350 900,500 C850,650 700,700 550,650 C400,600 350,400 500,350 C600,320 650,300 700,300Z"
          fill="url(#blob-gradient-2)"
          className="animate-blob-2"
        />
        
        {/* Blob 3 */}
        <path
          d="M200,600 C350,550 450,650 500,800 C550,950 400,1000 250,950 C100,900 50,700 200,600Z"
          fill="url(#blob-gradient-3)"
          className="animate-blob-3"
        />
      </svg>
      
      {/* Floating Code Snippets */}
      <div className="absolute inset-0 pointer-events-none">
        {codeSnippets.slice(0, 15).map((snippet, i) => (
          <div
            key={`code-${i}`}
            className="absolute text-xs sm:text-sm font-mono text-blue-600/40 dark:text-blue-400/30 whitespace-nowrap animate-code-float select-none"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
            }}
          >
            {snippet}
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