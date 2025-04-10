import React from 'react';
import Sach from '../Sach/Sach';
import Ugl from '../Ugl/Ugl';
import './GridComponent.css'; // Импортируйте файл стилей

const GridComponent: React.FC = () => {
    return (
        <div className="outer-container"> {/* Добавляем родительский контейнер */}
            <div className="grid-container">
                <div className="grid-item">
                    <Sach />
                </div>
                <div className="grid-item">
                    <Ugl />
                </div>
                <div className="grid-item">
                    {/* Здесь можно добавить другие элементы */}
                </div>
            </div>
        </div>
    );
};

export default GridComponent;