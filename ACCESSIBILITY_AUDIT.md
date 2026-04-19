# Accessibility audit — Spire Technosoft marketing site

Last reviewed: **2026-04-02** (code pass; manual browser verification recommended before launch).

## Summary

- **Theme control:** The shared `Button` merges `className` after variants (`cn(buttonVariants({ variant, size }), className)`), so consumer styles apply. `ThemeToggle` supports **`variant="onDark"`** on the glass header: high-contrast pill (`border-white/35`, `bg-white/18`, white icon, **focus ring**).
- **Motion:** `prefers-reduced-motion` in `globals.css` shortens `.animate-softFade` for users who request reduced motion.
- **Semantics:** Careers hiring process is an **ordered list** of **articles** with a labelled section (`aria-labelledby`) and step numbers for clarity.

## Checklist (WCAG-oriented)

| Area | Status / notes |
|------|----------------|
| **Keyboard** | Tab through header, theme menu, mobile drawer, forms; ensure no traps. Radix dropdowns handle focus. |
| **Focus visible** | Theme toggle: `focus-visible:ring-2` on white/70 with offset on dark header. Audit other `outline-none` controls. |
| **Contrast** | Dark header: nav at `text-white/74`, top bar at `text-white/72` (bumped from /52). Hero body text `text-slate-300` on `slate-950` — spot-check with a contrast tool. Light pages: `text-muted-foreground` on `background` — verify cards and borders. |
| **Images** | `next/image` uses descriptive `alt` on key heroes; decorative icons use `aria-hidden` where paired with visible text. |
|    **Headings** | One `h1` per page; section `h2`/`h3` order should not skip levels. |
| **Forms** | Careers/contact: ensure every input has an associated label (check `CareersForm` and contact components). |
| **Skip link** | Implemented in `layout.tsx`: “Skip to content” → `#main-content` with visible focus styles. |
| **Target size** | Icon buttons are 40×40 (`size="icon"`). Mobile drawer hit areas are adequate. |

## Recommended manual tests

1. **axe DevTools** or **Lighthouse** (Accessibility) on Home, Careers, Contact, one portfolio slug.  
2. **Keyboard-only** path: open site → theme menu → navigate to Careers → tab through hiring steps.  
3. **Zoom 200%** on mobile and desktop breakpoints.  
4. **VoiceOver / NVDA:** theme trigger announces “Toggle theme”; hiring steps read as list items.

---

## Image manifest (crisp assets — 2× where possible)

Export or source at **2×** display size. Prefer **3:2** for heroes and dashboards; **4:3** for tall phone mocks. Keep subjects in the **center ~70%** for `object-cover` crops. **No embedded marketing copy** in bitmaps.

1. **`/images/about/mission-hero.png`** — Team collaboration in a bright product/engineering setting; natural light, sharp faces and laptops, no watermark clutter.  
2. **`/images/img1.png`** — Professional at a desk with compliance or quality analytics on a large monitor; credible enterprise mood, not “stock hacker” tropes.  
3. **`/images/supply-chain-quality-system.png`** — Supplier or QA dashboard: status columns, evidence tiles, readable chart chrome in a muted palette.  
4. **`/images/senior-care-companion-app.png`** — Hand holding phone with a **large-type** care companion UI; warm, dignified, privacy-respecting (no real PHI).  
5. **`/images/manufacturing-dashboard.png`** — Industrial / OEE or line monitoring UI with clear KPIs and alert states; optional blurred factory context.  
6. **`/images/finance-dashboard.png`** — Finance or risk analytics: trends, portfolios, or KPI cards; calm institutional colors.  
7. **`/images/energy-dashboard.png`** — Energy or utility monitoring: consumption, asset health, time series; operator-appropriate density.  
8. **`/images/healthcare-dashboard.png`** — Clinical or ops dashboard (scheduling, pathways, or population tiles); HIPAA-safe styling, no real identifiers.  
9. **`/images/retail-dashboard.png`** — Retail / FMCG performance: stores, suppliers, or quality scores; clean BI look.  
10. **`/images/logo/512x512.png`** (and **1080×1080**, **24×24**) — High-res logo masters; keep clear space; use PNG/SVG suitable for light and dark UI chrome.  

**Optional product cards** (see `ECOSYSTEM_AND_IMAGE_BRIEF.md`): `products/platform-admin.png`, `lift-erp.png`, `security-service.png`, `spire-assessments.png`, `billerhq.png`, `digital-marketing.png` — each a **3:2** UI or context shot matching that product line.

---

 ## Follow-ups- 

- Run automated contrast on **Badge**, **eyebrow**, and **ghost** buttons in both themes.  
- After replacing images, re-check **LCP** and `sizes` attributes on `next/image`.
  