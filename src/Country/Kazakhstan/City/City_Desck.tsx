import React from 'react';
import '../Kaz_Desc.css';

interface CityDescProps {
  Uptext: string;
  text: string;
}

const City_Desc: React.FC<CityDescProps> = ({ Uptext, text }) => {
  const images = [
    'https://via.placeholder.com/150x150?text=Image+1',
    'https://via.placeholder.com/150x150?text=Image+2', 
  ];

  return (
    <section className="describe-section">
      <div className="image-container">
        {images.map((src, index) => (
          <div key={index} className="image-wrapper">
            <img src={src} alt={`Description ${index + 1}`} className="side-image" />
          </div>
        ))}
      </div>
      <div className="text-blocks">
        <div className="text-block">
          <h3>{Uptext}</h3>
          <p>{text}</p>
        </div>
      </div>
      <div className="image-container">
        {images.map((src, index) => (
          <div key={index} className="image-wrapper">
            <img src={src} alt={`Description ${index + 1}`} className="side-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default City_Desc;
