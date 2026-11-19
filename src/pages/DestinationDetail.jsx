import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function DestinationDetail() {
  const { city } = useParams();
  const [sortBy, setSortBy] = useState('popular');

  const allPhotographers = [
    { id: 1, name: 'Budi Santoso', city: 'Bali', specialization: 'Wedding', rating: 4.9, price: 1500000, image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop' },
    { id: 2, name: 'Siti Rahma', city: 'Jakarta', specialization: 'Produk', rating: 4.8, price: 2000000, image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=400&auto=format&fit=crop' },
    { id: 3, name: 'Andi Wijaya', city: 'Bali', specialization: 'Event', rating: 5.0, price: 1200000, image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=400&auto=format&fit=crop' },
    { id: 4, name: 'Dewi Lestari', city: 'Bali', specialization: 'Pre-Wedding', rating: 4.7, price: 900000, image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop' },
    { id: 5, name: 'Rian Pratama', city: 'Bandung', specialization: 'Wisuda', rating: 4.6, price: 800000, image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=400&auto=format&fit=crop' },
    { id: 6, name: 'Komang Wijaya', city: 'Bali', specialization: 'Wedding', rating: 4.9, price: 1800000, image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400&auto=format&fit=crop' },
  ];

  const filteredPhotographers = useMemo(() => {
    let result = allPhotographers.filter((p) => p.city.toLowerCase() === (city || '').toLowerCase());
    if (sortBy === 'price-low') result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') result = [...result].sort((a, b) => b.rating - a.rating);
    return result;
  }, [city, sortBy]);

  return (
    <div className="min-h-screen bg-[#EEEEEE] font-sans text-[#071B2B] pb-20">
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`https://source.unsplash.com/random/1920x600/?${city},city,travel`}
            alt={`Pemandangan ${city}`}
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop'; }}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-white">
          <Link to="/destination" className="inline-flex items-center gap-2 text-sm font-medium mb-4 hover:text-[#B9E4E8] transition">
            <Icon icon="mdi:arrow-left" /> Kembali ke Semua Destinasi
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Fotografer Terbaik di {city}</h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Temukan {filteredPhotographers.length} fotografer profesional yang siap mengabadikan momen Anda di {city}.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
        <div className="bg-white p-4 rounded-xl shadow-md flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            <span className="text-sm text-gray-500 whitespace-nowrap">Spesialisasi:</span>
            {['Semua', 'Wedding', 'Produk', 'Event'].map((spec) => (
              <button key={spec} className="px-4 py-1.5 rounded-full text-sm font-medium border border-gray-200 hover:border-[#167D8D] hover:text-[#167D8D] transition whitespace-nowrap">
                {spec}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <span className="text-sm text-gray-500 whitespace-nowrap">Urutkan:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="p-2 border border-gray-200 rounded-md text-sm outline-none focus:ring-2 focus:ring-[#167D8D] w-full md:w-auto"
            >
              <option value="popular">Paling Populer</option>
              <option value="price-low">Harga Terendah</option>
              <option value="price-high">Harga Tertinggi</option>
              <option value="rating">Rating Tertinggi</option>
            </select>
          </div>
        </div>

        {filteredPhotographers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotographers.map((photo) => (
              <div key={photo.id} className="bg-white rounded-xl shadow-sm border border-[#EEEEEE] overflow-hidden hover:shadow-lg transition-all group">
                <div className="relative h-64 overflow-hidden">
                  <img src={photo.image} alt={photo.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop'; }} />
                  <button className="absolute top-3 right-3 bg-white/80 p-2 rounded-full hover:bg-white transition" onClick={(e) => e.stopPropagation()}>
                    <Icon icon="mdi:heart-outline" className="text-xl text-gray-600" />
                  </button>
                  <div className="absolute bottom-3 left-3 bg-white/90 px-3 py-1 rounded-md text-xs font-bold text-[#167D8D]">
                    {photo.specialization}
                  </div>
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
                    <div>
                      <p className="text-xs text-gray-500">Mulai dari</p>
                      <p className="font-bold text-[#167D8D]">Rp {photo.price.toLocaleString('id-ID')}</p>
                    </div>
                    <Link to={`/photographer/${photo.id}`} className="text-sm font-semibold bg-[#167D8D] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition">
                      Lihat Profil
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-12 text-center border border-gray-200">
            <Icon icon="mdi:account-search" className="text-6xl text-gray-300 mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-gray-700 mb-2">Belum Ada Fotografer di {city}</h3>
            <p className="text-gray-500 mb-6">Kami sedang memperluas jaringan kami. Coba cari di kota lain.</p>
            <Link to="/destination" className="bg-[#167D8D] text-white px-6 py-2.5 rounded-md font-semibold hover:bg-opacity-90 transition">
              Kembali ke Destinasi
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
