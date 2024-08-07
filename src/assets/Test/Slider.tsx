// Slider.tsx
import React, { useState } from 'react';
import './Slider.css'; // Подключите стили для слайд-шоу

interface Slide {
  id: number;
  image: string;
  alt: string;
}

interface SliderProps {
  slides: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <button className="slider-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div
        className="slider-container"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }} // Используйте 100vw для полного сдвига
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="slide"
          >
            <img src={slide.image} alt={slide.alt} />
          </div>
        ))}
      </div>
      <button className="slider-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
