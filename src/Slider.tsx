import React, { useState, useCallback } from 'react';
import './Slider.css';

interface SliderProps {
    images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }, [images.length]);

    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, [images.length]);

    if (images.length === 0) {
        return <div className="slider">No images available</div>;
    }

    return (
        <div className="slider">
            <button className="slider-button prev" onClick={handlePrevious}>
                &#10094;
            </button>
            <div className="slider-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index}`} />
                ))}
            </div>
            <button className="slider-button next" onClick={handleNext}>
                &#10095;
            </button>
        </div>
    );
};

export default Slider;
