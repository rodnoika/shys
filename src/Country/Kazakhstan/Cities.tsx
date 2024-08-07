import React from 'react';
import './Cities.css';
import { Link } from 'react-router-dom';


interface City {
    name: string;
    imageUrl?: string;
    imgLink?: string;
}

const cities: City[] = [
    { name: 'Astana', imageUrl: '',imgLink: '/Destination/Kazakhstan/Cities/Astana' },
    { name: 'Almaty', imageUrl: '' ,imgLink: '/Destination/Kazakhstan/Cities/Almaty'},
    { name: 'Shymkent', imageUrl: '',imgLink: '' }, 
];

const Cities: React.FC = () => {
    return (
        <div className="city-list">
            {cities.map((city, index) => (
                <div key={index} className="city-card">
                    {city.imgLink ? (
                        <Link to={city.imgLink}>
                            <div
                                className="city-image"
                                style={{ backgroundImage: `url(${city.imageUrl || 'path/to/placeholder.jpg'})` }}
                            >
                                <div className="city-name">{city.name}</div>
                            </div>
                        </Link>
                    ) : (
                        <div
                            className="city-image"
                            style={{ backgroundImage: `url(${city.imageUrl || 'path/to/placeholder.jpg'})` }}
                        >
                            <div className="city-name">{city.name}</div>
                        </div>
                    )}
                </div>
            ))}

        </div>
    );
};

export default Cities;
