import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <footer className="bg-[#071B2B] text-white pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Kolom 1: Brand & Deskripsi */}
        <div>
          <Link to="/" className="inline-block mb-4">
            <span className="font-serif font-bold text-3xl tracking-tight text-white">LensaKita</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Platform direktori yang menghubungkan Anda dengan fotografer profesional lokal di seluruh Indonesia dan mancanegara. Abadikan momen berharga dengan sentuhan ahli.
          </p>
          <div className="flex gap-3">
            {['mdi:instagram', 'mdi:facebook', 'mdi:twitter', 'mdi:youtube'].map((icon, idx) => (
              <a key={idx} href="#" className="bg-white/10 text-white p-2 rounded-full hover:bg-[#167D8D] transition-colors">
                <Icon icon={icon} className="text-xl" />
              </a>
            ))}
          </div>
        </div>

        {/* Kolom 2: Tautan Cepat */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-[#B9E4E8]">Jelajahi</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/destination" className="hover:text-white transition-colors">Cari Destinasi</Link></li>
            <li><Link to="/review" className="hover:text-white transition-colors">Ulasan Pelanggan</Link></li>
            <li><Link to="/blogs" className="hover:text-white transition-colors">Blog & Inspirasi</Link></li>
            <li><Link to="/faq" className="hover:text-white transition-colors">Pusat Bantuan (FAQ)</Link></li>
          </ul>
        </div>

        {/* Kolom 3: Informasi Perusahaan */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-[#B9E4E8]">Informasi</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Karier</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Hubungi Kami</a></li>
          </ul>
        </div>

        {/* Kolom 4: Kontak & Newsletter */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-[#B9E4E8]">Hubungi Kami</h4>
          <ul className="space-y-4 text-sm text-gray-300 mb-6">
            <li className="flex items-start gap-3">
              <Icon icon="mdi:map-marker" className="text-xl text-[#167D8D] mt-1 flex-shrink-0" />
              <span>Jl. Raya Kuta No. 123, Badung, Bali 80361, Indonesia</span>
            </li>
            <li className="flex items-center gap-3">
              <Icon icon="mdi:email" className="text-xl text-[#167D8D] flex-shrink-0" />
              <span>hello@lensakita.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Icon icon="mdi:phone" className="text-xl text-[#167D8D] flex-shrink-0" />
              <span>+62 812 3456 7890</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Garis Pemisah & Hak Cipta */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} LensaKita. Hak Cipta Dilindungi.
        </p>
        <div className="flex gap-4 text-sm text-gray-500">
          <a href="#" className="hover:text-white transition">Privasi</a>
          <a href="#" className="hover:text-white transition">Ketentuan</a>
          <a href="#" className="hover:text-white transition">Cookie</a>
        </div>
      </div>
    </footer>
  );
}
