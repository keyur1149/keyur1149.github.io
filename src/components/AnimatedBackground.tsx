import React from 'react';

const AnimatedBackground: React.FC = () => {
  const techQuotes = [
    // Programming Logic
    'if (success) { continue; }',
    'while (learning) { grow(); }',
    'try { innovate(); } catch { adapt(); }',
    'const future = async () => {}',
    'function deploy() { return success; }',
    'let experience = [];',
    'const skills = new Set();',
    'export default passion;',
    'import { creativity } from "mind";',
    'setState({ motivated: true });',
    
    // AWS Services
    'AWS Lambda',
    'EC2 Instance',
    'S3 Bucket',
    'CloudFormation',
    'API Gateway',
    'DynamoDB',
    'CloudWatch',
    'VPC Network',
    'IAM Roles',
    'Route 53',
    'ECS Container',
    'RDS Database',
    'ElastiCache',
    'SNS Topics',
    
    // Technologies & Tools
    'TypeScript',
    'React.useState()',
    'Docker Container',
    'Kubernetes Pod',
    'GraphQL Query',
    'Node.js Server',
    'PostgreSQL',
    'MongoDB Atlas',
    'Redis Cache',
    'Nginx Proxy',
    'Jest Testing',
    'GitHub Actions',
    'CI/CD Pipeline',
    'Microservices',
    
    // Code Commands
    'npm install success',
    'git commit -m "innovation"',
    'docker run --rm app',
    'kubectl apply -f future',
    'yarn build production',
    'terraform apply',
    'ansible-playbook deploy',
    'helm install release',
    
    // SQL & Database
    'SELECT * FROM opportunities',
    'INSERT INTO future VALUES',
    'UPDATE skills SET level = "expert"',
    'CREATE TABLE innovations',
    'COMMIT TRANSACTION',
    'INDEX ON performance',
    'JOIN experiences ON success',
    'WHERE passion = true',
    
    // Development Concepts
    'RESTful API',
    'Serverless Functions',
    'Event-Driven Architecture',
    'Domain-Driven Design',
    'Test-Driven Development',
    'Continuous Integration',
    'Infrastructure as Code',
    'Blue-Green Deployment',
    'Circuit Breaker Pattern',
    'API Rate Limiting'
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
        {techQuotes.slice(0, 15).map((snippet, i) => (
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