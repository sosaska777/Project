import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SplitButton.css';

interface SplitButtonProps {
    label: string;
    options: { label: string; path: string }[];
}

const SplitButton: React.FC<SplitButtonProps> = ({ label, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="split-button">
            <button onClick={handleToggle}>
                {/* Заменяем текст кнопки на символ меню */}
                <span className="menu-icon">☰</span>
            </button>
            <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
                {options.map((option, index) => (
                    <Link key={index} to={option.path} onClick={() => setIsOpen(false)}>
                        {option.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SplitButton;