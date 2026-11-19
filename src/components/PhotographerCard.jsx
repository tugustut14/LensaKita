import { Icon } from '@iconify/react'

export default function PhotographerCard({ p }) {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden border border-lightgray hover:-translate-y-1 transition duration-300">
      <div className="relative">
        <img
          src={p.imageUrl}
          alt={p.nama}
          className="w-full h-72 object-cover"
          loading="lazy"
        />
        <button
          aria-label="Tambahkan ke favorit"
          className="absolute top-4 right-4 bg-white/80 p-2 rounded-full backdrop-blur-sm text-navy hover:text-red-500 transition-colors"
        >
          <Icon icon="mdi:heart-outline" width={22} />
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy mb-1">{p.nama}</h3>
        <p className="text-sm text-gray-500 mb-3">
          {p.spesialisasi} · {p.kota}
        </p>
        <div className="flex items-center gap-1 text-amber-400">
          <Icon icon="mdi:star" width={18} />
          <span className="text-navy font-semibold text-sm">{p.rating}</span>
        </div>
        <p className="mt-4 text-lg font-bold text-teal">
          Mulai Rp {p.hargaMulai.toLocaleString('id-ID')}
        </p>
      </div>
    </article>
  )
}
