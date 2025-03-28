import React from 'react';

interface ImageComponentProps {
  src: string;
  alt: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} style={{ maxWidth: '40%', height: 'auto' }} />
    </div>
  );
};

export default ImageComponent;