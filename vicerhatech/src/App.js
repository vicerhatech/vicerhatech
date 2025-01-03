// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoute from './Routes/MainRoute';

const App = () => {
    return (
        <Router>
            <main>
                <MainRoute />
            </main>
        </Router>
    );
};

export default App;
