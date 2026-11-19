import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Review from './pages/Review';
import Blogs from './pages/Blogs';
import FAQ from './pages/FAQ';

export default function App() {
  return (
    <Router>
      {/* Navbar Global */}
      <Navbar />
      
      {/* Konten Halaman */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/review" element={<Review />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/faq" element={<FAQ />} />
        {/* Rute lain bisa ditambahkan nanti */}
      </Routes>

      {/* Footer Global */}
      <Footer />
    </Router>
  );
}
