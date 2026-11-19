# Catatan Proyek — LensaKita (Vibe Coding)

> Versi revisi 2.1 — dokumen payung proyek. Detail teknis ada di `SPEC.md`, detail visual di `UI-SPEC.md`, dan urutan kerja di `TASKS.md`.

## 1. Tujuan Utama
Menerapkan siklus pengembangan perangkat lunak secara end-to-end, mulai dari merumuskan ide, menyusun spesifikasi, memberi prompt yang terukur kepada AI Agent (OpenCode), review kode, pengujian, hingga commit dan deployment, menggunakan tech stack modern:

- **React.js (via Vite)** sebagai library UI.
- **Tailwind CSS** untuk styling berbasis utility class.
- **Iconify (`@iconify/react`)** untuk ikon SVG on-demand.
- **react-router-dom** untuk navigasi antarhalaman.

Tujuan sekunder: melatih kemampuan menulis prompt yang spesifik, memeriksa hasil kerja AI secara kritis, dan menjaga kualitas kode sejak awal.

## 2. Masalah yang Diselesaikan
Calon klien (pengantin, pemilik UMKM, mahasiswa wisuda, penyelenggara acara) sering kesulitan mencari fotografer karena portofolio tersebar, harga tidak transparan, sulit membandingkan, dan ulasan tidak terkumpul. LensaKita menjawab masalah tersebut dalam satu direktori yang rapi.

## 3. Peran
| Peran | Tanggung jawab |
|---|---|
| **Saya (Product Director)** | Arsitektur komponen, manajemen state, keamanan, review akhir, keputusan produk. |
| **AI (OpenCode)** | Eksekutor yang menulis kode sesuai prompt dan spesifikasi. |

Aturan kerja: Setiap iterasi harus menghasilkan komponen fungsional, modular, bebas technical debt. AI tidak boleh menambah fitur di luar iterasi. Setiap iterasi diakhiri dengan review manual dan commit.

## 4. Target Aplikasi dan Identitas Visual
**LensaKita** adalah platform web direktori interaktif untuk menemukan jasa fotografer.

**Halaman saat ini:**
- `Home` (`/`): landing page (hero background gambar, features, stats, occasions, why, testimonials, CTA, FAQ, footer).
- `Destination` (`/destination`): eksplorasi destinasi & fotografer (hero background Bali, tabs, grid kartu).

Navigasi menggunakan React Router (`react-router-dom`) dengan Navbar global.

**Desain & Visual (Wajib Dipatuhi):**
- **Logo:** Menggunakan inisial **"LS"** berbentuk kotak melengkung (rounded) dengan latar Teal dan teks putih, disandingkan dengan teks "LensaKita".
- **Palet Warna Utama:**
  - Dark Navy: `#071B2B` (untuk teks utama dan elemen gelap)
  - Teal: `#167D8D` (untuk warna brand, tombol utama, aksen)
  - Light Blue: `#B9E4E8` (untuk badge, highlight ringan)
  - Light Gray: `#EEEEEE` (untuk border, pemisah, latar sekunder)
  - White: `#FFFFFF` (untuk latar belakang utama)
- **Gambar:** Semua foto profil dan galeri dummy WAJIB menggunakan URL dari **Unsplash** (contoh: `https://source.unsplash.com/random/400x400/?photographer`).

## 5. Fitur MVP (Wajib)
1. Katalog fotografer dummy (minimal 12 data) dengan kartu responsif.
2. Pencarian nama + filter kota/spesialisasi + sorting.
3. Shortlist (favorit) yang disinkronkan ke `localStorage`.
4. Modal Detail Portofolio: galeri foto, bio, paket harga, tombol WhatsApp.
5. Ulasan dan rating bintang dengan rata-rata otomatis.
6. Dashboard Admin (demo) untuk CRUD fotografer.

## 6. Batasan Proyek
- Frontend-only: tanpa backend atau database eksternal.
- Penyimpanan persisten menggunakan `localStorage`.
- Tanpa sistem login multiuser (Dashboard Admin hanya demo).
- Pengiriman booking hanya simulasi: data disimpan lokal dan membuka WhatsApp.

## 7. Risiko yang Diawasi (AI-Safety)
| Risiko | Mitigasi |
|---|---|
| **`dangerouslySetInnerHTML`** | Dilarang total. Semua teks dinamis dirender lewat `{...}` biasa. |
| **Data `localStorage` rusak** | Bungkus `JSON.parse` dengan `try/catch`, validasi skema, fallback ke data dummy. |
| **State berantakan** | Gunakan Context + custom hooks; hindari state turunan yang disimpan ulang. |
| **Input tidak valid** | Validasi di satu modul `validators.js` (rating 1–5, harga ≥ 0, nama tidak kosong). |
| **URL gambar berbahaya** | Hanya izinkan protokol `https:`; tolak `javascript:` dan `data:`. |

## 8. Alur Kerja per Iterasi
1. Baca milestone aktif di `TASKS.md`.
2. Tulis prompt singkat merujuk `SPEC.md` dan `UI-SPEC.md`.
3. Biarkan OpenCode mengerjakan hanya berkas yang tercantum.
4. Jalankan `npm run dev` dan uji manual.
5. Review diff: cari `dangerouslySetInnerHTML`, state redundan, dan dependensi baru.
6. Commit dengan format `feat(milestone-N): deskripsi singkat`.

## 9. Template Prompt untuk OpenCode
```
Konteks: proyek LensaKita (React + Vite + Tailwind + Iconify).
Baca SPEC.md bagian X dan UI-SPEC.md bagian Y.
Tugas: kerjakan Milestone N di TASKS.md.
Batasan: hanya ubah berkas yang tercantum; jangan pakai dangerouslySetInnerHTML;
tidak menambah dependensi tanpa izin; semua teks UI berbahasa Indonesia.
Keluaran: ringkasan perubahan dan cara mengujinya.
```
