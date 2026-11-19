import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destination from './pages/Destination';

export default function App() {
  return (
    <Router>
      {/* Navbar Global */}
      <Navbar />
      
      {/* Konten Halaman */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        {/* Rute lain bisa ditambahkan nanti */}
      </Routes>
    </Router>
  );
}
