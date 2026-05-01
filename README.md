# 🎨 Tanjore Creation | Heritage Art & Digital Sanctuary

Tanjore Creation is a high-fidelity digital platform dedicated to the preservation and showcase of **Thanjavur Art**—a 500-year-old classical South Indian tradition. Established in 1985, Tanjore Creation brings generational craftsmanship to the global collector through modern web standards.

---

## ✨ Features

The platform is engineered to mirror the opulence of the art itself, combining traditional motifs with cutting-edge performance.

*   **High-Fidelity Gallery**: Immersive "Masterpiece Registry" featuring high-resolution captures of 24K gold foil paintings with advanced lens-zoom interactivity.
*   **Lead Generation**: International-ready asynchronous contact form powered by Formspree.
*   **Architectural Storytelling**: A 12-article "Artisan's Journal" focused on E-E-A-T (Expertise, Authoritativeness, Trustworthiness), covering Gesso alchemy, Vastu placement, and Chola history.
*   **Sacred 6-Step Process**: Interactive technical breakdown of the Burmese Teak, Gesso relief, and 24K foiling techniques.

## 🛠️ Technical Architecture

Built for the next generation of heritage e-commerce and storytelling:

*   **Framework**: [Next.js 15+ (App Router)](https://nextjs.org/) for optimized Server Components and Sub-second LCP.
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) using a custom "Heritage Design Token" system.
*   **Animations**: [Framer Motion](https://www.framer.com/motion/) for fluid, non-blocking layout transitions.
*   **SEO Engine**: Dynamic Sitemap generation, unique JSON-LD Schema (Organization/Product), and semantic Metadata API implementation.

## 🚀 Performance & Technical SEO

*   **Core Web Vitals**: Optimized for 100/100 performance through `next/image` prioritization and layout-shift prevention.
*   **Responsive Maestro**: Fluid typography using `clamp()` logic to maintain prestige on everything from mobile screens to 4K gallery displays.

## 📁 Project Structure

```bash
src/
├── app/            # Next.js App Router (Layouts, Pages)
├── components/     # UI components (ArtGallery, HeroSlider, BlogContent, Icons)
├── data/           # Centralized site data (Paintings, Blog Posts)
└── lib/            # Shared utilities (shimmer, toBase64)
public/
└── images/         # Local assets for masterpieces and blog narratives
```

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

## 🔍 SEO & Indexing
The platform is optimized for Google indexing with:
*   **Dynamic Sitemap**: Automatically generated via `next-sitemap` after build.
*   **Search Console Verification**: Integrated Google Site Verification.
*   **Semantic SEO**: Comprehensive meta tags and JSON-LD schema.
*   **Rich Content Editing**: Blogs are natively parsed from Markdown via `react-markdown` for maximum structured data output (H2s, lists, bolding).

---
*Preserving the golden legacy of Thanjavur since 1985.*
