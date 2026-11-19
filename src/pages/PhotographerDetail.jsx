import React from 'react';
import { Icon } from '@iconify/react';
import { useParams, useNavigate } from 'react-router-dom';
import { photographers } from '../data/photographers';

export default function PhotographerDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const p = photographers.find((x) => x.id === id);

  if (!p) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Fotografer tidak ditemukan.</p>
      </div>
    );
  }

  const waUrl = `https://wa.me/${p.whatsapp}?text=${encodeURIComponent(`Halo, saya tertarik dengan paket fotografer ${p.nama}`)}`;

  return (
    <div className="min-h-screen bg-[#EEEEEE] font-sans text-[#071B2B] pb-20">
      {/* HERO */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={p.imageUrl} alt={p.nama} className="w-full h-full object-cover" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop'; }} />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">{p.nama}</h1>
          <p className="text-gray-200 mb-4 drop-shadow-md">{p.spesialisasi} · {p.kota}</p>
          <div className="flex items-center justify-center gap-1 text-amber-400">
            <Icon icon="mdi:star" />
            <span className="text-white font-semibold">{p.rating}</span>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* KIRI: Bio & Galeri */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="font-serif text-2xl font-bold mb-3">Tentang</h2>
            <p className="text-gray-600 leading-relaxed">{p.bio}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.gaya.map((g) => (
                <span key={g} className="bg-[#B9E4E8] text-[#071B2B] text-xs px-3 py-1 rounded-full">{g}</span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="font-serif text-2xl font-bold mb-4">Portofolio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {p.galeri.map((img, i) => (
                <img key={i} src={img} alt={`Galeri ${i + 1}`} className="w-full h-40 object-cover rounded-lg" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400&auto=format&fit=crop'; }} />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h2 className="font-serif text-2xl font-bold mb-4">Ulasan</h2>
            <div className="space-y-4">
              {p.ulasan.map((u) => (
                <div key={u.id} className="border-b border-gray-100 pb-4 last:border-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-sm">{u.nama}</span>
                    <span className="text-amber-400 text-sm">{'★'.repeat(u.rating)}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{u.komentar}</p>
                  <p className="text-xs text-gray-400 mt-1">{u.tanggal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* KANAN: Paket & Aksi */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 sticky top-24">
            <h2 className="font-serif text-2xl font-bold mb-4">Paket Harga</h2>
            <div className="space-y-3">
              {p.paket.map((pk) => (
                <div key={pk.nama} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold">{pk.nama}</span>
                    <span className="text-teal font-bold">Rp {pk.harga.toLocaleString('id-ID')}</span>
                  </div>
                  <p className="text-xs text-gray-500">{pk.durasiJam} jam · {pk.jumlahFoto} foto</p>
                  <p className="text-xs text-gray-500 mt-1">{pk.deskripsi}</p>
                </div>
              ))}
            </div>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full bg-[#25D366] text-white font-bold py-3 rounded-lg hover:bg-opacity-90 transition shadow-md flex justify-center items-center gap-2"
            >
              <Icon icon="mdi:whatsapp" className="text-xl" />
              Hubungi via WhatsApp
            </a>
            <button
              onClick={() => navigate('/destination')}
              className="mt-3 w-full border border-[#167D8D] text-[#167D8D] font-bold py-3 rounded-lg hover:bg-[#167D8D] hover:text-white transition"
            >
              Kembali
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
