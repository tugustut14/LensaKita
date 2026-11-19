const cities = ['Denpasar', 'Badung', 'Gianyar', 'Ubud']
const specs = ['Wedding', 'Produk', 'Event', 'Wisuda']

const names = [
  'Budi Santoso', 'Ayu Lestari', 'Made Wira', 'Sari Dewi',
  'Rian Pratama', 'Dewi Anggraini', 'Kadek Adi', 'Putu Sari',
  'Agus Wijaya', 'Nia Permata', 'Komang Arya', 'Luh Putri',
]

export const photographers = names.map((nama, i) => ({
  id: `ph-${String(i + 1).padStart(3, '0')}`,
  nama,
  spesialisasi: specs[i % specs.length],
  kota: cities[i % cities.length],
  rating: +(4 + (i % 5) * 0.2).toFixed(1),
  hargaMulai: 1500000 + (i % 6) * 500000,
  imageUrl: `https://source.unsplash.com/random/400x400/?photographer,portrait&sig=${i + 1}`,
}))
