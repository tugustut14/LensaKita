const cities = ['Denpasar', 'Badung', 'Gianyar', 'Ubud']
const specs = ['Wedding', 'Produk', 'Event', 'Wisuda']
const styles = ['Candid', 'Cinematic', 'Klasik', 'Editorial']

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
  gaya: [styles[i % styles.length], styles[(i + 1) % styles.length]],
  rating: +(4 + (i % 5) * 0.2).toFixed(1),
  hargaMulai: 1500000 + (i % 6) * 500000,
  bio: `${nama} adalah fotografer profesional spesialis ${specs[i % specs.length]} berbasis di ${cities[i % cities.length]}. Berpengalaman lebih dari ${3 + (i % 5)} tahun, siap mengabadikan momen spesial Anda.`,
  imageUrl: `https://source.unsplash.com/random/400x400/?photographer,portrait&sig=${i + 1}`,
  galeri: [
    `https://source.unsplash.com/random/600x400/?photography,${specs[i % specs.length].toLowerCase()}&sig=${i + 10}`,
    `https://source.unsplash.com/random/600x400/?photography,${specs[i % specs.length].toLowerCase()}&sig=${i + 20}`,
    `https://source.unsplash.com/random/600x400/?photography,${specs[i % specs.length].toLowerCase()}&sig=${i + 30}`,
  ],
  whatsapp: '6281234567890',
  paket: [
    { nama: 'Silver', harga: 1500000 + (i % 6) * 500000, durasiJam: 2, jumlahFoto: 20, deskripsi: 'Sesi foto 2 jam, 20 foto edit.' },
    { nama: 'Gold', harga: 2500000 + (i % 6) * 500000, durasiJam: 4, jumlahFoto: 40, deskripsi: 'Sesi foto 4 jam, 40 foto edit, cetak 10R.' },
    { nama: 'Platinum', harga: 4000000 + (i % 6) * 500000, durasiJam: 6, jumlahFoto: 60, deskripsi: 'Sesi foto 6 jam, 60 foto edit, album premium.' },
  ],
  ulasan: [
    { id: `u-${i}-1`, nama: 'Pelanggan A', rating: 5, komentar: 'Hasil fotonya sangat memuaskan!', tanggal: '2026-10-12', membantu: 3 },
    { id: `u-${i}-2`, nama: 'Pelanggan B', rating: 4, komentar: 'Profesional dan tepat waktu.', tanggal: '2026-11-01', membantu: 1 },
  ],
}))
