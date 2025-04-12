// src/PhotosPage/PhotosPage.tsx
import React from 'react';
import './PhotosPage.css'; // Импортируем файл стилей

const PhotosPage: React.FC = () => {
  // Указываем пути к изображениям в папке public
  const images = [
    '/UG.png',
    '/UG.png',
    '/Sach.png',
    '/UG.png',
    '/Sach.png',
    '/Sach.png'
  ];

  return (
    <div className="photos-page">
      <h1 className="photos-title">Фото</h1>
      <div className="photo-grid">
        {images.map((image, index) => (
          <div className="photo-cube" key={index}>
            <img src={image} alt={`Фото ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotosPage;