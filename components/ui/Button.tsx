import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-graphite-900 text-white hover:bg-linkedin-600 hover:shadow-lg focus:ring-linkedin-600",
    outline: "border border-graphite-900 text-graphite-900 hover:bg-linkedin-50 hover:border-linkedin-600 hover:text-linkedin-700 focus:ring-graphite-900",
    ghost: "text-graphite-900 hover:bg-linkedin-50 hover:text-linkedin-700 focus:ring-graphite-900"
  };

  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};