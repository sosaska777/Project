import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SplitButton.css'; // Импортируй стили для SplitButton

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
            <button onClick={handleToggle}>{label}</button>
            {isOpen && (
                <div className="dropdown-menu">
                    {options.map((option, index) => (
                        <Link key={index} to={option.path} onClick={() => setIsOpen(false)}>
                            {option.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SplitButton;