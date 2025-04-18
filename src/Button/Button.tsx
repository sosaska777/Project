// src/Button/Button.tsx
import React from 'react';
// import './Button.css'; // Remove or comment out this line

interface ButtonProps {
    text: string;
    onClick: () => void;
    className?: string; // Добавляем пропс для класса
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
    return (
        <button onClick={onClick} className={className}>
            {text}
        </button>
    );
}

export default Button; 