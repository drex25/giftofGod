import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time';
  value?: string | number;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  error?: string;
  success?: string;
  disabled?: boolean;
  required?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  name?: string;
  id?: string;
  autoComplete?: string;
  maxLength?: number;
  min?: number;
  max?: number;
  step?: number;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  onBlur,
  onFocus,
  error,
  success,
  disabled = false,
  required = false,
  icon: Icon,
  iconPosition = 'left',
  size = 'md',
  fullWidth = false,
  className = '',
  name,
  id,
  autoComplete,
  maxLength,
  min,
  max,
  step
}, ref) => {
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-sm',
    lg: 'px-5 py-4 text-base'
  };

  const iconSize = size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4';
  const iconPadding = Icon ? (iconPosition === 'left' ? 'pl-10' : 'pr-10') : '';
  const widthClass = fullWidth ? 'w-full' : '';
  
  const baseClasses = 'input-modern transition-all duration-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500';
  const stateClasses = error 
    ? 'border-error-500 focus:ring-error-500' 
    : success 
    ? 'border-success-500 focus:ring-success-500' 
    : 'border-neutral-300 hover:border-neutral-400';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed bg-neutral-100' : '';
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${iconPadding} ${widthClass} ${stateClasses} ${disabledClasses} ${className}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-neutral-700 mb-2"
        >
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {Icon && iconPosition === 'left' && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
            <Icon className={iconSize} />
          </div>
        )}
        
        <motion.input
          ref={ref}
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          maxLength={maxLength}
          min={min}
          max={max}
          step={step}
          className={classes}
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        />
        
        {Icon && iconPosition === 'right' && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
            <Icon className={iconSize} />
          </div>
        )}
      </div>

      {/* Error/Success Messages */}
      {(error || success) && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-2 text-sm flex items-center space-x-1 ${
            error ? 'text-error-600' : 'text-success-600'
          }`}
        >
          {error && (
            <>
              <div className="w-1 h-1 bg-error-500 rounded-full"></div>
              <span>{error}</span>
            </>
          )}
          {success && (
            <>
              <div className="w-1 h-1 bg-success-500 rounded-full"></div>
              <span>{success}</span>
            </>
          )}
        </motion.div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;