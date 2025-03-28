// src/Button.tsx
import React from 'react';
import './Button.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className="rounded-button button-font" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;