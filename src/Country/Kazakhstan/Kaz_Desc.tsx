import React from 'react';
import './Kaz_Desc.css';

const Kaz_Desc: React.FC = () => {
    const images = [
        'https://via.placeholder.com/150x150?text=Image+1',
        'https://via.placeholder.com/150x150?text=Image+2',
        'https://via.placeholder.com/150x150?text=Image+3',
        'https://via.placeholder.com/150x150?text=Image+4',
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
                    <h3>Culture</h3>
                    <p>
                        Kazakhstan offers a unique and enriching travel experience, blending its rich nomadic heritage with stunning natural landscapes and vibrant modern cities. Visitors can explore the traditional lifestyle through stays in yurts, taste authentic Kazakh cuisine like beshbarmak and kymyz, and enjoy cultural festivals such as Nauryz, which celebrates the arrival of spring. The country’s diverse geography includes the majestic steppes, the vast deserts, and the stunning Altai Mountains, providing opportunities for outdoor adventures like hiking, horseback riding, and skiing. In urban centers like Almaty and Nur-Sultan, travelers can experience a mix of contemporary culture and historical landmarks, offering a glimpse into Kazakhstan's dynamic evolution from its ancient roots to its modern-day status.
                    </p>
                </div>
                <div className="text-block">
                    <h3>Attractions</h3>
                    <p>
                        Kazakhstan offers a captivating blend of natural beauty and cultural heritage, making it a diverse travel destination. Highlights include the stunning Charyn Canyon, the UNESCO-listed Mausoleum of Khoja Ahmed Yasawi, and the picturesque Kolsai Lakes nestled in the Tien Shan mountains. Visitors can explore the modern marvels of Astana with its futuristic architecture, and experience the vibrant cultural scene in Almaty, including the Central State Museum and Green Bazaar. For adventure seekers, the Medeu Skating Rink and Shymbulak Ski Resort provide thrilling winter sports, while the Baikonur Cosmodrome offers a unique glimpse into space exploration. The chance to engage in traditional Kazakh horseback riding and attend festivals like Nauryz further enriches the travel experience in this dynamic country.
                    </p>
                </div>
                <div className="text-block">
                    <h3>Nature</h3>
                    <p>
                        Kazakhstan boasts a diverse and striking natural landscape that ranges from vast steppes to towering mountains and expansive deserts. The country's geography is characterized by its broad, rolling steppes, which cover much of the central region, offering sweeping views and a sense of endless horizon. In the east, the Tien Shan and Altai Mountains rise dramatically, providing stunning alpine scenery, lush valleys, and opportunities for hiking, skiing, and outdoor exploration. The desert landscapes, such as the Kyzylkum and Karakum, add to the country's natural variety with their unique sand dunes and arid beauty. Kazakhstan is also home to beautiful lakes, including the turquoise Big Almaty Lake and the serene Kolsai Lakes, as well as the Charyn Canyon, known for its impressive rock formations. This rich tapestry of natural features makes Kazakhstan a destination for both tranquil retreats and adventurous pursuits.
                    </p>
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

export default Kaz_Desc;
