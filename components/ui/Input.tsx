import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-graphite-800 mb-1">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 bg-white border border-sand-300 rounded-lg text-graphite-900 placeholder-sand-400 focus:outline-none focus:ring-2 focus:ring-linkedin-500 focus:border-transparent transition-all duration-200 ${className}`}
        {...props}
      />
    </div>
  );
};