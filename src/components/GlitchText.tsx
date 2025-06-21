
import React from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <span
        className="glitch-text animate-glitch"
        data-text={text}
      >
        {text}
      </span>
    </div>
  );
};

export default GlitchText;
