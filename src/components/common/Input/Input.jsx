import React from 'react';

const Input = ({ 
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  helperText,
  required = false,
  disabled = false,
  className = '',
  icon,
  ...props 
}) => {
  const baseStyles = 'w-full px-4 py-2.5 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2';
  
  const stateStyles = error 
    ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
    : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500';
  
  const disabledStyles = disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white';
  
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`${baseStyles} ${stateStyles} ${disabledStyles} ${icon ? 'pl-10' : ''}`}
          {...props}
        />
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

// Textarea variant
Input.Textarea = ({ 
  label,
  placeholder,
  value,
  onChange,
  error,
  helperText,
  required = false,
  disabled = false,
  rows = 4,
  className = '',
  ...props 
}) => {
  const baseStyles = 'w-full px-4 py-2.5 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 resize-none';
  
  const stateStyles = error 
    ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
    : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500';
  
  const disabledStyles = disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white';
  
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        rows={rows}
        className={`${baseStyles} ${stateStyles} ${disabledStyles}`}
        {...props}
      />
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

export default Input;