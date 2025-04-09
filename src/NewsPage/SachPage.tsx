// SachPage.tsx
import React from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel'; // Импортируем компонент карусели

const SachPage: React.FC = () => {
    const imageUrls = [
        '/image1.png', // Путь к изображению в папке public/images
        '/image2.png', // Путь к изображению в папке public/images
        '/image3.png', // Путь к изображению в папке public/images
        // Добавьте другие URL изображений по мере необходимости
    ];

    return (
        <div>
            <h1>Страница Sach</h1>
            <ImageCarousel images={imageUrls} /> {/* Добавляем карусель на страницу Sach */}
            {/* Другие элементы страницы */}
        </div>
    );
};

export default SachPage;