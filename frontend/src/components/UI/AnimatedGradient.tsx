import React from 'react';

interface AnimatedGradientProps {
  className?: string;
  children?: React.ReactNode;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ className = '', children }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-20 animate-gradient"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-neon-cyan to-transparent animate-pulse-slow opacity-10"></div>
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
};

export default AnimatedGradient;