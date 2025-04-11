// src/SponsorImage.tsx
import React from 'react';
import './SponsorImage.css'; // Импортируй файл стилей, если нужно

const SponsorImage: React.FC = () => {
  return (
    <div className="sosalimage" style={{ marginTop: '150px', marginLeft: '20px', marginRight: '20px' }}>
      <img src={`${process.env.PUBLIC_URL}/sponsor.png`} alt="Sponsor" className="home-image" />
    </div>
  );
};

export default SponsorImage;