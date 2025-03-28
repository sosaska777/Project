import React from 'react';
import './News.css';

const News: React.FC = () => {
    return (
        <div className="news-container">
            <div className="background-image">
                <img src="/logo.jpg" alt="Logo" className="logo" />
                <div className="background-container">
                    <div className="main-text-container"></div>
                    <div className="custom-background">
                        <div className="date-info-container">
                            Форум молодых работниковугольной промышленности
                        </div>
                        <div className="date-info-container">
                            Сахалинская область, Углегорский район, г. Шахтерск
                        </div>
                        <div className="date-info-container1">
                            28-31 мая 2025 года
                        </div>
                    </div>
                    <button onClick={() => console.log('Кнопка Расписание')}>
                        Расписание
                    </button>
                </div>
            </div>
        </div>
    );
}

export default News;