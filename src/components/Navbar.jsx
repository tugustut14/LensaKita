import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path ? "text-[#167D8D] font-semibold" : "hover:text-[#167D8D] transition-colors";

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#EEEEEE]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center cursor-pointer">
          <span className="font-serif font-bold text-3xl tracking-tight text-[#071B2B]">LensaKita</span>
        </Link>

        {/* Menu */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link to="/" className={isActive('/')}>Beranda</Link>
          <Link to="/destination" className={isActive('/destination')}>Destinasi</Link>
          <Link to="/review" className={isActive('/review')}>Ulasan</Link>
          <Link to="/blogs" className={isActive('/blogs')}>Blog</Link>
          <Link to="/faq" className={isActive('/faq')}>FAQ</Link>
        </div>

        {/* CTA */}
        <Link to="/destination" className="bg-[#167D8D] text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-opacity-90 transition shadow-sm">
          Cari Fotografer
        </Link>
      </div>
    </nav>
  );
}
