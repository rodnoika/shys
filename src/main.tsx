import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main_Page'; // Make sure this is the correct path to your Main component

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
