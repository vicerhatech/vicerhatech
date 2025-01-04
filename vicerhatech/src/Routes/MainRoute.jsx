import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Import your other components/pages here
import Home from '../Pages/HomePage';
// import About from '../pages/AboutPage';
import Contact from '../Pages/ContactPage';
// import ProductPage from '../pages/productpage';
// Import other product pages as needed

const MainRoute = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                 <Route path="/contact" element={<Contact />} />
            </Routes>
    );
};

export default MainRoute;
