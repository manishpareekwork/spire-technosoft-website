## Spire Technosoft Website

Codex-powered redesign of the Spire Technosoft marketing site following the **Spire_Technosoft_Codex_Brief**. The build highlights enterprise-grade UI, measurable outcomes, and the “Engineering Business Growth” brand platform.

### Highlights

- **Hero + Trust Layer** – Gradient hero with measurable KPIs, outcome teasers, and a client/industry credibility strip.
- **Navigation & Pages** – Enterprise-friendly IA: Home, About, Solutions, Innovation Lab, Portfolio, Careers, Contact.
- **Portfolio System** – Centralized project data powering a filterable grid plus detail pages (Challenge → Solution → Role → Outcomes → Tech stack).
- **Innovation & Solutions Depth** – Modular cards, process flows, R&D spotlights, and mission/vision/values aligned to the brand book.
- **Accessibility & Typography** – Montserrat / Poppins / Open Sans / Inter stack with WCAG-friendly color tokens from the Spire palette.

### Tech Stack

- [Next.js 15 / App Router](https://nextjs.org/docs/app)
- TypeScript + ESLint + Tailwind via `@tailwindcss/postcss7-compat`
- Custom UI primitives in `src/components/ui` + lucide-react icons
- Data & content modeling in `src/data/portfolio.ts`

### Commands

```bash
npm install        # install dependencies
npm run dev        # start dev server on http://localhost:3000
npm run lint       # lint using Next.js ESLint config
```

### Key Structure

| Path | Purpose |
| --- | --- |
| `src/app/page.tsx` | Home hero, outcome teasers, domain cards, CTA bands |
| `src/app/about` | Mission/vision/values, timeline, leadership, testimonial |
| `src/app/solutions` | Domain-specific solution modules referencing the brief |
| `src/app/innovation` | Focus areas, discover→scale process, labs content |
| `src/app/portfolio/page.tsx` | Filterable grid + overview copy |
| `src/app/portfolio/[slug]/page.tsx` | Detailed case studies fed by `src/data/portfolio.ts` |
| `src/app/contact` | Enhanced contact form, locations, discovery call CTA |
| `src/components/portfolio/portfolio-grid.tsx` | Client-side filtering logic |
| `src/app/globals.css` | Brand tokens, gradients, typography rules |

### Brand System Reference

- **Colors:** Emerald `#004D32`, Forest `#007A53`, Mint `#66C2A5`, Charcoal `#2B2B2B`, Ivory `#F7F9F7`, Soft Gold `#CBBE8A`.
- **Fonts:** Montserrat (headings), Poppins (subheads), Open Sans (body copy), Inter (UI).
- **Buttons:** Primary in Emerald/Mint gradient, outlined secondary with Emerald stroke.
- **Imagery:** Real photography with subtle overlays, no synthetic/AI renders.

### Extending

- Add more portfolio entries by updating `src/data/portfolio.ts`. Each object automatically feeds the landing grid and detail route.
- Tailor colors or typography tokens in `src/app/globals.css`.
- Update brand assets in `public/images/logo/` per the Brand Book.

### Deployment

Deploy via [Vercel](https://vercel.com) or any Node-compatible host. Ensure environment includes Node 18+ to match Next.js 15 requirements.
