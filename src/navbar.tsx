import React, { useState } from 'react';
import './Navbar.css';

function Navbar(){
    const [isDestinationOpen, setIsDestinationOpen] = useState(false);

    const handleDestinationClick = () => {
        setIsDestinationOpen(!isDestinationOpen);
    };

    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li className="navbar-item">Services</li>
                <li className="navbar-item" onClick={handleDestinationClick}>
                    Destination
                    {isDestinationOpen && (
                        <ul className="submenu">
                            <li className="submenu-item">Kazakhstan</li>
                        </ul>
                    )}
                </li>
                <li className="navbar-item">Blog</li>
                <li className="navbar-item">Attractions</li>
            </ul>
        </nav>
    );
};

export default Navbar;
