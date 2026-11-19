# LensaKita

Platform web direktori (katalog) interaktif untuk membantu calon klien menemukan jasa fotografer profesional berdasarkan spesialisasi (Wedding, Produk, Event, Wisuda) dan domisili.

## Tech Stack
- React 19 (Vite)
- Tailwind CSS v3
- @iconify/react (ikon SVG)
- react-router-dom (routing SPA)

## Fitur
- Landing page (Home) dengan hero background gambar, section selang-seling.
- Halaman Destination: eksplorasi destinasi & fotografer, tabs, filter real-time, klik kartu ke detail.
- Halaman Detail Fotografer: profil, galeri, paket harga, ulasan, tombol WhatsApp.
- Halaman Review: testimoni pelanggan dengan filter bintang.
- Halaman Blogs: magazine fotografi dengan featured post, filter kategori, newsletter.
- Halaman FAQ: accordion dengan kategori sidebar + CTA kontak.
- Navbar & Footer global, menu aktif berwarna Teal.
- Semua gambar menggunakan Unsplash dengan fallback onError.

## Menjalankan Secara Lokal
```bash
npm install
npm run dev
```
Buka http://localhost:5173

## Build Production
```bash
npm run build
```

## Deployment
Deploy ke Vercel. File `vercel.json` sudah disertakan untuk SPA routing (rewrite ke index.html).

## Repositori
https://github.com/tugustut14/LensaKita