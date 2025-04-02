import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import HomeSection from '../HomeSection/HomeSection';

const Sach: React.FC = () => {
    const navigate = useNavigate(); // Инициализируем navigate

    const newsImages = [
        `${process.env.PUBLIC_URL}/logo.jpg`,
        // Добавьте другие изображения, если нужно
    ];

    const handleImageClick = (index: number) => {
        console.log(`Изображение ${index + 1} было нажато`);
        // Переход на новую страницу, например, "/news/1"
        navigate(`/news/${index + 1}`); // Замените на нужный путь
    };

    return (
        <div style={{ padding: '20px' }}> {/* Добавляем отступы */}
            <HomeSection
                images={newsImages}
                altText="Сахалинская область"
                onImageClick={handleImageClick} // Передаем обработчик клика
            />
        </div>
    );
};

export default Sach;