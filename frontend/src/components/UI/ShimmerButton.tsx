import React from 'react';
import { motion } from 'framer-motion';

interface ShimmerButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  icon?: React.ReactNode;
}

const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon
}) => {
  const baseClasses = 'relative inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg hover:shadow-xl hover:shadow-primary-500/25',
    secondary: 'bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-primary-600',
    outline: 'border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 -top-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </span>
      
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </motion.button>
  );
};

export default ShimmerButton;