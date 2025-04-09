import React from 'react';
import Slider from 'react-slick';

interface ImageCarouselProps {
    images: string[]; // Массив URL изображений
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
                </div>
            ))}
        </Slider>
    );
};

export default ImageCarousel;