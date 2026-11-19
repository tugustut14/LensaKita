# Catatan Proyek — LensaKita (Vibe Coding)

> Dokumen payung proyek. Detail teknis: `SPEC.md`. Detail visual: `UI-SPEC.md`. Urutan kerja: `TASKS.md`.

## 1. Tujuan Utama
Menerapkan siklus pengembangan perangkat lunak secara end-to-end menggunakan tech stack modern:
- **React.js (Vite)** sebagai library UI.
- **Tailwind CSS** untuk styling berbasis utility class.
- **Iconify (`@iconify/react`)** untuk ikon SVG on-demand.
- **react-router-dom** untuk navigasi antarhalaman (SPA).

## 2. Peran
| Peran | Tanggung jawab |
|---|---|
| **Product Director** | Arsitektur komponen, manajemen state, keamanan, review akhir. |
| **AI (OpenCode)** | Eksekutor yang menulis kode sesuai prompt dan spesifikasi. |

Aturan: setiap iterasi menghasilkan komponen fungsional, modular, bebas technical debt. Setiap iterasi diakhiri dengan review manual dan commit.

## 3. Target Aplikasi dan Identitas Visual
**LensaKita** adalah platform web direktori interaktif untuk menemukan jasa fotografer profesional.

**Halaman yang sudah dibangun:**
- `Home` (`/`): landing page — hero background gambar, features, stats, occasions, why, testimonials, CTA banner, FAQ.
- `Destination` (`/destination`): eksplorasi destinasi & fotografer (hero background Bali, tabs, grid kartu).
- `Review` (`/review`): testimoni pelanggan dengan filter bintang.
- `Blogs` (`/blogs`): magazine fotografi (featured post, filter kategori, newsletter).
- `FAQ` (`/faq`): accordion dengan kategori sidebar + CTA kontak.

**Desain & Visual (Wajib):**
- Logo: teks "LensaKita" font serif (tanpa kotak "LS").
- Palet: Dark Navy `#071B2B`, Teal `#167D8D`, Light Blue `#B9E4E8`, Light Gray `#EEEEEE`, Putih `#FFFFFF`.
- Font: Inter (sans) + Playfair Display (serif) via Google Fonts.
- Gambar: Unsplash.

## 4. Batasan Proyek
- Frontend-only: tanpa backend atau database eksternal.
- Data saat ini adalah dummy inline (belum ada localStorage/CRUD nyata).
- Tanpa sistem login multiuser.

## 5. Risiko yang Diawasi (AI-Safety)
| Risiko | Mitigasi |
|---|---|
| **`dangerouslySetInnerHTML`** | Dilarang total. Semua teks dinamis dirender lewat `{...}`. |
| **State berantakan** | Gunakan hooks secara efisien; hindari state redundan. |
| **Input tidak valid** | Validasi sebelum disimpan (rating 1–5, harga ≥ 0, nama tidak kosong). |
| **URL gambar berbahaya** | Hanya izinkan protokol `https:`. |

## 6. Alur Kerja per Iterasi
1. Baca milestone aktif di `TASKS.md`.
2. Tulis prompt singkat merujuk `SPEC.md` dan `UI-SPEC.md`.
3. Biarkan OpenCode mengerjakan hanya berkas yang tercantum.
4. Jalankan `npm run dev` dan uji manual.
5. Review diff, lalu commit dengan format `feat(milestone-N): deskripsi singkat`.

## 7. Deployment
- Repositori: `https://github.com/tugustut14/LensaKita`
- Branch: `main`
- Vercel: file `vercel.json` dengan rewrite SPA agar routing tidak 404.