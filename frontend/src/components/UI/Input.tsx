import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time' | 'datetime-local';
  variant?: 'default' | 'floating' | 'search' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  error?: string;
  success?: string;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  autoComplete?: string;
  min?: number;
  max?: number;
  step?: number;
  pattern?: string;
  maxLength?: number;
  minLength?: number;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  placeholder,
  type = 'text',
  variant = 'default',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  error,
  success,
  disabled = false,
  required = false,
  fullWidth = false,
  className = '',
  value,
  onChange,
  onFocus,
  onBlur,
  name,
  id,
  autoComplete,
  min,
  max,
  step,
  pattern,
  maxLength,
  minLength,
  ...props
}, ref) => {
  const baseClasses = 'input transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    default: 'w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-primary-500 focus:border-primary-500 bg-white/80 backdrop-blur-sm placeholder:text-neutral-400',
    floating: 'w-full px-4 py-4 border border-neutral-200 rounded-xl focus:ring-primary-500 focus:border-primary-500 bg-white/80 backdrop-blur-sm placeholder:text-neutral-400',
    search: 'w-full px-6 py-4 border-2 border-neutral-200 rounded-2xl focus:ring-primary-500 focus:border-primary-500 bg-white/90 backdrop-blur-sm text-lg font-medium placeholder:text-neutral-400',
    outline: 'w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:ring-primary-500 focus:border-primary-500 bg-transparent placeholder:text-neutral-400',
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg',
  };

  const stateClasses = {
    default: 'border-neutral-200',
    error: 'border-error-500 focus:ring-error-500 focus:border-error-500',
    success: 'border-success-500 focus:ring-success-500 focus:border-success-500',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const stateClass = error ? stateClasses.error : success ? stateClasses.success : stateClasses.default;

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${stateClass} ${className}`;

  const inputElement = (
    <div className={`relative ${fullWidth ? 'w-full' : ''}`}>
      {/* Icon Left */}
      {Icon && iconPosition === 'left' && (
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400">
          <Icon className="w-5 h-5" />
        </div>
      )}

      {/* Input */}
      <motion.input
        ref={ref}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
        name={name}
        id={id}
        autoComplete={autoComplete}
        min={min}
        max={max}
        step={step}
        pattern={pattern}
        maxLength={maxLength}
        minLength={minLength}
        className={`${classes} ${Icon && iconPosition === 'left' ? 'pl-12' : ''} ${Icon && iconPosition === 'right' ? 'pr-12' : ''}`}
        whileFocus={{ scale: 1.02 }}
        {...props}
      />

      {/* Icon Right */}
      {Icon && iconPosition === 'right' && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400">
          <Icon className="w-5 h-5" />
        </div>
      )}

      {/* Error/Success Message */}
      {(error || success) && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-2 text-sm font-medium ${
            error ? 'text-error-600' : 'text-success-600'
          }`}
        >
          {error || success}
        </motion.div>
      )}
    </div>
  );

  // Floating Label Variant
  if (variant === 'floating' && label) {
    return (
      <div className={`relative ${fullWidth ? 'w-full' : ''}`}>
        <motion.div
          className="relative"
          initial={false}
          animate={value ? { scale: 1 } : { scale: 1 }}
        >
          <motion.input
            ref={ref}
            type={type}
            placeholder=" "
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={disabled}
            required={required}
            name={name}
            id={id}
            autoComplete={autoComplete}
            min={min}
            max={max}
            step={step}
            pattern={pattern}
            maxLength={maxLength}
            minLength={minLength}
            className={`${classes} peer`}
            whileFocus={{ scale: 1.02 }}
            {...props}
          />
          <motion.label
            className="absolute left-4 top-4 text-neutral-500 transition-all duration-300 pointer-events-none peer-focus:text-primary-500 peer-focus:-translate-y-6 peer-focus:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75"
            initial={false}
            animate={value ? { y: -24, scale: 0.75, color: '#f17a2a' } : { y: 0, scale: 1, color: '#737373' }}
          >
            {label}
          </motion.label>
        </motion.div>

        {/* Error/Success Message */}
        {(error || success) && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-2 text-sm font-medium ${
              error ? 'text-error-600' : 'text-success-600'
            }`}
          >
            {error || success}
          </motion.div>
        )}
      </div>
    );
  }

  // Default Variant with Label
  if (label && variant !== 'floating') {
    return (
      <div className={`space-y-2 ${fullWidth ? 'w-full' : ''}`}>
        <label className="block text-sm font-medium text-neutral-700">
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
        {inputElement}
      </div>
    );
  }

  return inputElement;
});

Input.displayName = 'Input';

export default Input;