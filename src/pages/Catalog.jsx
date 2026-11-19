import { useMemo, useState } from 'react'
import { Icon } from '@iconify/react'
import { photographers } from '../data/photographers'
import PhotographerCard from '../components/PhotographerCard'

const cities = ['Semua', 'Denpasar', 'Badung', 'Gianyar', 'Ubud']

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filterKota, setFilterKota] = useState('Semua')
  const [sortBy, setSortBy] = useState('rating')

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    let list = photographers.filter((p) => {
      const matchName = q === '' || p.nama.toLowerCase().includes(q)
      const matchKota = filterKota === 'Semua' || p.kota === filterKota
      return matchName && matchKota
    })
    if (sortBy === 'harga-asc') list = [...list].sort((a, b) => a.hargaMulai - b.hargaMulai)
    else if (sortBy === 'harga-desc') list = [...list].sort((a, b) => b.hargaMulai - a.hargaMulai)
    else list = [...list].sort((a, b) => b.rating - a.rating)
    return list
  }, [searchQuery, filterKota, sortBy])

  return (
    <div>
      {/* Hero */}
      <section className="bg-lightgray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto py-20 px-8 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-navy leading-tight mb-6">
              Temukan Fotografer Terbaik untuk Momen Spesialmu
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Bandingkan portofolio, harga, dan ketersediaan fotografer profesional dalam satu tempat.
            </p>
            <div className="flex bg-white rounded-md shadow-sm border border-gray-300 overflow-hidden max-w-lg">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Where are you traveling? e.g. Bali"
                className="flex-grow p-4 outline-none text-gray-700"
              />
              <button className="bg-teal text-white px-8 font-semibold hover:bg-opacity-90 transition-opacity">
                Cari
              </button>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
              <span>4.9 ⭐⭐⭐⭐⭐</span>
              <span>1,302 verified customer reviews</span>
            </div>
          </div>
          <div>
            <img
              src="https://source.unsplash.com/random/600x400/?photographer,camera"
              alt="Fotografer"
              className="rounded-2xl shadow-lg object-cover w-full h-80"
            />
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex flex-wrap gap-4 items-center">
          <select
            value={filterKota}
            onChange={(e) => setFilterKota(e.target.value)}
            className="border border-lightgray rounded-lg p-2 text-navy focus:ring-2 focus:ring-teal outline-none"
          >
            {cities.map((c) => (
              <option key={c} value={c}>{c === 'Semua' ? 'Semua Kota' : c}</option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-lightgray rounded-lg p-2 text-navy focus:ring-2 focus:ring-teal outline-none"
          >
            <option value="rating">Rating Tertinggi</option>
            <option value="harga-asc">Harga Termurah</option>
            <option value="harga-desc">Harga Termahal</option>
          </select>
        </div>
      </section>

      {/* Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto px-8 pb-12">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center py-16 text-navy opacity-70">
            <Icon icon="mdi:account-search" width={48} className="mx-auto mb-2" />
            <p>Fotografer tidak ditemukan. Coba kata kunci atau filter lain.</p>
          </div>
        ) : (
          filtered.map((p) => (
            <PhotographerCard key={p.id} p={p} />
          ))
        )}
      </section>
    </div>
  )
}
