# 🎨 Tanjore Creation | Heritage Art & Digital Sanctuary

Tanjore Creation is a high-fidelity digital platform dedicated to the preservation and showcase of **Thanjavur Art**—a 500-year-old classical South Indian tradition. Established in 1985, Tanjore Creation brings generational craftsmanship to the global collector through modern web standards.

---

## ✨ Features

The platform is engineered to mirror the opulence of the art itself, combining traditional motifs with cutting-edge performance.

*   **High-Fidelity Gallery**: Immersive "Masterpiece Registry" featuring high-resolution captures of 24K gold foil paintings with advanced lens-zoom interactivity. Includes new masterpieces like *The Celestial Wedding: Sacred Union*.
*   **Lead Generation**: International-ready contact form powered by Formspree, featuring a custom styled **`/thank-you`** success redirect page.
*   **Artisan's Journal (Blog)**: A 14-article blog focused on E-E-A-T (Expertise, Authoritativeness, Trustworthiness) and Generative Engine Optimization (GEO). Articles cover Gesso alchemy, Vastu placement, and Chola history in detail (600–1,200+ words).
*   **Responsive Category Filters**: Real-time category filtering on both the Gallery and Blog pages, improving search experience and dwell time (SXO).
*   **Sacred 6-Step Process**: Interactive technical breakdown of the Burmese Teak, Gesso relief, and 24K foiling techniques.

---

## 🛠️ Technical Architecture & Optimizations

Built for the next generation of heritage storytelling and Generative Engine Optimization (GEO):

*   **Framework**: Next.js 16 (App Router) and Tailwind CSS v4 using a custom "Heritage Design Token" system.
*   **Image Compression Pipeline**: Converted raw camera `.heic` images into web-optimized, 2000px maximum-dimension WebP files in `public/images/`. This reduced file sizes from **~8MB to ~450KB** (a 95% saving), fixing mobile Largest Contentful Paint (LCP) performance boundaries.
*   **Mobile-First Accessibility**: Grayscale hover filters are constrained to desktops (`md:grayscale`), ensuring mobile visitors see the vibrant gold foil paintings instantly. Text contrast opacities inside dark sections are adjusted to comply with WCAG 2.1 standards.
*   **Rich Schema Injection (AIO & AEO)**:
    - **Homepage**: Dynamic `FAQPage` JSON-LD schema representing core customer questions.
    - **Blog Listings**: `ItemList` JSON-LD schema dynamically indexing all posts.
    - **Blog Details**: `BlogPosting` JSON-LD schema on dynamic post templates.
    - **Gallery Details**: Extended `Product` JSON-LD schema with `sku`, `mpn`, price, and availability.
*   **Markdown & Tables Engine**: Integrated `remark-gfm` to parse tables and styled custom HTML elements for markdown paragraphs, headings, blockquotes, lists, and tables.
*   **Conversion Protection**: Excluded `/thank-you` from the dynamic sitemap (`src/app/sitemap.ts`) and static XML sitemap (`next-sitemap.config.js`), protecting lead-conversion tracking metrics from organic crawlers.

---

## 📁 Project Structure

```bash
src/
├── app/            # Next.js App Router (Layouts, Pages)
│   ├── blog/       # Blog listing and dynamic post pages
│   ├── gallery/    # Gallery details page
│   └── thank-you/  # Post-submission success page
├── components/     # UI components (ArtGallery, BlogContent, BlogPostContent)
├── data/           # Site databases (paintings.ts, blogPosts.ts)
└── lib/            # Shared utilities (shimmer, toBase64)
public/
└── images/         # Web-optimized WebP masterpieces and blog narratives
```

---

## 💻 Local Development

First, ensure you have Node.js and npm installed.

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Launch Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. **Build for Production**:
   ```bash
   npm run build
   npm run start
   ```

4. **Verify Lints & Compilation**:
   ```bash
   npm run lint
   ```

---
*Preserving the golden legacy of Thanjavur since 1985.*
