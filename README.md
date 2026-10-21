# FikraTech — Exact Replica

A high-fidelity replica of the official [FikraTech](https://www.fikratech.com/) website, built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **GSAP**.

This project reproduces 100% of the original website's visual identity, structure, copywriting, animations, assets, and responsive bilingual layouts (English & Arabic RTL).

---

## 🚀 Key Features & Highlights

1. **Pixel-Perfect Visual Fidelity**
   - Exact dark aesthetic with custom FikraTech glowing gradients, mesh grids, and border masks.
   - 209 original assets extracted and served locally from `/public/images/` (AVIF/SVG logos, device mockups, UI elements, and `GRID.svg`).
   - Original typography using authentic webfonts:
     - **English**: `TheSans` (`B5Plain`, `B6SemiBold`, `B7Bold`)
     - **Arabic**: `Bahij_TheSansArabic` (`Light`, `SemiLight`, `Plain`, `Bold`)

2. **Complete Bilingual Support (EN & AR)**
   - English (`/`) and Arabic (`/ar`) with proper `dir="rtl"` text alignment and mirrored layout geometry.
   - Comprehensive translation dictionaries extracted verbatim from the original Nuxt 3 ASTs (`src/data/dict_en.json`, `src/data/dict_ar.json`, `impact_en.json`, and `impact_ar.json`).
   - Seamless one-click language toggle in the capsule navbar.

3. **All 18 Original Routes Recreated**
   - **Home** (`/`, `/ar`): Hero with floating badges, Trusted By client marquee, 5-tab "Story of FikraTech" interactive section, "What We Offer" cards, and stacked "Innovation Through Projects".
   - **Services** (`/services`, `/ar/services`): Hero with interactive code snippet tabs, 4 full service detail sections (Business Automation, UI/UX, Mobile App, Software Development), FAQ accordions, and Partner reviews.
   - **Process** (`/process`, `/ar/process`): Hero with orbiting tool nodes, 8-phase "Idea to Impact" pipeline (A1–A3, B1–B5), 5-card workflow breakdown, and Partner testimonials.
   - **Projects** (`/projects`, `/ar/projects`): Filterable portfolio grid (All, Private, Government) featuring 8 full projects with iMac, MacBook Pro, and multi-device mockups.
   - **Project Detail** (`/projects/view/:name`, `/ar/projects/view/:name`): Full dynamic case studies for all 8 original client projects:
     - `sahab` (Sahab Smart Platform)
     - `dar` (Dar Real Estate Platform)
     - `zwiftpay` (ZwiftPay Digital Wallet)
     - `qudrah` (Qudrah Capability Building)
     - `dinarak` (Dinarak Mobile Payment)
     - `dubaiSports` (Dubai Sports Council)
     - `dubaiLegalAffairs` (Dubai Legal Affairs Department)
     - `ajmanGovernment` (Ajman Government Digital Portal)
   - **Careers** (`/careers`, `/ar/careers`): Company history timeline (2020–2024), 5 culture pillars, 6 real job openings, and interactive Job Application modal with resume upload.
   - **Blog** (`/blog`, `/ar/blog`): Category filters and 12 illustrated articles.
   - **Blog Detail** (`/blog/:id`, `/ar/blog/:id`): Full article layout with breadcrumbs, author profile, callout boxes, and related reading list.
   - **Contact** (`/contact`, `/ar/contact`): Hero, interactive contact form with validation, direct WhatsApp CTA, address, and FAQ accordion.

4. **Interactive Components & Micro-interactions**
   - **Interactive 3D Footer Card**: Flips 180° on mouse hover to reveal contact details against the authentic `GRID.svg` backdrop.
   - **Spotlight Cards**: Mouse-tracking radial gradient glow and masked border effects.
   - **Infinite Logo Marquee**: Smooth CSS-driven ticker displaying all client emblems.
   - **FAQ Accordions**: Smooth expand/collapse animations with 45° rotating indicator icons.
   - **Fixed Blur Capsule Navbar**: Dynamic active state pill, language toggle, and responsive animated mobile drawer.

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom Core CSS (`src/fikratech-core.css`)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) + [GSAP](https://gsap.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Authentic FikraTech SVGs

---

## 📦 Getting Started

### Prerequisites
- Node.js (v18.x or later recommended)
- npm or pnpm or yarn

### Installation
```bash
# Clone or navigate to the project directory
cd fikratech-replica

# Install dependencies
npm install
```

### Running Development Server
```bash
npm run dev
```
The application will launch at `http://127.0.0.1:5173/`.

### Production Build
```bash
npm run build
```
Generates an optimized, production-ready static bundle in `dist/`.

To preview the production build locally:
```bash
npm run preview
```

---

## 📁 Project Structure

```
fikratech-replica/
├── public/
│   ├── fonts/           # Authentic TheSans & Bahij TheSansArabic woff2 fonts
│   └── images/          # 209 original FikraTech SVGs, AVIF mockups & client logos
├── src/
│   ├── components/
│   │   ├── Accordion.tsx       # FAQ collapsible component
│   │   ├── ApplyModal.tsx      # Job application dialog with file upload
│   │   ├── DeviceMockup.tsx    # Responsive iMac, MacBook & Phone wrappers
│   │   ├── Footer.tsx          # 4-column footer + 3D flipping card
│   │   ├── Header.tsx          # Fixed capsule navbar with mobile menu
│   │   ├── Layout.tsx          # Shared layout & scroll management
│   │   ├── OurPartners.tsx     # Testimonial carousel
│   │   ├── SpecialCard.tsx     # Spotlight hover card
│   │   └── TrustedBy.tsx       # Infinite logo ticker
│   ├── context/
│   │   └── LanguageContext.tsx # EN/AR i18n & dir state manager
│   ├── data/
│   │   ├── dict_en.json        # English translation dictionary
│   │   ├── dict_ar.json        # Arabic translation dictionary
│   │   ├── impact_en.json      # English Idea-to-Impact phases
│   │   └── impact_ar.json      # Arabic Idea-to-Impact phases
│   ├── pages/
│   │   ├── Home.tsx            # Homepage
│   │   ├── Services.tsx        # Services page
│   │   ├── Process.tsx         # Process & workflow page
│   │   ├── Projects.tsx        # Projects portfolio grid
│   │   ├── ProjectView.tsx     # Dynamic case study detail page
│   │   ├── Careers.tsx         # Careers, timeline & job openings
│   │   ├── Blog.tsx            # Articles directory
│   │   ├── BlogDetail.tsx      # Article reader
│   │   └── Contact.tsx         # Contact form & channels
│   ├── App.tsx                 # Router setup for EN and AR routes
│   ├── fikratech-core.css      # Extracted FikraTech variables & animations
│   ├── main.tsx                # Application root
│   └── index.css               # Global Tailwind CSS entry
├── index.html                  # HTML entry with font preloading
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🌐 Supported URL Routes

| Page | English Route | Arabic Route (RTL) |
| :--- | :--- | :--- |
| **Home** | `/` | `/ar` |
| **Services** | `/services` | `/ar/services` |
| **Process** | `/process` | `/ar/process` |
| **Projects** | `/projects` | `/ar/projects` |
| **Project Detail** | `/projects/view/:name` | `/ar/projects/view/:name` |
| **Careers** | `/careers` | `/ar/careers` |
| **Blog** | `/blog` | `/ar/blog` |
| **Blog Article** | `/blog/:id` | `/ar/blog/:id` |
| **Contact** | `/contact` | `/ar/contact` |
