import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Destination() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('destinations'); // 'destinations' atau 'photographers'

  // Data Dummy Destinasi
  const destinations = [
    { id: 1, name: 'Bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop', photographers: 124 },
    { id: 2, name: 'Jakarta', image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=600&auto=format&fit=crop', photographers: 85 },
    { id: 3, name: 'Yogyakarta', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=600&auto=format&fit=crop', photographers: 67 },
    { id: 4, name: 'Bandung', image: 'https://images.unsplash.com/photo-1582719478250-c894a5e1b21b?q=80&w=600&auto=format&fit=crop', photographers: 42 },
    { id: 5, name: 'Labuan Bajo', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=600&auto=format&fit=crop', photographers: 31 },
    { id: 6, name: 'Lombok', image: 'https://images.unsplash.com/photo-1559628233-100c798642d4?q=80&w=600&auto=format&fit=crop', photographers: 28 },
  ];

  // Data Dummy Fotografer (Bisa diambil dari data/photographers.js nanti)
  const photographers = [
    { id: 1, name: 'Budi Santoso', city: 'Bali', image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop', rating: 4.9, price: 'Rp 1.500.000' },
    { id: 2, name: 'Siti Rahma', city: 'Jakarta', image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=400&auto=format&fit=crop', rating: 4.8, price: 'Rp 2.000.000' },
    { id: 3, name: 'Andi Wijaya', city: 'Yogyakarta', image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=400&auto=format&fit=crop', rating: 5.0, price: 'Rp 1.200.000' },
    { id: 4, name: 'Dewi Lestari', city: 'Bandung', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop', rating: 4.7, price: 'Rp 900.000' },
  ];

  return (
    <div className="min-h-screen bg-[#EEEEEE] font-sans text-[#071B2B]">
      
      {/* 2. HEADER PENCARIAN (Hero Section dengan Background Gambar) */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1920&auto=format&fit=crop" 
            alt="Pemandangan Bali" 
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay Gelap agar teks terbaca */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Konten Hero */}
        <div className="max-w-4xl mx-auto text-center relative z-10 pt-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Mau Foto di Mana Hari Ini?
          </h1>
          <p className="text-white/90 mb-8 text-lg md:text-xl drop-shadow-md">
            Temukan destinasi impianmu dan temukan fotografer lokal terbaik di sana.
          </p>
          
          {/* Search Bar Besar */}
          <div className="flex bg-white rounded-full shadow-2xl overflow-hidden p-2 max-w-2xl mx-auto">
            <div className="flex items-center pl-4 text-gray-400">
              <Icon icon="mdi:map-marker-outline" className="text-2xl" />
            </div>
            <input 
              type="text" 
              placeholder="Ketik nama kota atau destinasi (misal: Bali)..." 
              className="flex-grow p-3 outline-none text-gray-700 placeholder-gray-400 text-lg bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="bg-[#167D8D] hover:bg-opacity-90 text-white px-8 py-3 rounded-full font-semibold text-lg transition flex items-center gap-2">
              <Icon icon="mdi:magnify" /> Cari
            </button>
          </div>
        </div>
      </section>

      {/* 3. KONTEN UTAMA */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Tabs Navigasi */}
        <div className="flex gap-4 mb-8 border-b border-gray-300 pb-2">
          <button 
            onClick={() => setActiveTab('destinations')}
            className={`pb-2 px-4 font-semibold text-lg transition-colors ${activeTab === 'destinations' ? 'text-[#167D8D] border-b-4 border-[#167D8D]' : 'text-gray-500 hover:text-[#167D8D]'}`}
          >
            Jelajahi Destinasi
          </button>
          <button 
            onClick={() => setActiveTab('photographers')}
            className={`pb-2 px-4 font-semibold text-lg transition-colors ${activeTab === 'photographers' ? 'text-[#167D8D] border-b-4 border-[#167D8D]' : 'text-gray-500 hover:text-[#167D8D]'}`}
          >
            Cari Fotografer
          </button>
        </div>

        {/* TAB 1: DESTINASI */}
        {activeTab === 'destinations' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.filter(d => d.name.toLowerCase().includes(searchQuery.toLowerCase())).map((dest) => (
              <div key={dest.id} className="group relative rounded-2xl overflow-hidden cursor-pointer h-72 shadow-md hover:shadow-xl transition-all duration-300">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end">
                  <div>
                    <h3 className="text-white font-serif text-2xl font-bold mb-1">{dest.name}</h3>
                    <p className="text-white/80 text-sm flex items-center gap-1">
                      <Icon icon="mdi:camera" /> {dest.photographers} Fotografer
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md p-2 rounded-full group-hover:bg-[#167D8D] transition-colors">
                    <Icon icon="mdi:arrow-right" className="text-white text-xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: FOTOGRAFER */}
        {activeTab === 'photographers' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {photographers.map((photo) => (
              <div key={photo.id} className="bg-white rounded-xl shadow-sm border border-[#EEEEEE] overflow-hidden hover:shadow-lg transition-all group">
                <div className="relative h-64 overflow-hidden">
                  <img src={photo.image} alt={photo.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <button className="absolute top-3 right-3 bg-white/80 p-2 rounded-full hover:bg-white transition">
                    <Icon icon="mdi:heart-outline" className="text-xl text-gray-600" />
                  </button>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg text-[#071B2B]">{photo.name}</h3>
                      <p className="text-gray-500 text-sm flex items-center gap-1">
                        <Icon icon="mdi:map-marker" /> {photo.city}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 bg-[#B9E4E8] px-2 py-1 rounded-md">
                      <Icon icon="mdi:star" className="text-amber-500 text-sm" />
                      <span className="text-xs font-bold text-[#071B2B]">{photo.rating}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#EEEEEE] flex justify-between items-center">
                    <span className="text-sm text-gray-500">Mulai dari</span>
                    <span className="font-bold text-[#167D8D]">{photo.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tombol Muat Lebih Banyak */}
        <div className="mt-12 text-center">
          <button className="border border-[#167D8D] text-[#167D8D] px-8 py-3 rounded-full font-semibold hover:bg-[#167D8D] hover:text-white transition">
            Muat Lebih Banyak
          </button>
        </div>

      </section>

      {/* FOOTER SEDERHANA */}
      <footer className="bg-white border-t border-[#EEEEEE] py-8 text-center mt-12">
        <div className="mb-4">
          <span className="font-serif font-bold text-2xl text-[#071B2B]">LensaKita</span>
        </div>
        <p className="text-sm text-gray-500">2026 © Hak cipta dilindungi, lensakita.com</p>
      </footer>

    </div>
  );
}
