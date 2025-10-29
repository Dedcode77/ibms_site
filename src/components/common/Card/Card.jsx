import React from 'react';

const Card = ({ 
  children, 
  className = '',
  variant = 'default',
  padding = 'md',
  hover = false,
  onClick,
  ...props 
}) => {
  const baseStyles = 'bg-white rounded-lg shadow-md transition-all duration-200';
  
  const variants = {
    default: 'border border-gray-200',
    elevated: 'shadow-lg',
    outlined: 'border-2 border-primary-200',
    flat: 'shadow-none border border-gray-100',
  };
  
  const paddings = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };
  
  const hoverStyles = hover ? 'hover:shadow-xl hover:scale-105 cursor-pointer' : '';
  
  return (
    <div
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Sous-composants pour structure de Card
Card.Header = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>
    {children}
  </div>
);

Card.Body = ({ children, className = '' }) => (
  <div className={className}>
    {children}
  </div>
);

Card.Footer = ({ children, className = '' }) => (
  <div className={`mt-4 pt-4 border-t border-gray-200 ${className}`}>
    {children}
  </div>
);

Card.Title = ({ children, className = '' }) => (
  <h3 className={`text-xl font-heading font-semibold text-gray-900 ${className}`}>
    {children}
  </h3>
);

Card.Description = ({ children, className = '' }) => (
  <p className={`text-gray-600 ${className}`}>
    {children}
  </p>
);

export default Card;