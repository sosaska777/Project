import React from 'react';
import Sach from '../Sach/Sach';
import Ugl from '../Ugl/Ugl';
import './GridComponent.css'; // Импортируйте файл стилей

const GridComponent: React.FC = () => {
    return (
        <div className="grid-container">
            <div className="grid-item">
                <h2>О. Сахалин</h2>
                <Sach />
            </div>
            <div className="grid-item">
                <h2>Углегорский район</h2>
                <Ugl />
            </div>
        </div>
    );
};

export default GridComponent;