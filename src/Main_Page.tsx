import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';

import App from './Main_Menu/Main_menu.tsx';
import Kaz from './Country/Kazakhstan/Kazakh';
import Astana from './Country/Kazakhstan/City/Astana/Astana';
import Almaty from './Country/Kazakhstan/City/Almaty/Almaty';
import BlogList from './Blog/BlogList';
import BlogPost from './Blog/BlogPost.tsx';
import Attractions from './Attractions/Attractions.tsx';
function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Destination/Kazakhstan" element={<Kaz />} /> 
        <Route path="/Destination/Kazakhstan/Cities/Astana" element={<Astana/>} />
        <Route path="/Destination/Kazakhstan/Cities/Almaty" element={<Almaty/>} />
        <Route path="/blog" element={<BlogList/>} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/Attractions" element={<Attractions />} />
      </Routes>
    </Router>
  );
}

export default Main;