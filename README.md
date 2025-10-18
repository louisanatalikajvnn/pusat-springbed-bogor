# Pusat Springbed Bogor - Layanan Service & Perbaikan Kasur Profesional

Website company profile profesional untuk layanan service dan perbaikan kasur di Bogor, dibangun dengan Next.js 15, TypeScript, dan Tailwind CSS.

## ✨ Fitur

- 🎨 **Desain Elegan**: Skema warna cokelat dan krem yang profesional
- 📱 **Fully Responsive**: Dioptimalkan untuk semua perangkat (mobile, tablet, desktop)
- ⚡ **Modern Stack**: Dibangun dengan Next.js 15 App Router dan TypeScript
- 🎯 **SEO Optimized**: Meta tags yang tepat dan semantic HTML
- 💼 **Business Focused**: Menampilkan layanan, proses, dan testimoni pelanggan
- 🗺️ **Google Maps**: Integrasi lokasi dengan Google Maps
- 📱 **Social Media**: Link ke Facebook, Instagram, TikTok, dan YouTube
- 🚀 **Fast Loading**: Optimized performance dengan modern web standards

## 📄 Struktur Halaman

### Navigasi

- Home
- Layanan Kami
- Artikel
- Galeri
- Testimoni
- Hubungi Kami

### Section Utama

1. **Hero Section**: Tampilan pembuka yang menarik dengan CTA buttons
2. **Gejala Kasur Tidak Nyaman**: 6 masalah umum kasur
3. **Dampak Kesehatan**: 3 dampak negatif dari kasur yang tidak mendukung
4. **Layanan Kami**:
   - Perbaikan Struktur Kasur
   - Penggantian Bahan dan Komponen
   - Perbaikan Estetika dan Kebersihan
   - Kustomisasi Kasur
   - Perbaikan Divan dan Headboard
   - Layanan Tambahan (Garansi 10 tahun, Gratis Antar Jemput Jabodetabek)
5. **Mengapa Memilih Kami**: 3 alasan utama
6. **Konsep Kasur Sehat & Tepat**: Perbandingan kasur empuk, keras, dan sehat
7. **Before After**: Galeri foto transformasi
8. **Keluhan dan Permintaan Layanan**: Showcase berbagai kasus
9. **Testimoni**: Review pelanggan dari Google Reviews (rating 5.0)
10. **Merek Spring Bed**: 14+ merek yang telah di-service
11. **CTA Section**: Call-to-action dengan WhatsApp integration
12. **Footer**: Kontak lengkap, social media, dan Google Maps

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm atau yarn

### Instalasi

1. Navigate ke direktori project:

```bash
cd pusat-springbed-bogor
```

2. Install dependencies:

```bash
npm install
```

3. Jalankan development server:

```bash
npm run dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser

## 🏗️ Build untuk Production

Untuk membuat production build yang dioptimalkan:

```bash
npm run build
npm start
```

## 📁 Struktur Project

```
pusat-springbed-bogor/
├── app/
│   ├── layout.tsx              # Root layout dengan navigation & footer
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles dan color scheme
├── components/
│   ├── Navigation.tsx          # Header navigation
│   ├── Footer.tsx              # Footer dengan maps & social media
│   ├── HeroNew.tsx            # Hero section
│   ├── MattressProblems.tsx   # Gejala kasur tidak nyaman
│   ├── HealthImpact.tsx       # Dampak kesehatan
│   ├── LayananKami.tsx        # Services section
│   ├── WhyChoose.tsx          # Mengapa memilih kami
│   ├── HealthyMattress.tsx    # Konsep kasur sehat
│   ├── BeforeAfter.tsx        # Galeri before/after
│   ├── CustomerComplaints.tsx # Keluhan pelanggan
│   ├── TestimonialsNew.tsx    # Testimoni Google Reviews
│   ├── BrandShowcase.tsx      # Merek-merek yang di-service
│   └── CTASection.tsx         # Call to action
└── public/                     # Static assets
```

## 🎨 Color Palette (Elegant Edition)

Website menggunakan skema warna cokelat dan krem yang elegan dan mewah:

- **Background**: `#f9f7f4` - Warm soft cream
- **Foreground**: `#2c1810` - Deep rich brown
- **Primary Brown**: `#8b6f47` - Elegant golden brown
- **Secondary Brown**: `#b8956a` - Soft warm brown
- **Dark Brown**: `#3d2817` - Deep chocolate
- **Cream**: `#f5f1eb` - Refined cream
- **Light Brown**: `#c9b896` - Soft tan
- **Accent Gold**: `#d4a574` - Subtle gold accent
- **White**: `#ffffff` - Pure white

### Design Features

- Warmer color temperature for a luxurious feel
- Softer shadows using brown tones instead of black
- Improved typography with better line-height (1.7) and letter-spacing
- Smooth transitions with cubic-bezier easing for premium feel

## ⚙️ Kustomisasi

### Update Informasi Kontak

Edit informasi kontak di:

- `components/Footer.tsx`
- `components/CTASection.tsx`

Ganti placeholder berikut:

- `+62 XXX XXXX XXXX` dengan nomor telepon aktual
- `info@kingservice.com` dengan email aktual
- Update URL social media (Facebook, Instagram, TikTok, YouTube)
- Update koordinat Google Maps di Footer

### Modifikasi Layanan

Update array services di `components/LayananKami.tsx` untuk menambah, mengurangi, atau memodifikasi layanan.

### Ganti Foto Placeholder

Foto placeholder perlu diganti dengan foto asli:

- Before/After di `components/BeforeAfter.tsx`
- Keluhan pelanggan di `components/CustomerComplaints.tsx`
- Update dengan gambar nyata dari project Anda

### Ubah Color Scheme

Modifikasi CSS variables di `app/globals.css` untuk mengkustomisasi palet warna.

## 🛠️ Teknologi yang Digunakan

- **Next.js 15**: React framework dengan App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS v4**: Utility-first CSS framework
- **Playfair Display**: Elegant serif font untuk headings
- **Geist**: Modern sans-serif font untuk body text
- **Google Maps Embed**: Integrasi peta lokasi
- **WhatsApp Integration**: Direct chat link

## 📱 Social Media Integration

Website terintegrasi dengan:

- Facebook
- Instagram
- TikTok
- YouTube
- WhatsApp Business

Update link di `components/Footer.tsx` dengan akun media sosial Anda.

## 📞 Kontak

Untuk pertanyaan atau dukungan:

- Email: info@kingservice.com
- Phone: +62 XXX XXXX XXXX
- WhatsApp: [Update dengan nomor aktual]
- Lokasi: Bogor, Jawa Barat

## 📝 License

Website ini dibuat untuk Pusat Springbed Bogor - Layanan Service & Perbaikan Kasur Profesional.

---

**Pusat Springbed Bogor** - Kasur Nyaman, Tidur Nyaman! 🛏️✨
