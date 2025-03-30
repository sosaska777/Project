// src/Button/Button.tsx
import React from 'react';


interface ButtonProps {
    text: string;
    onClick?: () => void;
    disabled?: boolean; // Добавляем пропс для disabled состояния
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled }) => {
    return (
        <div className="button-wrapper"> {/* Оборачиваем кнопку в div с классом button-wrapper */}
            <button className="button" onClick={onClick} disabled={disabled}>
                {text}
            </button>
        </div>
    );
};

export default Button;