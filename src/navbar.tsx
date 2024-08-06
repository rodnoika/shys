import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ReactComponent as Logo } from './assets/logo.svg';

const Navbar: React.FC = () => {
    const [isDestinationOpen, setIsDestinationOpen] = useState<boolean>(false);

    useEffect(() => {
        console.log(isDestinationOpen);
    }, [isDestinationOpen]);

    const handleDestinationClick = () => {
        console.log(isDestinationOpen);
        setIsDestinationOpen(!isDestinationOpen);
    };

    const handleScrollToBottom = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); 
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth' 
        });
    };



    
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/" className="logo-link">
                    <Logo />
                </Link>
            </div>
            <ul className="navbar-menu">
                <li className="navbar-item">
                    <a href="#" className='link' onClick={handleScrollToBottom}>Services</a>
                </li>                
                <li className="navbar-item" onClick={handleDestinationClick}>
                    <span>Destination</span>
                    {isDestinationOpen && (
                        <ul className="submenu">
                            <li className="submenu-item">
                                <Link to="/Destination/Kazakhstan" className='link'>Kazakhstan</Link>
                                <ul className="sub-submenu">
                                    <li className="sub-submenu-item">
                                        <Link to="/Destination/Kazakhstan/Cities/Almaty" className='link'>Almaty</Link>
                                    </li>
                                    <li className="sub-submenu-item">
                                        <Link to="/Destination/Kazakhstan/Cities/Astana" className='link'>Astana</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="submenu-item">
                                <span>Uzbekistan</span>
                                <ul className="sub-submenu">
                                </ul>
                            </li>
                            <li className="submenu-item">
                                <span>Kyrgyzstan</span>
                                <ul className="sub-submenu">
                                </ul>
                            </li>
                        </ul>
                    )}
                </li>
                
                <li className="navbar-item"><Link to="/blog" className='link'>Blog</Link></li>
                <li className="navbar-item"><Link to="/attractions" className='link'>Attractions</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
