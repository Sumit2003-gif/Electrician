import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import SingleBlog from './Components/SingleBlog';

import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './Components/ScrollToUp';

function App() {
  const location = useLocation();

  // AOS Initialization
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <div className="bg-gray-100">
      <ScrollToTop/>
      <Navbar />
      <div> {/* Push content down to avoid navbar overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
