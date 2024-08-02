import React from 'react';
import './Gallery.css';

interface GalleryProps {
  smallImages: string[];
  largeImage?: string; // Сделаем largeImage необязательным
  nums: number; // Use number or bigint if needed
}

const Gallery: React.FC<GalleryProps> = ({ smallImages, largeImage, nums }) => {
  const defaultImage = 'path/to/placeholder/image.jpg'; 

  const renderSmallImages = () => {
    if (smallImages.length === 0) {
      return (
        <>
          <div className="small-image small-image-1 empty" />
          <div className="small-image small-image-2 empty" />
          <div className="small-image small-image-3 empty" />
          <div className="small-image small-image-4 empty" />
        </>
      );
    }

    return smallImages.map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`Small ${index}`}
        className={`small-image small-image-${index + 1}`}
      />
    ));
  };

  if (nums === 1) {
    return (
      <div className="gallery">
        <div className="small-images">
          {renderSmallImages()}
        </div>
        <img src={largeImage || defaultImage} alt="Large" className="large-image" />
      </div>
    );
  }

  return (
    <div className="gallery">
      <img src={largeImage || defaultImage} alt="Large" className="large-image" />
      <div className="small-images">
        {renderSmallImages()}
      </div>
    </div>
  );
};

export default Gallery;
