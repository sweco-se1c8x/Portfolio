import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`inline-flex justify-center px-4 py-2 rounded-md text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Button;