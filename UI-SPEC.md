# UI-SPEC.md - Desain Antarmuka LensaKita

## 1. Identitas Visual dan Sistem Desain
LensaKita memakai gaya bersih dan modern. Foto fotografer dari Unsplash adalah bintang utama, sehingga antarmuka dibuat netral.

**Palet Warna (WAJIB DIIKUTI):**
| Peran | Kode Hex | Tailwind Arbitrary Value |
|---|---|---|
| Brand / Tombol Utama | `#167D8D` | `bg-[#167D8D] text-white` |
| Teks Utama (Dark) | `#071B2B` | `text-[#071B2B]` |
| Latar Belakang | `#FFFFFF` | `bg-[#FFFFFF]` |
| Border / Pemisah | `#EEEEEE` | `border-[#EEEEEE]` |
| Badge / Highlight | `#B9E4E8` | `bg-[#B9E4E8] text-[#071B2B]` |

**Tipografi**
- Font: *Inter* via Google Fonts.
- H1 hero: `text-3xl md:text-5xl font-bold text-[#071B2B]`.
- Judul kartu: `text-lg font-semibold text-[#071B2B]`.
- Teks isi: `text-base text-[#071B2B] opacity-80`.

## 2. Logo "LS"
- Di Navbar, buat komponen div dengan `bg-[#167D8D] text-white font-bold text-xl rounded-lg p-2 flex items-center justify-center`. Di dalamnya berisi teks **"LS"**.
- Di sebelah kanan logo, tulis teks **"LensaKita"** dengan `font-bold text-[#071B2B] text-xl`.

## 3. Navigasi dan Header (Navbar)
- Sticky: `sticky top-0 z-50 bg-white shadow-sm border-b border-[#EEEEEE]`.
- Menu aktif: `text-[#167D8D] font-semibold`.
- Tombol utama di Navbar menggunakan `bg-[#167D8D] text-white hover:opacity-90`.

## 4. Hero Section dan Search Bar (implementasi saat ini)
- Hero Home: background gambar Unsplash (wedding) dengan overlay `bg-black/60`; teks putih dengan drop-shadow; search bar putih membulat.
- Hero Destination: background gambar Bali dengan overlay `bg-black/50`; search bar membulat besar.
- Search bar: `rounded-full` / `rounded-md` dengan shadow, ikon `mdi:map-marker-outline` dan `mdi:magnify`.
- Efek fokus: `focus:ring-2 focus:ring-[#167D8D]`.

## 5. Filter Bar
- Dropdown dan input menggunakan border `border-[#EEEEEE]`.
- Saat filter aktif, border berubah menjadi `border-[#167D8D]` dan teks menjadi `text-[#167D8D]`.

## 6. Kartu Fotografer
Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`.

Struktur kartu:
1. **Foto:** `aspect-square object-cover` (URL Unsplash).
2. **Tombol Hati:** Ikon `mdi:heart` (warna merah jika aktif, `text-[#071B2B]` jika tidak).
3. **Konten bawah:** `bg-white p-4 border border-[#EEEEEE] rounded-b-xl`.
   - Nama: `text-[#071B2B] font-bold`.
   - Spesialisasi & Kota: `text-[#071B2B] opacity-70 text-sm`.
   - Harga: `text-[#167D8D] font-bold`.
   - Badge "Terverifikasi": `bg-[#B9E4E8] text-[#071B2B] text-xs px-2 py-1 rounded`.
4. **Hover:** `hover:shadow-lg transition-shadow duration-200`.

## 7. Modal Detail Portofolio
- Backdrop `bg-[#071B2B]/50`.
- Konten modal: `bg-white rounded-2xl border border-[#EEEEEE]`.
- Tombol WhatsApp: `bg-[#25D366] text-white` (warna khas WA).
- Tombol "Ajukan Booking": `border border-[#167D8D] text-[#167D8D]`.

## 8. Dashboard Admin
- Banner peringatan: `bg-[#B9E4E8] text-[#071B2B] p-4`.
- Tabel: Header `bg-[#EEEEEE] text-[#071B2B] font-bold`. Baris bergaris `border-b border-[#EEEEEE]`.
- Tombol Edit: `text-[#167D8D]`. Tombol Hapus: `text-red-600`.

## 9. Kriteria Selesai (UI/UX Done When...)
1. Tidak ada scroll horizontal dari 320px hingga 1920px.
2. Palet warna `#071B2B`, `#167D8D`, `#B9E4E8`, `#EEEEEE`, dan `#FFFFFF` diterapkan secara konsisten.
3. Logo "LS" tampil sesuai spesifikasi di Navbar.
4. Semua gambar menggunakan URL Unsplash yang valid.
5. Fokus keyboard (Tab) selalu terlihat (menggunakan `ring-[#167D8D]`).
