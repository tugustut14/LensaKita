import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/destination?q=${encodeURIComponent(searchQuery.trim())}`);
  };
  return (
    <div className="min-h-screen font-sans text-[#071B2B]">
      
      {/* 1. HERO SECTION (Background Gambar) */}
      <section className="relative py-16 sm:py-24 lg:py-32 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1920&auto=format&fit=crop" 
            alt="Wedding Photography" 
            className="w-full h-full object-cover object-center"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop'; }}
          />
          {/* Overlay Gelap */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Konten Hero */}
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold leading-[1.15] mb-6 text-white drop-shadow-lg">
              Sewa Fotografer Lokal di 1.000+ Destinasi Menakjubkan dari Bali hingga Eropa
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-lg drop-shadow-md">
              Pesan sesi foto lamaran, keluarga, atau solo di mana saja. Ceritakan visimu, kami yang urus sisanya.
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex flex-wrap sm:flex-nowrap bg-white rounded-md shadow-2xl overflow-hidden max-w-lg mb-6">
              <div className="flex items-center pl-4 text-gray-400">
                <Icon icon="mdi:map-marker-outline" className="text-xl" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Anda traveling ke mana? misal: Bali"
                className="flex-grow p-4 outline-none text-gray-700 placeholder-gray-400"
              />
              <button type="submit" className="bg-[#167D8D] hover:bg-opacity-90 text-white px-4 sm:px-8 font-semibold flex items-center gap-2 transition">
                <span className="hidden sm:inline">Cari Fotografer</span>
                <Icon icon="mdi:magnify" className="text-lg" />
              </button>
            </form>
            
            {/* Social Proof */}
            <div className="flex items-center gap-6 text-sm font-medium text-white">
              <div className="flex items-center gap-2">
                <span className="font-bold">4.9</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => <Icon key={i} icon="mdi:star" />)}
                </div>
                <span className="text-gray-300">1.302 ulasan terverifikasi</span>
              </div>
              <div className="flex items-center gap-1 text-gray-300">
                <Icon icon="mdi:check-decagram" className="text-[#B9E4E8]" />
                16.000+ sesi foto diselesaikan
              </div>
            </div>
          </div>
          
          {/* Gambar Bertumpuk (Disembunyikan di Mobile) */}
          <div className="relative h-[500px] hidden lg:block">
            <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop" alt="Wedding" className="absolute top-10 left-0 w-3/5 h-80 object-cover rounded-lg shadow-xl transform -rotate-3 border-4 border-white" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop'; }} />
            <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=600&auto=format&fit=crop" alt="Couple" className="absolute top-0 right-0 w-1/2 h-64 object-cover rounded-lg shadow-lg transform rotate-6 z-10" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop'; }} />
            <img src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=600&auto=format&fit=crop" alt="Portrait" className="absolute bottom-0 right-10 w-3/5 h-80 object-cover rounded-lg shadow-2xl z-20 border-4 border-white" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop'; }} />
            
            {/* Card Testimoni Melayang */}
            <div className="absolute bottom-16 -left-8 bg-white p-4 rounded-lg shadow-xl z-30 w-64 border border-gray-100">
              <div className="flex text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => <Icon key={i} icon="mdi:star" />)}
              </div>
              <p className="text-xs text-gray-600 italic mb-2">"Komunikasi yang hebat, berhasil menemukan fotografer luar biasa..."</p>
              <p className="text-[10px] font-bold text-gray-800">— Isabel Mcneil, pelanggan</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURES SECTION (Putih) */}
      <section className="py-20 bg-white">
        <h2 className="font-serif text-3xl font-bold text-center mb-16 text-[#071B2B]">Ini yang Anda Dapatkan di Setiap Pemesanan</h2>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {[
            { icon: 'mdi:camera-outline', title: 'Pendekatan Personal' },
            { icon: 'mdi:star-circle-outline', title: 'Profesional Pilihan' },
            { icon: 'mdi:clipboard-text-outline', title: 'Opsi Permintaan Khusus' },
            { icon: 'mdi:map-marker-radius-outline', title: 'Rekomendasi Spot Foto' },
            { icon: 'mdi:cash-refund', title: 'Garansi Uang Kembali 100%' },
            { icon: 'mdi:diamond-stone', title: 'Sesi Privat' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-24 h-24 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center mb-4 hover:shadow-md transition">
                <Icon icon={item.icon} className="text-4xl text-gray-400" />
              </div>
              <p className="text-sm text-gray-600 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-[#167D8D] text-white px-8 py-3 rounded-md font-semibold shadow-md hover:bg-opacity-90 transition">
            Temukan Fotografer Terbaik
          </button>
        </div>
      </section>

      {/* 3. STATS SECTION (Abu-abu) */}
      <section className="py-16 bg-[#EEEEEE]">
        <h2 className="font-serif text-3xl font-bold text-center mb-12 text-[#071B2B]">LensaKita di Seluruh Dunia</h2>
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 text-center">
          <div><p className="text-5xl font-light text-[#071B2B] mb-2">1.182</p><p className="text-sm text-gray-600 uppercase tracking-wide">Fotografer</p></div>
          <div><p className="text-5xl font-light text-[#071B2B] mb-2">1.081</p><p className="text-sm text-gray-600 uppercase tracking-wide">Destinasi</p></div>
          <div><p className="text-5xl font-light text-[#071B2B] mb-2">34.675</p><p className="text-sm text-gray-600 uppercase tracking-wide">Foto per Bulan</p></div>
        </div>
      </section>

      {/* 4. OCCASIONS SECTION (Putih) */}
      <section className="py-20 bg-white">
        <h2 className="font-serif text-3xl font-bold text-center mb-12 text-[#071B2B]">Momen Sesuai Kebutuhan Foto</h2>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { title: 'Lamaran Rahasia', img: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=400&auto=format&fit=crop' },
            { title: 'Pernikahan', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400&auto=format&fit=crop' },
            { title: 'Traveling Solo', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop' },
            { title: 'Keluarga', img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=400&auto=format&fit=crop' },
            { title: 'Anniversary', img: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=400&auto=format&fit=crop' },
          ].map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="overflow-hidden rounded-md mb-3">
                <img src={item.img} alt={item.title} className="w-full h-64 object-cover group-hover:scale-105 transition duration-500" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop'; }} />
              </div>
              <p className="text-center font-medium text-gray-700">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="border border-[#167D8D] text-[#167D8D] px-8 py-3 rounded-md font-semibold hover:bg-[#167D8D] hover:text-white transition">
            Cari Fotografer Anda
          </button>
        </div>
      </section>

      {/* 5. WHY SECTION (Abu-abu) */}
      <section className="py-20 bg-[#EEEEEE]">
        <h2 className="font-serif text-3xl font-bold text-center mb-16 text-[#071B2B]">Mengapa LensaKita</h2>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-gray-600">
          <div className="flex flex-col items-center"><Icon icon="mdi:cards-outline" className="text-5xl mb-4 text-gray-400" /><p className="text-sm">Layanan pelanggan dan pengalaman terbaik</p></div>
          <div className="flex flex-col items-center"><Icon icon="mdi:calendar-month-outline" className="text-5xl mb-4 text-gray-400" /><p className="text-sm">Sesi foto dalam waktu singkat</p></div>
          <div className="flex flex-col items-center"><Icon icon="mdi:map-outline" className="text-5xl mb-4 text-gray-400" /><p className="text-sm">Destinasi terlengkap di pasaran</p></div>
          <div className="flex flex-col items-center"><Icon icon="mdi:star-outline" className="text-5xl mb-4 text-gray-400" /><p className="text-sm">Umpan balik pelanggan sangat positif</p></div>
        </div>
      </section>

      {/* 6. TESTIMONIALS (Putih) */}
      <section className="py-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold mb-2 text-[#071B2B]">Testimoni Pelanggan</h2>
          <div className="flex items-center justify-center gap-2">
            <span className="font-bold">4.9</span>
            <div className="flex text-amber-400">{[...Array(5)].map((_, i) => <Icon key={i} icon="mdi:star" />)}</div>
            <span className="text-sm text-gray-600">1.302 ulasan pelanggan terverifikasi</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { text: "Peter dan istrinya sangat ramah dan akomodatif terhadap kebutuhan kami. 100% direkomendasikan!", name: "Shauna Bowman" },
            { text: "Kami memiliki pengalaman luar biasa! Pavel, fotografer kami di Dresden sangat fantastis dan fleksibel.", name: "Gerald Elcan" },
            { text: "Melakukan pemotretan pertunangan dengan Sofia dan dia sangat bagus! Dia mengarahkan kami untuk mendapatkan cahaya terbaik.", name: "Kristina Weltzin" }
          ].map((review, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="flex text-amber-400 mb-4">{[...Array(5)].map((_, i) => <Icon key={i} icon="mdi:star" />)}</div>
                <p className="text-sm text-gray-600 mb-6 italic">"{review.text}"</p>
              </div>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className="bg-[#B9E4E8] w-10 h-10 rounded-full flex items-center justify-center text-[#071B2B] font-bold">{review.name.charAt(0)}</div>
                <div>
                  <p className="text-sm font-bold text-[#071B2B]">{review.name}</p>
                  <p className="text-[10px] text-gray-500">Pelanggan Terverifikasi</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA BANNER (Light Blue) */}
      <section className="bg-[#B9E4E8] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="font-serif italic text-xl mb-2 text-[#071B2B]">Mencari hadiah yang penuh cerita?</p>
            <h2 className="font-serif text-4xl font-bold leading-tight text-[#071B2B]">Lewati hadiah biasa!</h2>
          </div>
          <div>
            <p className="text-gray-700 mb-6">Berikan sesi foto bulan madu, anniversary, atau keluarga di mana saja — berlaku di 900+ destinasi.</p>
            <button className="bg-[#167D8D] text-white px-8 py-3 rounded-md font-semibold shadow-md hover:bg-opacity-90 transition">Dapatkan Voucher Hadiah</button>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION (Putih) */}
      <section className="py-20 bg-white max-w-3xl mx-auto px-6">
        <p className="text-center text-sm text-gray-500 mb-8">Dan jika Anda hanya butuh satu jam, platform saudara kami, Smiler, menyediakan fotografer lokal per jam di 60 kota.</p>
        <div className="border-t border-[#EEEEEE]">
          {[
            "Siapa itu fotografer liburan?",
            "Mengapa menyewa fotografer liburan?",
            "Bagaimana cara memesan sesi foto?",
            "Berapa biaya sewa fotografer?"
          ].map((faq, idx) => (
            <div key={idx} className="border-b border-[#EEEEEE] py-5 flex justify-between items-center cursor-pointer group">
              <p className="font-semibold text-lg">{faq}</p>
              <Icon icon="mdi:plus" className="text-2xl text-[#167D8D] group-hover:rotate-90 transition-transform" />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
