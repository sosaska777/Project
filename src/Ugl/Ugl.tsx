import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import HomeSection from '../HomeSection/HomeSection';


const Ugl: React.FC = () => {
    const navigate = useNavigate(); // Инициализируем navigate

    const uglegorskImages = [
        `${process.env.PUBLIC_URL}/UG.png`, // Замените на нужные изображения
        // Добавьте другие изображения, если нужно
    ];

    const handleImageClick = (index: number) => {
        console.log(`Изображение ${index + 1} было нажато`);
        // Переход на новую страницу, например, "/news/2"
        navigate(`/ugl`); // Замените на нужный путь
    };

    return (
        <div style={{ padding: '20px' }}> {/* Добавляем отступы */}
            <HomeSection
                images={uglegorskImages}
                altText="Углегорск"
                onImageClick={handleImageClick} // Передаем обработчик клика
            />
        </div>
    );
};

export default Ugl;