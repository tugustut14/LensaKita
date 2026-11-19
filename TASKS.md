# TASKS.md - Rencana Iterasi LensaKita

## Aturan Umum Semua Milestone
- Kerjakan hanya berkas yang tercantum pada milestone aktif.
- Dilarang memakai `dangerouslySetInnerHTML`.
- Wajib menggunakan palet warna: Dark Navy (`#071B2B`), Teal (`#167D8D`), Light Blue (`#B9E4E8`), Light Gray (`#EEEEEE`), Putih (`#FFFFFF`).
- Format commit: `feat(milestone-N): deskripsi singkat`.

## Milestone 1: Scaffold dan Setup Proyek ✅
- Inisialisasi Vite + React, Tailwind CSS, Iconify, react-router-dom.
- Konfigurasi warna kustom di `tailwind.config.js`.
- Navbar dengan logo "LensaKita" font serif.

## Milestone 2: Landing Page (Home) ✅
- Hero dengan background gambar + overlay gelap, search bar, social proof.
- Section selang-seling: Features, Stats, Occasions, Why, Testimonials, CTA, FAQ.
- Gambar bertumpuk di hero (desktop).

## Milestone 3: Halaman Destination ✅
- Hero background Bali + overlay, search bar membulat.
- Tabs Destinasi/Fotografer, grid kartu, "Muat Lebih Banyak".
- Kartu destinasi kini `Link` ke `/destination/:city`.

## Milestone 3b: Halaman DestinationDetail ✅
- Hero background kota + overlay.
- Daftar fotografer per kota, sorting, empty state, tombol kembali.

## Milestone 4: Halaman Review ✅
- Hero background kamera, rating overall, filter bintang, grid ulasan, avatar inisial.

## Milestone 5: Halaman Blogs ✅
- Header background lensa, filter kategori, featured post, grid artikel, newsletter navy.

## Milestone 6: Halaman FAQ ✅
- Header background diskusi, sidebar kategori, accordion, CTA kontak (Email/WhatsApp).

## Milestone 7: Routing & Navbar/Footer Global ✅
- `App.jsx` dengan `BrowserRouter`, Routes: /, /destination, /review, /blogs, /faq.
- Navbar global dengan `Link` dan highlight aktif (Teal), label Indonesia.
- Footer global (Navy, 4 kolom, hak cipta otomatis).

## Milestone 8: Hero Background Semua Halaman ✅
- Semua halaman (Home, Destination, Review, Blogs, FAQ) menggunakan background image + overlay.

## Milestone 9: Integrasi Katalog & Data (Belum)
- `src/data/photographers.js`, `PhotographerCard.jsx`, `Catalog.jsx` ada tapi belum terhubung ke router.
- Rencana: state global, filter, sorting, favorit (localStorage), modal detail, dashboard admin.

## Milestone 10: Deployment ✅
- Repositori GitHub: `tugustut14/LensaKita`, branch `main`.
- File `vercel.json` untuk SPA routing.
- Deploy ke Vercel.