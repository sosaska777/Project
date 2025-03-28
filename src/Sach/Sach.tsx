import React from 'react';
import HomeSection from '../HomeSection/HomeSection';

const Sach: React.FC = () => {
    // Путь к изображению в папке public
    const newsImage = `${process.env.PUBLIC_URL}/logo.jpg`; // Замените на нужное изображение

    return (
        <HomeSection
            images={[newsImage]} // Убедитесь, что это массив изображений
            altText="Latest news in the coal industry"
            title="Новости угольной промышленности"
            description="Здесь вы найдете свежие новости и обновления о событиях в угольной промышленности. Следите за обновлениями, чтобы быть в курсе последних событий и трендов."
            style={{ marginBottom: '50px' }}
        />
    );
};

export default Sach;