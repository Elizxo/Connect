import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

React.useEffect(() => {
    const navbar = document.querySelector('.navbar-hover');
    const handleMouseMove = (e) => {
        const rect = navbar.getBoundingClientRect();
        const x = e.clientX - rect.left;
        navbar.style.setProperty('--mouse-x', `${x}px`);
    };
    navbar.addEventListener('mousemove', handleMouseMove);
    return () => navbar.removeEventListener('mousemove', handleMouseMove);
}, []);

React.useEffect(() => {
    const navbar = document.querySelector('.navbar-hover');
    const handleMouseMove = (e) => {
        const rect = navbar.getBoundingClientRect();
        const x = e.clientX - rect.left;
        navbar.style.setProperty('--mouse-x', `${x}px`);
    };
    navbar.addEventListener('mousemove', handleMouseMove);
    return () => navbar.removeEventListener('mousemove', handleMouseMove);
}, []);
