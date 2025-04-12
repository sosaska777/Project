// src/NewsPage/NewsPage.tsx
import React from 'react';
import './NewsPage.css'; // Импортируем файл стилей

const NewsPage: React.FC = () => {
  const newsItems = [
    {
      description: 'Описание новости 1. Здесь можно добавить больше информации о событии.',
      imageUrl: '/image1.png', // Путь к изображению в папке public
    },
    {
      description: 'Описание новости 2. Здесь можно добавить больше информации о событии.',
      imageUrl: '/image2.png', // Путь к изображению в папке public
    },
  ];

  return (
    <div className="news-page">
      <h1 className="news-title">Новости</h1> {/* Заголовок страницы */}
      {newsItems.map((item, index) => (
        <div className="news-card" key={index}>
          <div className="image-section">
            <img src={item.imageUrl} alt={`Новость ${index + 1}`} className="news-image" />
          </div>
          <div className="description-section">
            <p className="news-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsPage;