import React, { useMemo, useState } from 'react';
import { Icon } from '@iconify/react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { photographers } from '../data/photographers';

export default function Destination() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialQ = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQ);
  const [activeTab, setActiveTab] = useState('destinations');

  const destinations = [
    { id: 1, name: 'Bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop', photographers: 124 },
    { id: 2, name: 'Jakarta', image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=600&auto=format&fit=crop', photographers: 85 },
    { id: 3, name: 'Yogyakarta', image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=600&auto=format&fit=crop', photographers: 67 },
    { id: 4, name: 'Bandung', image: 'https://images.unsplash.com/photo-1582719478250-c894a5e1b21b?q=80&w=600&auto=format&fit=crop', photographers: 42 },
    { id: 5, name: 'Labuan Bajo', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=600&auto=format&fit=crop', photographers: 31 },
    { id: 6, name: 'Lombok', image: 'https://images.unsplash.com/photo-1559628233-100c798642d4?q=80&w=600&auto=format&fit=crop', photographers: 28 },
  ];

  const filteredDestinations = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return destinations;
    return destinations.filter((d) => d.name.toLowerCase().includes(q));
  }, [searchQuery]);

  const filteredPhotographers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return photographers;
    return photographers.filter((p) => p.nama.toLowerCase().includes(q) || p.kota.toLowerCase().includes(q));
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#EEEEEE] font-sans text-[#071B2B]">
      {/* 2. HEADER PENCARIAN (Hero Section dengan Background Gambar) */}
      <section className="relative py-16 sm:py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1920&auto=format&fit=crop" 
            alt="Pemandangan Bali" 
            className="w-full h-full object-cover object-center"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop'; }}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10 pt-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Mau Foto di Mana Hari Ini?
          </h1>
          <p className="text-white/90 mb-8 text-lg md:text-xl drop-shadow-md">
            Temukan destinasi impianmu dan temukan fotografer lokal terbaik di sana.
          </p>
          <div className="flex w-full max-w-2xl bg-white rounded-full shadow-2xl overflow-hidden p-2 mx-auto">
            <div className="flex items-center pl-4 text-gray-400">
              <Icon icon="mdi:map-marker-outline" className="text-2xl" />
            </div>
            <input 
              type="text" 
              placeholder="Ketik nama kota atau destinasi (misal: Bali)..." 
              className="flex-1 min-w-0 p-3 outline-none text-gray-700 placeholder-gray-400 text-lg bg-transparent"
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
        <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-300 pb-2">
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

        {activeTab === 'destinations' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.map((dest) => (
              <Link to={`/destination/${dest.name}`} key={dest.id} className="group relative rounded-2xl overflow-hidden cursor-pointer h-72 shadow-md hover:shadow-xl transition-all duration-300 block">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop'; }} />
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
              </Link>
            ))}
          </div>
        )}

        {activeTab === 'photographers' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPhotographers.map((photo) => (
              <div
                key={photo.id}
                onClick={() => navigate(`/photographer/${photo.id}`)}
                className="bg-white rounded-xl shadow-sm border border-[#EEEEEE] overflow-hidden hover:shadow-lg transition-all group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={photo.imageUrl} alt={photo.nama} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop'; }} />
                  <button className="absolute top-3 right-3 bg-white/80 p-2 rounded-full hover:bg-white transition" onClick={(e) => e.stopPropagation()}>
                    <Icon icon="mdi:heart-outline" className="text-xl text-gray-600" />
                  </button>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg text-[#071B2B]">{photo.nama}</h3>
                      <p className="text-gray-500 text-sm flex items-center gap-1">
                        <Icon icon="mdi:map-marker" /> {photo.kota}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 bg-[#B9E4E8] px-2 py-1 rounded-md">
                      <Icon icon="mdi:star" className="text-amber-500 text-sm" />
                      <span className="text-xs font-bold text-[#071B2B]">{photo.rating}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#EEEEEE] flex justify-between items-center">
                    <span className="text-sm text-gray-500">Mulai dari</span>
                    <span className="font-bold text-[#167D8D]">Rp {photo.hargaMulai.toLocaleString('id-ID')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <button className="border border-[#167D8D] text-[#167D8D] px-8 py-3 rounded-full font-semibold hover:bg-[#167D8D] hover:text-white transition">
            Muat Lebih Banyak
          </button>
        </div>
      </section>
    </div>
  );
}
