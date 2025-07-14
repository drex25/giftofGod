import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elegant' | 'glass' | 'hover' | 'featured' | 'testimonial';
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  icon?: LucideIcon;
  title?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  badge?: string;
  badgeColor?: 'primary' | 'secondary' | 'success' | 'error' | 'warning';
  animate?: boolean;
  delay?: number;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  onClick,
  href,
  target,
  icon: Icon,
  title,
  subtitle,
  image,
  imageAlt,
  badge,
  badgeColor = 'primary',
  animate = true,
  delay = 0,
}) => {
  const baseClasses = 'card overflow-hidden transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-white/20',
    elegant: 'bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/40',
    glass: 'bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg',
    hover: 'bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 border border-white/20',
    featured: 'bg-gradient-to-br from-primary-50 to-secondary-50 backdrop-blur-sm rounded-3xl shadow-xl border border-primary-200/50',
    testimonial: 'bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-white/30',
  };

  const badgeColorClasses = {
    primary: 'bg-primary-500 text-white',
    secondary: 'bg-secondary-500 text-white',
    success: 'bg-success-500 text-white',
    error: 'bg-error-500 text-white',
    warning: 'bg-warning-500 text-white',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const cardContent = (
    <>
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${badgeColorClasses[badgeColor]}`}>
            {badge}
          </span>
        </div>
      )}

      {/* Image */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={imageAlt || title || 'Card image'}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        {(Icon || title || subtitle) && (
          <div className="mb-4">
            {Icon && (
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-3 shadow-lg">
                <Icon className="w-6 h-6 text-white" />
              </div>
            )}
            {title && (
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-sm text-neutral-600">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Children */}
        <div className="text-neutral-700">
          {children}
        </div>
      </div>
    </>
  );

  const cardElement = (
    <motion.div
      className={classes}
      onClick={onClick}
      whileHover={onClick ? { scale: 1.02 } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      initial={animate ? { opacity: 0, y: 20 } : undefined}
      animate={animate ? { opacity: 1, y: 0 } : undefined}
      transition={animate ? { duration: 0.6, delay } : undefined}
    >
      {cardContent}
    </motion.div>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={animate ? { opacity: 0, y: 20 } : undefined}
        animate={animate ? { opacity: 1, y: 0 } : undefined}
        transition={animate ? { duration: 0.6, delay } : undefined}
      >
        {cardContent}
      </motion.a>
    );
  }

  return cardElement;
};

// Card Header Component
export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`p-6 pb-0 ${className}`}>
    {children}
  </div>
);

// Card Body Component
export const CardBody: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

// Card Footer Component
export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

export default Card; 