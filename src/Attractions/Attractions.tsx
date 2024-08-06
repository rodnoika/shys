import React from 'react';
import './Attractions.css'; 
import Footer from '../Footer';
import Navbar from '../navbar';
interface Attraction {
    id: number;
    name: string;
    imageUrl: string;
}

const attractions: Attraction[] = [
    { id: 1, name: 'Baikonur', imageUrl: 'https://via.placeholder.com/150x150?text=Baikonur' },
    { id: 2, name: 'Issyk-Kul', imageUrl: 'https://via.placeholder.com/150x150?text=Issyk-Kul' },
    { id: 3, name: 'Samarkand', imageUrl: 'https://via.placeholder.com/150x150?text=Samarkand' },
    { id: 4, name: 'Bukhara', imageUrl: 'https://via.placeholder.com/150x150?text=Bukhara' },
    { id: 5, name: 'Shahrisabz', imageUrl: 'https://via.placeholder.com/150x150?text=Shahrisabz' },
];

const Attractions: React.FC = () => {
    return (
        <>
            <div>
                <Navbar/>
                <div className="gallery-page">
                    <h1>Central Asia Attractions Gallery</h1>
                    <div className="gallery">
                        {attractions.map((attraction) => (
                            <div key={attraction.id} className="gallery-item">
                                <img src={attraction.imageUrl} alt={attraction.name} />
                                <div className="gallery-caption">{attraction.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
};

export default Attractions;
