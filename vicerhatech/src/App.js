// src/App.js
import React from 'react';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoute from './Routes/MainRoute';

const App = () => {
    return (
        <Router>
            <Navbar />
            <main>
                <MainRoute />
            </main>
            <Footer />
        </Router>
    );
};

export default App;
