import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedGradientProps {
  className?: string;
  children?: React.ReactNode;
  gradientColors?: string[];
  duration?: number;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  className = '',
  children,
  gradientColors = ['#667eea', '#764ba2', '#f093fb', '#f5576c'],
  duration = 8
}) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      animate={{
        background: [
          `linear-gradient(45deg, ${gradientColors[0]}, ${gradientColors[1]})`,
          `linear-gradient(45deg, ${gradientColors[1]}, ${gradientColors[2]})`,
          `linear-gradient(45deg, ${gradientColors[2]}, ${gradientColors[3]})`,
          `linear-gradient(45deg, ${gradientColors[3]}, ${gradientColors[0]})`,
          `linear-gradient(45deg, ${gradientColors[0]}, ${gradientColors[1]})`
        ]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedGradient;