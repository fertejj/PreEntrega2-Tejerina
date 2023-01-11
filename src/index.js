import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/navBar/NavBar'
import Footer from './components/footer/Footer.jsx';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <App />
    <Footer />
  </React.StrictMode>
);
