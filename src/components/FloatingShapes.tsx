
import React from 'react';

const FloatingShapes = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {/* Rotating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-cyber-blue opacity-20 animate-rotate-slow">
        <div className="w-full h-full border border-cyber-pink rotate-45"></div>
      </div>
      
      <div className="absolute top-1/3 right-1/4 w-24 h-24 border-2 border-cyber-purple opacity-30 animate-rotate-slow" style={{animationDirection: 'reverse'}}>
        <div className="w-full h-full border border-cyber-blue-electric rotate-12"></div>
      </div>
      
      <div className="absolute bottom-1/4 left-1/3 w-40 h-40 border-2 border-cyber-pink opacity-15 animate-rotate-slow">
        <div className="w-full h-full border border-cyber-purple rotate-45"></div>
        <div className="absolute inset-4 border border-cyber-blue-electric rotate-45"></div>
      </div>
      
      <div className="absolute top-1/2 right-1/3 w-28 h-28 border-2 border-cyber-green opacity-25 animate-rotate-slow" style={{animationDirection: 'reverse'}}>
        <div className="w-full h-full border border-cyber-blue rotate-30"></div>
      </div>

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyber-blue-electric rounded-full opacity-60 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${4 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
