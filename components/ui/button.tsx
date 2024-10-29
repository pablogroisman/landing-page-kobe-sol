// components/ui/button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'rounded font-semibold transition-colors';
  const variantStyles = variant === 'outline' ? 'border border-white text-white' : 'bg-blue-500 text-white';
  const sizeStyles = size === 'lg' ? 'px-8 py-4 text-lg' : size === 'sm' ? 'px-4 py-2 text-sm' : 'px-6 py-3';

  return (
    <button 
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
