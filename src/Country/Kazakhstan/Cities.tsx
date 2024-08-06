import React from 'react';
import './Cities.css'; 

interface City {
    name: string;
    imageUrl?: string;
}

const cities: City[] = [
    { name: 'Astana', imageUrl: 'path/to/new-york.jpg' },
    { name: 'Almaty', imageUrl: 'path/to/los-angeles.jpg' },
    { name: 'Shymkent', imageUrl: '' }, 
];

const Cities: React.FC = () => {
    return (
        <div className="city-list">
            {cities.map((city, index) => (
                <div key={index} className="city-card">
                    <div
                        className="city-image"
                        style={{ backgroundImage: `url(${city.imageUrl || 'path/to/placeholder.jpg'})` }}
                    >
                        <div className="city-name">{city.name}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cities;
