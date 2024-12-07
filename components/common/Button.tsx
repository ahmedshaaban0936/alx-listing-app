import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      className={`bg-blue-500 text-white p-2 rounded-lg ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
