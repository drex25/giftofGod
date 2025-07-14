import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className = '',
  ...props
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-earth-700">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-4 py-3 border rounded-xl transition-all duration-300
          focus:ring-2 focus:ring-primary-500 focus:border-primary-500
          ${error 
            ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
            : 'border-earth-200 focus:ring-primary-500 focus:border-primary-500'
          }
          bg-white/80 backdrop-blur-sm
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-sm text-earth-500">{helperText}</p>
      )}
    </div>
  );
};

export default Input;