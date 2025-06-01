import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/HomePage';
import About from '../Pages/AboutPage';
import Contact from '../Pages/ContactPage';
import Service from '../Pages/ServicePage';


const MainRoute = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                 <Route path="/contact" element={<Contact />} />
                 <Route path="/about" element={<About />} />
                 <Route path="/services" element={<Service />} />
            </Routes>
    );
};

export default MainRoute;
