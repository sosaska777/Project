// src/News/News.tsx
import React from 'react';
import './News.css';
import './Newbut.css'; // Импортируем стили для кнопок
import Button from '../Button/Button';
import logo from '../logo.png'; // Импортируем изображение

const News: React.FC = () => {
    return (
        <div className="news-container" style={{ backgroundImage: `url(/background-image.png)` }}>
            <div className="background-image">
                <div className="background-container">
                    <img src={logo} alt="Логотип" className="logo" /> {/* Добавляем изображение */}
                    <div className="main-text-container"></div>
                    <div className="text-blocks-container">
                        <div className="text-block">
                            <h3 className="date-info-block">Форум молодых работников<br /> угольной промышленности</h3>
                        </div>
                        <div className="text-block">
                            <h3 className="date-info-block">Сахалинская область, Углегорский район, г. Шахтерск</h3>
                            <h3 className="date-info-block">28-31 мая 2025 года</h3>
                        </div>
                    </div>
                    {/* Применяем класс button к компоненту Button */}
                    <Button text="Новости" onClick={() => console.log("Контакты")} className="button" />
                </div>
            </div>
        </div>
    );
}

export default News;