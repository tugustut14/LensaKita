import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const isActive = (path) => location.pathname === path ? "text-[#167D8D] font-semibold" : "hover:text-[#167D8D] transition-colors";

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#EEEEEE]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center cursor-pointer" onClick={closeMobile}>
          <span className="font-serif font-bold text-2xl sm:text-3xl tracking-tight text-[#071B2B]">LensaKita</span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link to="/" className={isActive('/')}>Beranda</Link>
          <Link to="/destination" className={isActive('/destination')}>Destinasi</Link>
          <Link to="/review" className={isActive('/review')}>Ulasan</Link>
          <Link to="/blogs" className={isActive('/blogs')}>Blog</Link>
          <Link to="/faq" className={isActive('/faq')}>FAQ</Link>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#167D8D]"
        >
          <span aria-hidden="true" className="text-2xl">{mobileOpen ? '✕' : '☰'}</span>
        </button>

        {/* CTA (Desktop) */}
        <Link to="/destination" className="hidden lg:inline-block bg-[#167D8D] text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-opacity-90 transition shadow-sm">
          Cari Fotografer
        </Link>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#EEEEEE] bg-white px-6 py-4 space-y-3">
          <Link to="/" onClick={closeMobile} className={`block text-sm font-medium ${isActive('/')}`}>Beranda</Link>
          <Link to="/destination" onClick={closeMobile} className={`block text-sm font-medium ${isActive('/destination')}`}>Destinasi</Link>
          <Link to="/review" onClick={closeMobile} className={`block text-sm font-medium ${isActive('/review')}`}>Ulasan</Link>
          <Link to="/blogs" onClick={closeMobile} className={`block text-sm font-medium ${isActive('/blogs')}`}>Blog</Link>
          <Link to="/faq" onClick={closeMobile} className={`block text-sm font-medium ${isActive('/faq')}`}>FAQ</Link>
          <Link to="/destination" onClick={closeMobile} className="block bg-[#167D8D] text-white text-center px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-opacity-90 transition shadow-sm">
            Cari Fotografer
          </Link>
        </div>
      )}
    </nav>
  );
}
