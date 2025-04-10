// SachPage.tsx
import React from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel'; // Импортируем компонент карусели
import News from '../News/News'; // Импортируем компонент News

const SachPage: React.FC = () => {
    const imageUrls = [
        '/image1.png', // Путь к изображению в папке public/images
        '/image2.png', // Путь к изображению в папке public/images
        '/image3.png', // Путь к изображению в папке public/images
        // Добавьте другие URL изображений по мере необходимости
    ];

    return (
        <div>
                        <News 
                title="Заголовок новости" 
                location="Место проведения" 
                date="Дата проведения" 
                backgroundImage="/background-image.png" // Укажите путь к фоновому изображению
                buttonText="Читать далее"
                onButtonClick={() => console.log("Кнопка нажата")} // Обработчик клика по кнопке
            />

            <ImageCarousel images={imageUrls} /> {/* Карусель с автоматической прокруткой */}
            <p>
                Сахалин идеален для туризма и поиска ярких впечатлений. В местных ресторанах можно попробовать свежайших крабов и диких устриц. 
                В городах заметить сочетание японской, корейской и русской культур. А в диких местах полюбоваться вулканами и гигантскими папоротниками. 
                Составили краткие описания самых красивых мест Сахалина и делимся с вами.
            </p>
            
            {/* Добавляем компонент News */}

            {/* Другие элементы страницы */}
        </div>
    );
};

export default SachPage;