import React from 'react';
import HomeSection from '../HomeSection/HomeSection';

const Sach: React.FC = () => {
    const newsImages = [
        `${process.env.PUBLIC_URL}/logo.jpg`,
    ];

    const handleImageClick = (index: number) => {
        console.log(`Изображение ${index + 1} было нажато`);
        // Здесь вы можете добавить логику для перехода на другую страницу или выполнения другого действия
    };

    return (
        <HomeSection
            images={newsImages}
            altText="Latest news in the coal industry"
            onImageClick={handleImageClick} // Передаем обработчик клика
        />
    );
};

export default Sach;