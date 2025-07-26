import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  gradient = false,
  icon,
  title,
  description,
  onClick
}) => {
  const baseClasses = 'relative bg-white rounded-3xl shadow-xl transition-all duration-500 transform';
  const hoverClasses = hover ? 'hover:-translate-y-2 hover:shadow-2xl' : '';
  const gradientClasses = gradient ? 'bg-gradient-to-br from-gray-50 to-white' : '';
  
  const cardClasses = `${baseClasses} ${hoverClasses} ${gradientClasses} ${className}`;

  return (
    <motion.div
      className={cardClasses}
      onClick={onClick}
      whileHover={hover ? { scale: 1.02 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Gradient overlay on hover */}
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
      )}
      
      {/* Content */}
      <div className="relative z-10 p-8">
        {icon && (
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}
        
        {title && (
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
            {title}
          </h3>
        )}
        
        {description && (
          <p className="text-gray-600 leading-relaxed mb-6">
            {description}
          </p>
        )}
        
        {children}
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-b-3xl"></div>
    </motion.div>
  );
};

export default Card; 