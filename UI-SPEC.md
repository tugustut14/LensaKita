# UI-SPEC.md - Desain Antarmuka LensaKita

## 1. Identitas Visual dan Sistem Desain
LensaKita memakai gaya bersih dan modern. Foto fotografer dari Unsplash adalah bintang utama.

**Palet Warna (WAJIB DIIKUTI):**
| Peran | Kode Hex | Tailwind |
|---|---|---|
| Brand / Tombol Utama | `#167D8D` | `bg-teal text-white` |
| Teks Utama (Dark) | `#071B2B` | `text-navy` |
| Latar Belakang | `#FFFFFF` | `bg-white` |
| Border / Pemisah | `#EEEEEE` | `border-lightgray` |
| Badge / Highlight | `#B9E4E8` | `bg-lightblue` |
| Footer (Navy Gelap) | `#071B2B` | `bg-navy text-white` |

**Tipografi**
- Font: Inter (sans) + Playfair Display (serif) via Google Fonts.
- Judul hero: `font-serif text-5xl lg:text-6xl font-bold text-white drop-shadow-lg`.
- Judul section: `font-serif text-3xl font-bold text-navy`.
- Teks isi: `text-base text-navy opacity-80`.

## 2. Logo
- Hanya teks "LensaKita" font serif tebal warna Navy (tanpa kotak "LS"), baik di Navbar maupun Footer.

## 3. Navigasi dan Header (Navbar)
- Sticky: `sticky top-0 z-50 bg-white border-b border-lightgray`.
- Menu aktif: `text-teal font-semibold`.
- Tombol CTA: `bg-teal text-white px-6 py-2.5 rounded-md font-semibold`.
- Menu: Beranda, Destinasi, Ulasan, Blog, FAQ (label Indonesia).

## 4. Hero Section (implementasi saat ini)
- Home: background gambar wedding Unsplash + overlay `bg-black/60`; teks putih dengan drop-shadow; search bar putih; social proof.
- Destination: background gambar Bali + overlay `bg-black/50`; search bar membulat besar.
- Review: background gambar kamera + overlay `bg-black/60`; rating overall.
- Blogs: background gambar lensa + overlay `bg-black/60`.
- FAQ: background gambar diskusi + overlay `bg-black/60`.
- Struktur: `relative` section, `absolute inset-0 z-0` untuk gambar, `relative z-10` untuk konten.

## 5. Section Selang-Seling (Home)
- Hero: gambar + overlay gelap
- Features: `bg-white`
- Stats: `bg-lightgray`
- Occasions: `bg-white`
- Why: `bg-lightgray`
- Testimonials: `bg-white`
- CTA Banner: `bg-lightblue`
- FAQ: `bg-white`

## 6. Kartu Fotografer (PhotographerCard)
- Container: `bg-white rounded-xl shadow-lg overflow-hidden border border-lightgray hover:-translate-y-1`.
- Gambar: `w-full h-72 object-cover`.
- Ikon hati: `absolute top-4 right-4 bg-white/80 p-2 rounded-full backdrop-blur-sm`.
- Konten: `p-6`; nama `text-xl font-bold text-navy`; harga `text-lg font-bold text-teal`.

## 7. Footer Global
- Background Navy gelap `#071B2B`, teks putih/abu.
- 4 kolom: Brand, Jelajahi, Informasi, Kontak.
- Ikon sosial media bulat transparan → Teal saat hover.
- Hak cipta otomatis `{new Date().getFullYear()}`.

## 8. Aksesibilitas dan State Kosong
- Semua elemen interaktif dapat dijangkau dengan Tab dan memiliki focus ring (`focus:ring-2 focus:ring-teal`).
- Empty State ramah dengan ikon dan teks.
- Jangan menyampaikan status hanya melalui warna.

## 9. Kriteria Selesai (UI/UX Done When...)
1. Tidak ada scroll horizontal dari 320px hingga 1920px.
2. Palet warna diterapkan secara konsisten.
3. Logo "LensaKita" tampil tanpa kotak "LS".
4. Semua gambar menggunakan URL Unsplash yang valid.
5. Fokus keyboard selalu terlihat.
6. Hero setiap halaman memiliki background image + overlay.