# TASKS.md - Rencana Iterasi LensaKita

## Aturan Umum Semua Milestone
- Kerjakan hanya berkas yang tercantum pada milestone aktif.
- Dilarang memakai `dangerouslySetInnerHTML`.
- Wajib menggunakan palet warna: Dark Navy (`#071B2B`), Teal (`#167D8D`), Light Blue (`#B9E4E8`), Light Gray (`#EEEEEE`), Putih (`#FFFFFF`).
- Format commit: `feat(milestone-N): deskripsi singkat`.

## Milestone 1: Scaffold dan Setup Proyek
**Tujuan:** Menginisialisasi proyek React (Vite) dengan Tailwind CSS, Iconify, dan React Router.
**Berkas:** `package.json`, `vite.config.js`, `tailwind.config.js`, `src/index.css`, `src/App.jsx`.
**Kriteria Penerimaan:**
- [ ] Ekstensi warna kustom (Dark Navy, Teal, Light Blue, Light Gray) ditambahkan ke `tailwind.config.js`.
- [ ] `@iconify/react` dan `react-router-dom` terinstal.
- [ ] Aplikasi berjalan tanpa error di `localhost:5173`.

## Milestone 2: Mock Data dan Kartu Katalog
**Tujuan:** Membuat data dummy dan grid katalog.
**Berkas:** `src/data/photographers.js`, `src/components/PhotographerCard.jsx`, `src/pages/Catalog.jsx`.
**Kriteria Penerimaan:**
- [ ] Minimal 12 objek fotografer dengan properti lengkap.
- [ ] Properti `imageUrl` dan `galeri` WAJIB menggunakan URL dari Unsplash (contoh format: `https://source.unsplash.com/random/400x400/?photographer,portrait&sig=1`).
- [ ] Kartu menampilkan foto, nama, kota, rating (ikon bintang berwarna Teal/Amber), dan harga mulai (menggunakan warna Dark Navy `#071B2B`).
- [ ] Grid responsif 1/2/3/4 kolom menggunakan palet warna yang ditentukan.

## Milestone 3: State Global dan Filter Pencarian
**Tujuan:** Implementasi logika filter dengan React State.
**Berkas:** `src/hooks/useFilters.js`, `src/components/FilterBar.jsx`, `src/pages/Catalog.jsx`.
**Kriteria Penerimaan:**
- [ ] Pencarian *real-time* dan filter (Spesialisasi, Kota) bekerja bersamaan.
- [ ] Tombol filter menggunakan warna Light Gray `#EEEEEE` sebagai border dan Teal `#167D8D` saat aktif.
- [ ] Empty State ditampilkan jika hasil kosong.

## Milestone 4: Modal Detail dan Favorit
**Tujuan:** Pop-up detail dan fitur simpan favorit.
**Berkas:** `src/components/ModalDetail.jsx`, `src/hooks/useFavorites.js`.
**Kriteria Penerimaan:**
- [ ] Modal menampilkan galeri foto Unsplash dan tombol WhatsApp (warna hijau).
- [ ] *Focus trapping* berfungsi, tertutup dengan `Escape`.
- [ ] Tombol Hati (`mdi:heart`) berfungsi dan tersimpan di `localStorage`.

## Milestone 5: Dashboard Admin
**Tujuan:** Halaman admin untuk CRUD.
**Berkas:** `src/pages/Dashboard.jsx`.
**Kriteria Penerimaan:**
- [ ] Form Tambah/Edit data memvalidasi URL Unsplash (harus `https://`).
- [ ] Tabel data menggunakan border Light Gray `#EEEEEE`.
- [ ] Tombol aksi (Edit/Hapus) menggunakan warna Teal dan Merah.

## Milestone 6: Routing & Halaman Eksplorasi (Sudah Dikerjakan)
**Tujuan:** Menggabungkan Home dan Destination dengan React Router.
**Berkas:** `src/App.jsx`, `src/components/Navbar.jsx`, `src/pages/Home.jsx`, `src/pages/Destination.jsx`.
**Kriteria Penerimaan:**
- [x] `react-router-dom` terinstal dan `BrowserRouter` di `App.jsx`.
- [x] Navbar global dengan `Link` dan highlight aktif (Teal).
- [x] Rute `/` (Home) dan `/destination` (Destination).
- [x] Hero Home dan Destination menggunakan background gambar + overlay.
- [x] Navbar dan footer diterjemahkan ke Bahasa Indonesia (menu: Beranda, Destinasi, Ulasan, Pembayaran, Blog, FAQ).
