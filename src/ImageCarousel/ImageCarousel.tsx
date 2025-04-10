import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';

interface ImageCarouselProps {
    images: string[]; // Массив URL изображений
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const sliderRef = useRef<Slider | null>(null); // Создаем реф для слайдера

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (sliderRef.current) {
                sliderRef.current.slickNext(); // Переключаем на следующий слайд
            }
        }, 5000); // Переключение каждые 5 секунд

        return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
    }, []);

    return (
        <Slider ref={sliderRef} {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
                </div>
            ))}
        </Slider>
    );
};

export default ImageCarousel;