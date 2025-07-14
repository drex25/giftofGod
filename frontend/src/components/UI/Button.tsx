import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'warm' | 'cool';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:bg-gradient-to-r hover:from-primary-600 hover:to-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 rounded-xl shadow-soft hover:shadow-elegant hover:scale-105',
    secondary: 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white hover:bg-gradient-to-r hover:from-secondary-600 hover:to-secondary-700 focus:ring-2 focus:ring-secondary-500 focus:ring-opacity-50 rounded-xl shadow-soft hover:shadow-elegant hover:scale-105',
    outline: 'border-2 border-primary-500 text-primary-600 bg-transparent hover:bg-primary-500 hover:text-white focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 rounded-xl transition-all duration-300',
    ghost: 'text-earth-600 hover:text-primary-600 hover:bg-primary-50 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 rounded-xl',
    warm: 'bg-gradient-to-r from-warm-500 to-warm-600 text-white hover:bg-gradient-to-r hover:from-warm-600 hover:to-warm-700 focus:ring-2 focus:ring-warm-500 focus:ring-opacity-50 rounded-xl shadow-soft hover:shadow-elegant hover:scale-105',
    cool: 'bg-gradient-to-r from-secondary-500 to-accent-500 text-white hover:bg-gradient-to-r hover:from-secondary-600 hover:to-accent-600 focus:ring-2 focus:ring-secondary-500 focus:ring-opacity-50 rounded-xl shadow-soft hover:shadow-elegant hover:scale-105',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-xl">
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>
      )}
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
    </button>
  );
};

export default Button;