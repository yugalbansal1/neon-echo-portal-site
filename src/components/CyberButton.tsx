
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface CyberButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const CyberButton: React.FC<CyberButtonProps> = ({ children, onClick, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`relative group overflow-hidden px-12 py-6 bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-pink rounded-lg border-2 border-transparent neon-border transition-all duration-300 hover:scale-105 ${isHovered ? 'animate-distort' : ''} ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-pink opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300"></div>
      
      {/* Button content */}
      <div className="relative flex items-center gap-3 text-white font-bold text-xl">
        {children}
        <ChevronRight className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} />
      </div>
      
      {/* Glitch effect overlay */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
      )}
    </button>
  );
};

export default CyberButton;
