# SPEC.md - LensaKita (Platform Direktori Fotografer)

## 1. Ringkasan Eksekutif dan Tujuan Proyek
LensaKita adalah platform web direktori interaktif yang mempertemukan calon klien dengan fotografer profesional. Aplikasi dibangun sebagai proyek *frontend-only* dengan **React.js (Vite)** untuk UI, **Tailwind CSS** untuk styling, **@iconify/react** untuk ikon, dan **react-router-dom** untuk routing (SPA).

## 2. Target Pengguna dan Persona
**Klien** (calon pengantin, pemilik UMKM, mahasiswa) mencari berdasarkan spesialisasi, kota, gaya foto, anggaran. **Admin** (rencana) mengelola data lewat dashboard demo. Semua data saat ini disimulasikan secara lokal (dummy inline).

## 3. Arsitektur dan Struktur Folder (implementasi saat ini)
```
src/
  components/   Navbar.jsx (global), Footer.jsx (global), PhotographerCard.jsx, FloatingWhatsApp.jsx (tidak dipakai)
  pages/        Home.jsx, Destination.jsx, Review.jsx, Blogs.jsx, FAQ.jsx, Catalog.jsx (tidak dipakai di router)
  data/         photographers.js (seed dummy, belum dipakai)
  App.jsx       (BrowserRouter, Routes: /, /destination, /review, /blogs, /faq)
  main.jsx      (entry point)
```
Catatan: fitur katalog lengkap, favorit (localStorage), modal detail, dashboard admin, dan data persisten belum diimplementasikan. Aplikasi saat ini adalah landing page + halaman eksplorasi + review + blog + FAQ.

### 3.1 Routing
- `/` → `Home`
- `/destination` → `Destination`
- `/destination/:city` → `DestinationDetail`
- `/review` → `Review`
- `/blogs` → `Blogs`
- `/faq` → `FAQ`

Navbar dan Footer global di `App.jsx`. Menu: Beranda, Destinasi, Ulasan, Blog, FAQ (label Indonesia). Menu aktif berwarna Teal.

### 3.2 Palet Warna & Tipografi (implementasi)
- Warna: Dark Navy `#071B2B`, Teal `#167D8D`, Light Blue `#B9E4E8`, Light Gray `#EEEEEE`, Putih `#FFFFFF`.
- Tailwind v3 dengan `tailwind.config.js` (colors: navy, teal, lightblue, lightgray; fontFamily sans/serif).
- Font: Inter (sans) + Playfair Display (serif) via Google Fonts di `index.html`.

## 4. Model Data (rencana, belum diimplementasikan)
Setiap objek fotografer wajib memiliki: `id`, `nama`, `spesialisasi`, `kota`, `gaya`, `hargaMulai`, `bio`, `imageUrl`, `galeri`, `whatsapp`, `paket`, `ulasan`. Data dummy minimal 12 fotografer dengan URL Unsplash. Penyimpanan rencana: `localStorage` key `lensakita:data:v1`.

## 5. Sistem Ikonografi (Iconify)
Gunakan `Icon` dari `@iconify/react` dengan set **Material Design Icons**. Ikon mewarisi `currentColor`. Ikon dekoratif wajib `aria-hidden="true"`.

## 6. Keamanan dan Mitigasi Risiko
- **Dilarang** memakai `dangerouslySetInnerHTML`.
- Validasi dan *trim* input sebelum masuk state dan `localStorage`.
- URL gambar hanya `https:`.
- Tautan eksternal memakai `rel="noopener noreferrer"`.

## 7. Kriteria Penerimaan (Acceptance Criteria) — status
1. Landing page (Home) tampil dengan hero background gambar, section selang-seling. ✅
2. Navigasi antar halaman (Home, Destination, Review, Blogs, FAQ) tanpa refresh. ✅
3. Menu aktif berwarna Teal. ✅
4. Hero setiap halaman menggunakan background image + overlay. ✅
5. Footer global muncul di semua halaman. ✅
6. Tidak ada scroll horizontal (320px–1920px). (perlu verifikasi manual)
7. Katalog, favorit, modal, dashboard, dan localStorage: belum diimplementasikan.

## 8. Rencana Implementasi (Iterative Prompting)
- Iterasi 1: Setup, Mock Data, PhotographerCard. (sebagian)
- Iterasi 2: State Global, Filter, Sorting. (belum)
- Iterasi 3: Favorit, Modal, WhatsApp. (belum)
- Iterasi 4: Ulasan, Dashboard Admin. (belum, hanya halaman Review statis)
- Iterasi 5: Testing, Security, Build, Deployment. (build & deploy done)