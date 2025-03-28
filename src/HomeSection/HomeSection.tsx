import React from 'react';
import './HomeSection.css'; // Импортируем CSS стили

interface HomeSectionProps {
  images: string[]; // Массив путей к изображениям
  altText: string;
  style?: React.CSSProperties; // Необязательный стиль
  onImageClick: (index: number) => void; // Обработчик клика по изображению
}

const HomeSection: React.FC<HomeSectionProps> = ({ images, altText, style, onImageClick }) => {
  return (
    <div className="home-section" style={style}>
      <div className="carousel">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => onImageClick(index)} // Обработчик клика
            style={{ padding: 0, border: 'none', background: 'none' }} // Убираем стили кнопки
          >
            <img src={image} alt={altText} className="carousel-image" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeSection;