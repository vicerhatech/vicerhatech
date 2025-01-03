import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Import your other components/pages here
import Home from '../Pages/HomePage';
// import About from '../pages/AboutPage';
// import Contact from '../pages/ContactPage';
// import ProductPage from '../pages/productpage';
// Import other product pages as needed

const MainRoute = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} /> 
                <Route path="/products" element={<ProductPage />} />  */}
            </Routes>
    );
};

export default MainRoute;
