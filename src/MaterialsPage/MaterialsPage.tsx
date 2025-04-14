// src/MaterialsPage/MaterialsPage.tsx
import React from 'react';
import './MaterialsPage.css'; // Импортируем файл стилей

const MaterialsPage: React.FC = () => {
  const materials = [
    {
      title: 'Название материала 1',
      description: 'Описание материала 1',
    },
    {
      title: 'Название материала 2',
      description: 'Описание материала 2 с более длинным текстом для демонстрации.',
    },
    {
      title: 'Название материала 3',
      description: 'Описание материала 3',
    },
  ];

  
  return (
    <div className="materials-page">
      <h1 className="page-title">Материалы</h1> {/* Заголовок страницы */}
      {materials.map((material, index) => (
        <div className="material-card" key={index}>
          <div 
            className="download-section" 
            style={{ backgroundImage: `url(/background.png)` }} // Используем путь к изображению из public
          >
            Скачать
          </div>
          <div className="info-section">
            <div className="material-title">{material.title}</div>
            <hr className="divider" />
            <div className="material-description">{material.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MaterialsPage;