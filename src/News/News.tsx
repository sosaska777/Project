// src/News/News.tsx
import React from 'react';
import './News.css';
import './Newbut.css';
import Button from '../Button/Button';
import logo from '../logo.png'; // Импортируем изображение

interface NewsProps {
    title: string; // Заголовок форума
    location: string; // Место проведения
    date: string; // Дата проведения
    backgroundImage?: string; // Необязательное фоновое изображение
    buttonText?: string; // Текст кнопки
    onButtonClick?: () => void; // Обработчик клика по кнопке
}

const News: React.FC<NewsProps> = ({
    title,
    location,
    date,
    backgroundImage = '/background-image.png', // Значение по умолчанию
    buttonText = 'Расписание',
    onButtonClick = () => console.log("Контакты"),
}) => {
    return (
        <div className="news-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="background-image">
                <div className="background-container">
                    <img src={logo} alt="Логотип" className="logo" /> {/* Добавляем изображение */}
                    <div className="main-text-container"></div>
                    <div className="text-blocks-container">
                        <div className="text-block">
                            <h3 className="date-info-block">{title}</h3>
                        </div>
                        <div className="text-block">
                            <h3 className="date-info-block">{location}</h3>
                            <h3 className="date-info-block">{date}</h3>
                        </div>
                    </div>
                    {/* Применяем класс button к компоненту Button */}
                    <Button text={buttonText} onClick={onButtonClick} className="button" />
                </div>
            </div>
        </div>
    );
}

export default News;