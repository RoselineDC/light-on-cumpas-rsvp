# Light on Campus — Next.js + TypeScript

Christian Student Conference website built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
light-on-campus/
├── app/
│   ├── globals.css          # Global styles, ray animation, fade-in
│   ├── layout.tsx           # Root layout — Sora + DM Sans fonts, metadata
│   └── page.tsx             # Home page (composes all sections)
├── components/
│   ├── ui/
│   │   ├── FadeIn.tsx       # IntersectionObserver scroll-reveal wrapper
│   │   └── Icons.tsx        # SVG icon components (Calendar, Clock, Location, QR)
│   └── sections/
│       ├── Navbar.tsx       # Fixed top nav with glass-morphism
│       ├── Hero.tsx         # Full-screen hero with light rays + gold glow
│       ├── Details.tsx      # Event date / time / venue cards
│       ├── Expect.tsx       # Programme cards (01–04)
│       ├── VideoSection.tsx # YouTube embed on dark navy background
│       ├── ThemeVerse.tsx   # Matthew 5:14 quote section
│       ├── Register.tsx     # CTA box with Google Forms link + QR placeholder
│       └── Footer.tsx       # Contact, socials, copyright
├── lib/
│   ├── constants.ts         # All site data (nav, cards, contacts, socials)
│   └── types.ts             # Shared TypeScript interfaces
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.js
```

## Customisation

All site content lives in **`lib/constants.ts`** — update nav links, event details, cards, social links, contact info, and the YouTube embed ID there without touching component files.

### Update the registration link
```ts
// lib/constants.ts
export const REGISTER_FORM_URL = "https://forms.gle/YOUR_FORM_ID";
```

### Swap the YouTube video
```ts
export const YOUTUBE_EMBED_ID = "YOUR_VIDEO_ID";
```

### Add a real QR code
Replace the `<QRIcon>` placeholder in `components/sections/Register.tsx` with a `<Image>` pointing to your QR PNG.

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| `next/font` | Zero-layout-shift Google Fonts (Sora + DM Sans) |
| `next/link` | Client-side navigation |
| IntersectionObserver | Scroll-triggered fade-in animations |
