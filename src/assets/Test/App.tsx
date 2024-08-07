// App.tsx
import React from 'react';
import Slider from './Slider.tsx';

const slides = [
  { id: 1, image: 'https://via.placeholder.com/150x150?text=ASDSA', alt: 'Image 1' },
  { id: 2, image: 'https://via.placeholder.com/150x150?text=SAD', alt: 'Image 2' },
  { id: 3, image: 'https://via.placeholder.com/150x150?text=BB', alt: 'Image 3' },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>My Slider</h1>
      <Slider slides={slides} />
    </div>
  );
};

export default App;
