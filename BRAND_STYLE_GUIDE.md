# Spire Technosoft — Web & Brand Style Guide (v1.0)

## 1. Core Color System
| Role | Name | HEX | RGB | Typical Usage |
| --- | --- | --- | --- | --- |
| Primary Brand | Emerald Green | `#004D32` | (0, 77, 50) | Logo lockups, hero bands, primary buttons |
| Secondary Accent | Forest Green | `#007A53` | (0, 122, 83) | Gradients, section headers, cards |
| Light Accent | Mint Green | `#66C2A5` | (102, 194, 165) | Icons, hover states, highlights |
| Neutral Light | Ivory White | `#F7F9F7` | (247, 249, 247) | Backgrounds, whitespace |
| Dark Neutral | Charcoal Gray | `#2B2B2B` | (43, 43, 43) | Headlines, footers, overlays |
| Secondary Dark | Slate Gray | `#404B44` | (64, 75, 68) | Body text, card outlines |
| Highlight Tone | Soft Gold | `#CBBE8A` | (203, 190, 138) | Premium callouts, accent gradients |

**Gradient Recipes**
- Emerald → Mint: `linear-gradient(135deg, #004D32, #66C2A5)`
- Forest → Charcoal: `linear-gradient(180deg, #007A53, #2B2B2B)`

## 2. Typography Stack
| Type | Font | Use | Weight | Color |
| --- | --- | --- | --- | --- |
| Headings (H1–H3) | Montserrat | Hero titles, page sections | 700 Bold | `#2B2B2B` |
| Subheadings | Poppins | Section intros, callouts | 600 SemiBold | `#007A53` |
| Body Copy | Open Sans | Paragraphs, detail text | 400 Regular | `#404B44` |
| UI / Captions | Inter | Buttons, labels, micro-copy | 500 Medium | `#2B2B2B` |

**Spacing Guidance**
- Headings `line-height: 1.2`
- Body text `line-height: 1.6`
- Paragraph spacing `margin-bottom: 1.5em`
- Max readable width: `1080px`

## 3. Buttons & UI Elements
- **Primary Button**  
  Background `#007A53`, hover `#004D32`, text `#FFFFFF`, radius `8px`, font `Inter 700 14px`, padding `12px 28px`.
- **Secondary Button**  
  Border `2px solid #004D32`, transparent fill, text `#004D32`. Hover flips to solid `#004D32` with white text.
- **Links**  
  Color shift on hover `#007A53 → #66C2A5`, underline animation expanding outward.
- **General Shadow**  
  `box-shadow: 0 4px 16px rgba(0,0,0,0.08)`

## 4. Layout & Grid
- Container width: `1200px`
- Grid: 12 columns, `24px` gutter
- Breakpoints: Desktop ≥1200px, Tablet 768–1199px, Mobile ≤767px
- Sticky header, fade-in sections (Framer Motion / GSAP), consistent interactions across viewports

## 5. Imagery Direction
- Real photography with natural lighting; depict collaboration, technology in action, dashboards, or wellness flows.
- Apply subtle desaturation (5–10%) and optional overlay `rgba(0,77,50,0.08)` for tonal cohesion.
- Avoid obvious AI renders or surreal imagery.

## 6. Iconography
- Source: Lucide / Feather icons
- Style: 2px strokes, minimal fill, 4px corner rounding
- Default color `#007A53`, hover `#66C2A5`

## 7. Motion & Interaction
- Logo fades in with gentle parallax on scroll.
- Buttons scale to `transform: scale(1.03)` on hover.
- Section dividers can use angled gradients (Emerald → Mint).
- Maintain accessible focus rings for keyboard navigation.

## 8. Brand Book Integration
- Logos reside in `/public/images/logo/` with multiple sizes (16px, 24px, 512px, 1080px). Maintain safe zones (2× inner triangle width).
- Minimum logo sizes: 40px height (web) / 15mm (print). Use white or soft-gold mark on dark backgrounds. No stretching or drop shadows.
- Tagline lockup example:
  ```
  [ Spire Technosoft Logo ]
  Engineering Business Growth.
  ```
  Tagline in Montserrat Bold 18px, `#004D32`, aligned left or centered.

## 9. Accessibility
- Maintain contrast ratios ≥ 4.5:1 for body text and buttons.
- Provide visible hover/focus states for all interactive elements.
- Ensure descriptive `alt` text for imagery and aria labels for icon-only buttons.
