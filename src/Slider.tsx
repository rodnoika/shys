import React, { useState } from 'react';
import './Slider.css'; // Импортируйте файл стилей

interface SliderProps {
  images: string[]; // Массив URL-ов изображений
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <button className="slider-button prev" onClick={prevSlide}>
        &lt;
      </button>
      <div className="slider-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="slider-button next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Slider;
