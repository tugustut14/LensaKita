import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function FAQ() {
  // State untuk melacak pertanyaan mana yang sedang terbuka
  const [openId, setOpenId] = useState(1);
  const [activeCategory, setActiveCategory] = useState('Semua');

  const categories = ['Semua', 'Umum', 'Pemesanan', 'Pembayaran', 'Fotografer'];

  // Data Dummy FAQ
  const faqs = [
    { id: 1, category: 'Umum', question: 'Apa itu LensaKita?', answer: 'LensaKita adalah platform web direktori yang menghubungkan Anda dengan fotografer profesional lokal di seluruh Indonesia dan mancanegara. Kami memudahkan Anda mencari, membandingkan portofolio, dan menghubungi fotografer yang tepat untuk momen spesial Anda.' },
    { id: 2, category: 'Umum', question: 'Apakah LensaKita melayani luar kota atau luar negeri?', answer: 'Tentu! Kami memiliki jaringan fotografer di lebih dari 900 destinasi di seluruh dunia. Anda bisa mencari fotografer berdasarkan kota atau negara tujuan Anda melalui halaman Destinasi.' },
    { id: 3, category: 'Pemesanan', question: 'Bagaimana cara memesan fotografer?', answer: 'Cukup cari fotografer yang Anda suka di halaman Destinasi, buka profil mereka, pilih paket yang sesuai, dan klik tombol "Hubungi via WhatsApp". Anda akan terhubung langsung dengan fotografer untuk diskusi lebih lanjut.' },
    { id: 4, category: 'Pemesanan', question: 'Berapa lama sebelumnya saya harus memesan?', answer: 'Kami menyarankan Anda memesan minimal 2-4 minggu sebelum acara untuk memastikan ketersediaan fotografer, terutama untuk acara besar seperti pernikahan di musim ramai.' },
    { id: 5, category: 'Pembayaran', question: 'Bagaimana sistem pembayarannya?', answer: 'Pembayaran dilakukan langsung kepada fotografer melalui kesepakatan bersama (biasanya DP 50% dan pelunasan setelah acara). LensaKita saat ini adalah platform direktori dan tidak memproses transaksi pembayaran secara langsung.' },
    { id: 6, category: 'Pembayaran', question: 'Apakah ada biaya tambahan dari LensaKita?', answer: 'Tidak. Harga yang tertera di profil fotografer adalah harga murni dari mereka. Kami tidak memungut biaya tersembunyi kepada klien.' },
    { id: 7, category: 'Fotografer', question: 'Bagaimana cara bergabung menjadi fotografer di LensaKita?', answer: 'Klik tombol "Gabung Jadi Fotografer" di bagian footer, isi formulir pendaftaran, dan tim kami akan meninjau portofolio Anda dalam 3-5 hari kerja.' },
    { id: 8, category: 'Fotografer', question: 'Apakah saya bisa mengatur jadwal ketersediaan saya sendiri?', answer: 'Ya. Setiap fotografer memiliki dashboard untuk mengatur tanggal ketersediaan, memperbarui portofolio, dan mengelola pesanan yang masuk.' },
  ];

  // Filter FAQ berdasarkan kategori
  const filteredFaqs = activeCategory === 'Semua' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  // Fungsi Toggle Accordion
  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#EEEEEE] font-sans text-[#071B2B] pb-20">
      
      {/* 1. HEADER SECTION */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1920&auto=format&fit=crop" alt="Hero Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Ada yang Bisa Kami Bantu?</h1>
          <p className="text-gray-200 text-lg drop-shadow-md">Temukan jawaban atas pertanyaan yang paling sering diajukan seputar layanan LensaKita.</p>
        </div>
      </section>

      {/* 2. KONTEN FAQ */}
      <section className="max-w-5xl mx-auto px-6 pt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* SIDEBAR KATEGORI */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sticky top-24">
            <h3 className="font-bold mb-4 px-2 text-lg">Kategori</h3>
            <div className="flex flex-col gap-1">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setOpenId(null); }}
                  className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                    activeCategory === cat 
                    ? 'bg-[#B9E4E8] text-[#167D8D] font-bold' 
                    : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* DAFTAR PERTANYAAN (ACCORDION) */}
        <div className="md:col-span-3 space-y-4">
          {filteredFaqs.map((faq) => (
            <div 
              key={faq.id} 
              className={`bg-white rounded-xl border transition-all duration-300 ${openId === faq.id ? 'border-[#167D8D] shadow-md' : 'border-gray-200 shadow-sm hover:border-[#167D8D]'}`}
            >
              <button 
                onClick={() => toggleAccordion(faq.id)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="font-bold text-lg text-[#071B2B] pr-4">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${openId === faq.id ? 'bg-[#167D8D] text-white' : 'bg-gray-100 text-gray-500'}`}>
                  <Icon icon={openId === faq.id ? "mdi:minus" : "mdi:plus"} className="text-xl" />
                </div>
              </button>
              
              {/* Jawaban dengan Animasi Slide */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-10 bg-white rounded-xl border border-gray-200">
              <p className="text-gray-500">Belum ada pertanyaan di kategori ini.</p>
            </div>
          )}
        </div>

      </section>

      {/* 3. CTA SECTION (Hubungi Kami) */}
      <section className="max-w-5xl mx-auto px-6 mt-16">
        <div className="bg-[#167D8D] rounded-2xl p-8 md:p-12 text-center text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-serif text-3xl font-bold mb-4">Masih Punya Pertanyaan?</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Tim customer service kami siap membantu Anda setiap hari dari jam 09.00 hingga 18.00 WITA.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-[#167D8D] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-sm flex items-center justify-center gap-2">
                <Icon icon="mdi:email-outline" className="text-xl" /> Kirim Email
              </button>
              <button className="bg-[#25D366] text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition shadow-sm flex items-center justify-center gap-2">
                <Icon icon="mdi:whatsapp" className="text-xl" /> Chat WhatsApp
              </button>
            </div>
          </div>
          {/* Ornamen Background */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        </div>
      </section>

    </div>
  );
}
