# SPEC.md - LensaKita (Platform Direktori Fotografer)

## 1. Ringkasan Eksekutif dan Tujuan Proyek
LensaKita adalah platform web direktori interaktif yang mempertemukan calon klien dengan fotografer profesional. Aplikasi dibangun sebagai proyek *frontend-only* dengan **React.js (Vite)** untuk UI, **Tailwind CSS** untuk styling, **@iconify/react** untuk ikon, dan **react-router-dom** untuk routing.

## 2. Target Pengguna dan Persona
**Klien** (calon pengantin, pemilik UMKM, mahasiswa) mencari berdasarkan spesialisasi, kota, gaya foto, anggaran, dan tanggal. **Admin** mengelola data dan ulasan lewat dashboard demo. Semua data disimulasikan secara lokal di browser pengguna.

## 3. Arsitektur dan Struktur Folder (implementasi saat ini)
```
src/
  components/   Navbar.jsx (global, react-router Link)
  pages/        Home.jsx (landing), Destination.jsx (eksplorasi)
  data/         (belum dipakai; data dummy inline di Destination.jsx)
  App.jsx       (BrowserRouter, Routes: / dan /destination)
  main.jsx      (entry point)
```
Catatan: fitur katalog, favorit, modal, dashboard, dan localStorage belum diimplementasikan. Aplikasi saat ini adalah landing page + halaman eksplorasi dengan data dummy.

### 3.1 Routing
- `/` → `Home` (landing page: hero background, features, stats, occasions, why, testimonials, CTA, FAQ, footer).
- `/destination` → `Destination` (hero background Bali, tabs Destinasi/Fotografer, grid kartu).
- Navbar global di `App.jsx` dengan `Link` dan `useLocation` untuk highlight menu aktif.

### 3.2 Palet Warna & Tipografi (implementasi)
- Warna: Dark Navy `#071B2B`, Teal `#167D8D`, Light Blue `#B9E4E8`, Light Gray `#EEEEEE`, Putih `#FFFFFF`.
- Font: Inter (sans) + Playfair Display (serif, via Google Fonts di `index.html`).
- Tailwind v3 dengan `tailwind.config.js` (colors: navy, teal, lightblue, lightgray; fontFamily sans/serif).

## 4. Model Data dan Penyimpanan (`localStorage`)
Setiap objek fotografer wajib memiliki properti berikut:

| Properti | Tipe | Keterangan |
|---|---|---|
| `id` | string | Unik (misal `ph-001`). |
| `nama` | string | Tidak boleh kosong. |
| `spesialisasi` | string | Wedding, Produk, Event, Wisuda, dll. |
| `kota` | string | Salah satu kota yang didukung. |
| `gaya` | string[] | Contoh: Candid, Cinematic, Klasik. |
| `hargaMulai` | number | ≥ 0. |
| `bio` | string | Maksimal 500 karakter. |
| `imageUrl` | string | **Wajib menggunakan URL Unsplash** (contoh: `https://source.unsplash.com/random/400x400/?photographer,portrait&sig=1`). |
| `galeri` | string[] | 3–5 URL Unsplash. |
| `whatsapp` | string | Format internasional tanpa `+`. |
| `paket` | object[] | `{ nama, harga, durasiJam, jumlahFoto, deskripsi }`. |
| `ulasan` | object[] | `{ id, nama, rating, komentar, tanggal, membantu }`. |

Key `localStorage`: `lensakita:data:v1`, `lensakita:favorites:v1`, `lensakita:bookings:v1`.
Aturan pemuatan: Baca data, jika kosong/rusak inisialisasi dari data dummy. Data dummy minimal **12 fotografer** dengan sebaran spesialisasi dan kota merata, serta URL Unsplash yang bervariasi.

## 5. Sistem Ikonografi (Iconify)
Gunakan `Icon` dari `@iconify/react` dengan set **Material Design Icons**. Ikon mewarisi `currentColor`; warna diatur lewat kelas Tailwind (misal: Teal `text-[#167D8D]` untuk brand, Dark Navy `text-[#071B2B]` untuk teks). Ikon dekoratif wajib `aria-hidden="true"`.

## 6. Pencarian, Filter, dan Sorting
Pencarian *real-time*, *case-insensitive*, dengan *debounce* 250 ms. Filter: Spesialisasi, Kota, Rentang Harga, Rating Minimum. Sorting: harga termurah/termahal, rating tertinggi. State dikelola lewat hook `useFilters`, hasil dihitung dengan `useMemo`. Filter disinkronkan ke query string URL.

## 7. Fitur Shortlist (Favorit)
Tombol hati dengan `aria-label` dinamis. Data tersimpan di `lensakita:favorites:v1`. Halaman **Favorit** menampilkan fotografer yang di-shortlist dengan Empty State ramah.

## 8. Modal Detail Portofolio
Dibuat dengan *React Portal*, `role="dialog"`, *focus trapping*, tutup dengan `Escape`. Isi: Galeri foto Unsplash, bio, paket harga, tombol WhatsApp (`encodeURIComponent`), dan form ulasan.

## 9. Ulasan dan Rating
Form ulasan: nama, rating (1–5), komentar (10–500 karakter). Ulasan baru disimpan ke `localStorage` dan rata-rata rating di katalog ter-update otomatis lewat `utils/rating.js`. Teks dirender dengan `{ulasan.komentar}` (anti-XSS).

## 10. Dashboard Admin (Demo Mini-CMS)
Label "Mode Demo — tanpa autentikasi". Statistik ringkas (Total Fotografer, Rata-rata Harga). Tabel data dengan aksi Tambah, Edit, Hapus. Validasi form (harga ≥ 0, rating 1–5, URL https).

## 11. Keamanan dan Mitigasi Risiko
- **Dilarang** memakai `dangerouslySetInnerHTML`.
- Validasi dan *trim* input sebelum masuk state dan `localStorage`.
- URL gambar hanya `https:` (termasuk URL Unsplash).
- Tautan eksternal memakai `rel="noopener noreferrer"`.

## 12. Kriteria Penerimaan (Acceptance Criteria)
1. Katalog menampilkan minimal 12 fotografer (foto Unsplash).
2. Filter Kota "Denpasar" hanya menampilkan fotografer Denpasar.
3. Mengklik hati mengubah ikon menjadi merah dan tersimpan setelah refresh.
4. Modal terbuka, fokus terperangkap, dan tertutup dengan Escape.
5. Menambah ulasan memperbarui rata-rata rating.
6. Dashboard dapat menghapus fotografer dan perubahan terlihat di katalog.
7. Input `<img src=x onerror=alert(1)>` tampil sebagai teks biasa.
8. Tidak ada scroll horizontal (320px–1920px).

## 13. Rencana Implementasi (Iterative Prompting)
Iterasi 1: Setup, Mock Data, PhotographerCard.
Iterasi 2: State Global, Filter, Sorting.
Iterasi 3: Favorit, Modal, WhatsApp.
Iterasi 4: Ulasan, Dashboard Admin.
Iterasi 5: Testing, Security, Build, Deployment.
