import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = ['Semua', 'Tips Fotografi', 'Inspirasi', 'Berita', 'Tutorial'];

  // Data Dummy Artikel
  const articles = [
    {
      id: 1,
      title: '5 Pose Pre-Wedding Anti Mainstream di Bali',
      category: 'Tips Fotografi',
      excerpt: 'Bosan dengan pose yang itu-itu saja? Coba 5 ide pose pre-wedding ini agar hasil fotomu terlihat lebih natural dan cinematic.',
      image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800&auto=format&fit=crop',
      date: '12 Nov 2026',
      author: 'Budi Santoso',
      featured: true
    },
    {
      id: 2,
      title: 'Cara Memilih Fotografer Produk untuk UMKM',
      category: 'Tips Fotografi',
      excerpt: 'Foto produk yang bagus bisa meningkatkan penjualan hingga 30%. Ini panduan memilih fotografer yang tepat untuk bisnis Anda.',
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop',
      date: '10 Nov 2026',
      author: 'Siti Rahma',
      featured: false
    },
    {
      id: 3,
      title: 'Tren Fotografi Tahun 2027: Apa yang Akan Populer?',
      category: 'Inspirasi',
      excerpt: 'Dari gaya vintage hingga AI editing, mari kita intip tren fotografi yang akan mendominasi tahun depan.',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop',
      date: '08 Nov 2026',
      author: 'Andi Wijaya',
      featured: false
    },
    {
      id: 4,
      title: 'Pentingnya Lighting dalam Sesi Foto Indoor',
      category: 'Tutorial',
      excerpt: 'Jangan biarkan hasil fotomu gelap dan kusam. Pelajari dasar-dasar pencahayaan untuk sesi foto di dalam ruangan.',
      image: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?q=80&w=800&auto=format&fit=crop',
      date: '05 Nov 2026',
      author: 'Dewi Lestari',
      featured: false
    },
    {
      id: 5,
      title: 'LensaKita Jangkau 1000+ Fotografer di Seluruh Indonesia',
      category: 'Berita',
      excerpt: 'Pencapaian baru! Kini Anda bisa menemukan fotografer lokal di lebih dari 50 kota di Indonesia.',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
      date: '01 Nov 2026',
      author: 'Tim Redaksi',
      featured: false
    }
  ];

  const filteredArticles = activeCategory === 'Semua' 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-white font-sans text-[#071B2B]">
      
      {/* HEADER BLOG */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?q=80&w=1920&auto=format&fit=crop" alt="Hero Background" className="w-full h-full object-cover" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop'; }} />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Blog & Inspirasi</h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto drop-shadow-md">Temukan tips fotografi, inspirasi gaya, dan berita terbaru seputar dunia fotografi dari para ahli.</p>
        </div>
      </section>

      {/* FILTER KATEGORI */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition border ${
                activeCategory === cat 
                ? 'bg-[#167D8D] text-white border-[#167D8D]' 
                : 'bg-white text-gray-600 border-gray-300 hover:border-[#167D8D]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* KONTEN BLOG */}
        <div className="space-y-12">
          
          {/* FEATURED ARTICLE (Hanya muncul jika filter 'Semua') */}
          {activeCategory === 'Semua' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#B9E4E8]/30 p-6 rounded-2xl border border-[#B9E4E8]">
              <div className="rounded-xl overflow-hidden h-80 lg:h-[400px]">
                <img src={articles[0].image} alt={articles[0].title} className="w-full h-full object-cover hover:scale-105 transition duration-500" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop'; }} />
              </div>
              <div>
                <span className="bg-[#167D8D] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">{articles[0].category}</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight hover:text-[#167D8D] cursor-pointer transition">{articles[0].title}</h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{articles[0].excerpt}</p>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span className="font-semibold text-[#071B2B]">{articles[0].author}</span>
                  <span>•</span>
                  <span>{articles[0].date}</span>
                </div>
              </div>
            </div>
          )}

          {/* GRID ARTIKEL */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.filter(a => activeCategory !== 'Semua' || a.id !== 1).map((article) => (
              <div key={article.id} className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition">
                <div className="h-60 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop'; }} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-[#167D8D] uppercase tracking-wider">{article.category}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-[#167D8D] transition line-clamp-2">{article.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-400 border-t border-gray-100 pt-4">
                    <span className="font-medium text-gray-600">{article.author}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol Muat Lebih Banyak */}
          <div className="text-center pt-8">
            <button className="border border-[#167D8D] text-[#167D8D] px-8 py-3 rounded-full font-semibold hover:bg-[#167D8D] hover:text-white transition">
              Muat Lebih Banyak
            </button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="bg-[#071B2B] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Jangan Lewatkan Update Terbaru</h2>
          <p className="text-gray-300 mb-8">Berlangganan newsletter kami untuk mendapatkan tips fotografi dan promo menarik langsung di email Anda.</p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
            <input type="email" placeholder="Masukkan alamat email Anda" className="flex-grow px-6 py-3 rounded-lg outline-none text-gray-800" />
            <button className="bg-[#167D8D] text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition">Berlangganan</button>
          </div>
        </div>
      </section>
    </div>
  );
}
