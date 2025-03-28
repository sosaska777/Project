import React from 'react';
import './HomeSection.css'; // Импортируем CSS стили
import Button from '../Button/Button';

interface HomeSectionProps {
  images: string[];
  altText: string;
  title: string;
  description: string;
  style?: React.CSSProperties; // Необязательный стиль
}

const HomeSection: React.FC<HomeSectionProps> = ({ images, altText, title, description, style }) => {
  return (
    <div className="home-section" style={style}>
      <h2 className="title">{title}</h2>
      <div className="content-wrapper">
        <div className="carousel">
          {images.map((image, index) => (
            <img key={index} src={image} alt={altText} className="carousel-image" />
          ))}
        </div>
        <div className="description">
          <p>{description}</p>
          <Button text="Подробнее" onClick={() => console.log("Контакты")} />
        </div>
      </div>

    </div>
  );
};

export default HomeSection;


