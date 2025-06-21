
import React from 'react';
import { Code, Database, Zap, Cpu } from 'lucide-react';

const TechOrbit = () => {
  const icons = [
    { Icon: Code, label: 'React', color: 'text-cyber-blue' },
    { Icon: Database, label: 'Firebase', color: 'text-cyber-pink' },
    { Icon: Zap, label: 'JavaScript', color: 'text-cyber-green' },
    { Icon: Cpu, label: 'C++', color: 'text-cyber-purple' }
  ];

  return (
    <div className="relative w-64 h-64 mx-auto">
      {/* Central globe */}
      <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple opacity-80 animate-pulse-neon">
        <div className="absolute inset-2 rounded-full border border-cyber-blue-electric opacity-60 animate-rotate-slow"></div>
        <div className="absolute inset-1 rounded-full border border-cyber-pink opacity-40 animate-rotate-slow" style={{animationDirection: 'reverse'}}></div>
      </div>

      {/* Orbiting icons */}
      {icons.map((item, index) => (
        <div
          key={item.label}
          className="absolute inset-1/2 w-8 h-8 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            animation: `orbit 10s linear infinite`,
            animationDelay: `${index * 2.5}s`
          }}
        >
          <div className={`w-full h-full ${item.color} opacity-80 animate-float`}>
            <item.Icon className="w-full h-full glow-text" />
          </div>
        </div>
      ))}

      {/* Orbit rings */}
      <div className="absolute inset-0 rounded-full border border-cyber-blue opacity-20"></div>
      <div className="absolute inset-4 rounded-full border border-cyber-pink opacity-15"></div>
      <div className="absolute inset-8 rounded-full border border-cyber-purple opacity-10"></div>
    </div>
  );
};

export default TechOrbit;
