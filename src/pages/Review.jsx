import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Review() {
  const [filterRating, setFilterRating] = useState('all');

  // Data Dummy Ulasan
  const reviews = [
    { id: 1, name: 'Ayu & Budi', event: 'Pernikahan di Bali', rating: 5, text: 'Fotografernya sangat profesional! Hasil fotonya melebihi ekspektasi kami. Momen sakral kami diabadikan dengan sangat indah.', date: '12 Okt 2026', avatar: 'A' },
    { id: 2, name: 'Komang Wijaya', event: 'Foto Produk UMKM', rating: 5, text: 'Sangat cepat dan hasilnya memuaskan. Penjualan toko saya naik setelah pakai foto dari sini. Recommended!', date: '05 Nov 2026', avatar: 'K' },
    { id: 3, name: 'Sarah Jones', event: 'Vacation Shoot', rating: 4, text: 'Great experience overall. The photographer knew the best spots in Ubud. The photos are stunning.', date: '20 Sep 2026', avatar: 'S' },
    { id: 4, name: 'Rian Pratama', event: 'Wisuda', rating: 5, text: 'Harga terjangkau tapi kualitas tidak murahan. Editannya rapi dan natural. Terima kasih LensaKita!', date: '01 Des 2026', avatar: 'R' },
    { id: 5, name: 'Dewi Lestari', event: 'Anniversary', rating: 5, text: 'Sangat ramah dan sabar menghadapi anak-anak kami yang aktif. Hasil fotonya hangat dan penuh cerita.', date: '15 Nov 2026', avatar: 'D' },
    { id: 6, name: 'Michael Tan', event: 'Pre-Wedding', rating: 5, text: 'The lighting and composition were perfect. Highly recommended for anyone looking for a professional photographer.', date: '10 Okt 2026', avatar: 'M' },
  ];

  // Filter logika sederhana
  const filteredReviews = reviews.filter(review => 
    filterRating === 'all' ? true : review.rating === parseInt(filterRating)
  );

  return (
    <div className="min-h-screen bg-[#EEEEEE] font-sans text-[#071B2B] pb-20">
      
      {/* 1. HERO SECTION (Background Gambar) */}
      <section className="relative py-16 sm:py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1920&auto=format&fit=crop" alt="Hero Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Kata Mereka Tentang LensaKita</h1>
          <p className="text-lg text-gray-200 mb-8 drop-shadow-md">Ribuan pelanggan telah mempercayakan momen spesial mereka kepada kami.</p>
          <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-sm">
            <div className="text-5xl font-bold font-serif">4.9</div>
            <div className="text-left">
              <div className="flex text-amber-400 text-xl mb-1">
                {[...Array(5)].map((_, i) => <Icon key={i} icon="mdi:star" />)}
              </div>
              <p className="text-sm font-semibold text-white">Berdasarkan 1.302 Ulasan</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER & KONTEN ULASAN */}
      <section className="max-w-7xl mx-auto px-6 pt-12">
        
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="font-bold text-2xl">Ulasan Terbaru</h2>
          <div className="flex gap-2">
            {['all', '5', '4'].map((star) => (
              <button 
                key={star}
                onClick={() => setFilterRating(star)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition border ${
                  filterRating === star 
                  ? 'bg-[#167D8D] text-white border-[#167D8D]' 
                  : 'bg-white text-gray-600 border-gray-300 hover:border-[#167D8D]'
                }`}
              >
                {star === 'all' ? 'Semua Bintang' : `${star} Bintang`}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Ulasan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition">
              
              <div>
                {/* Bintang */}
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} icon="mdi:star" className={i < review.rating ? "text-amber-400" : "text-gray-200"} />
                  ))}
                </div>
                
                {/* Teks Ulasan */}
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.text}"</p>
              </div>

              {/* Profil Pengulas */}
              <div className="flex items-center gap-3 border-t border-[#EEEEEE] pt-4 mt-auto">
                <div className="bg-[#071B2B] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-bold text-[#071B2B]">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.event} • {review.date}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Empty State (Jika filter tidak ada hasil) */}
        {filteredReviews.length === 0 && (
          <div className="text-center py-20">
            <Icon icon="mdi:comment-remove-outline" className="text-6xl text-gray-400 mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-gray-700">Belum ada ulasan untuk filter ini</h3>
            <p className="text-gray-500">Coba pilih filter bintang yang lain.</p>
          </div>
        )}

      </section>
    </div>
  );
}
