# Spire — Combined copy & image generation brief

Use this for AI or stock tools: export at **2×** resolution for retina. Prefer **3:2** (hero, dashboards) or **4:3** (cards); avoid ultra-wide or ultra-tall sources that will be cropped. **No text in images** (or minimal UI chrome only) so layouts stay flexible.

---

## Part 1 — Spire Technosoft (studio / website positioning)

**What the marketing site sells**  
Custom software, mobile, internal tools, dashboards, and AI-assisted workflows—delivered with strategy, design, and engineering in one lane, clear milestones, and measurable outcomes.

**Differentiators (site)**  
- Cross-functional teams: strategy, design, and engineering stay aligned.  
- Continuous improvement: design systems, DevOps, observability, post-launch iteration.  
- AI in real workflows: automation, analytics, telemetry—only where it earns its place.

**Representative engagements (case studies on site)**  
- Quality / audit ops platforms (inspections, evidence, CAPA).  
- Healthcare & wellness (mobile, privacy-first, engagement).  
- Industrial / energy (IoT telemetry, operations dashboards).  
- Supply chain & retail (supplier quality, workflows).  
- Caregiver / senior companion (alerts, routing, adherence).

---

## Part 2 — Spire product ecosystem (`PRODUCT_DESCRIPTIONS.md` + one-line bridge)

These are **Spire-owned products** (multi-tenant SaaS / platform). The studio site can position them as **products we build and operate**, distinct from **client custom work** in the portfolio.

| Product | Very short | Medium (for cards / SEO) |
|--------|------------|---------------------------|
| **Platform Admin** | Tenant governance and onboarding control plane. | Central governance for the Spire ecosystem: tenant lifecycle, entitlements, themes, dashboards, and consistent onboarding before Lift ERP, Assessments, Digital Marketing, or other products go live. |
| **Lift ERP** | Elevator service, project, and contract ERP. | India-first multi-tenant ERP for elevator businesses—sites, assets, service jobs, installations, quotations, warranty, AMC/CAMC; billing via BillerHQ; uploads protected by Security. |
| **Security** | Shared file scanning and upload safety. | Reusable API/SDK for malware scanning across products—hash caching, cloud verification, optional local agents—so Lift ERP, BillerHQ, Assessments share one security layer. |
| **Spire Assessments** | Question bank and exam paper engine. | Structured question bank, review/approval, print-ready papers, per-student variants, answer keys—built for schools, institutes, and exam ops (with future QR/OMR-style flows in mind). |
| **BillerHQ** | Multi-tenant billing and invoicing. | Standalone billing for shops through larger orgs—invoices, payments, notes, recurring billing, exports, reporting; India-first GST-ready, structured for multi-currency and global tax. |
| **Spire Digital Marketing** | AI-assisted branded campaign content. | Turns brand context, offerings, and regions into platform-ready social assets—multilingual variants, approvals, publish/export for Instagram, Facebook, WhatsApp; enterprise admin, not a toy generator. |

**Bridge sentence (optional hero / footer)**  
*Alongside client programs, we ship and evolve Spire’s own product line—operations software, billing, assessments, marketing automation, and shared platform services.*

---

## Part 3 — Image manifest (filenames, size, two-line brief)

### A. Files the site already references under `/public/images/` (non-logo)

Generate **photorealistic or clean product UI mockups** (not surreal AI scenes). **Safe zones:** keep key subject in **center 70%** so `object-cover` crops on small cards do not cut faces or key UI.

| # | File (path) | Target ratio & note | Brief (2 lines) |
|---|-------------|---------------------|-----------------|
| 1 | `about/mission-hero.png` | **3:2**, min **2400×1600** | Diverse team in a bright office: laptops, whiteboard, collaborative product/engineering discussion. Natural light, sharp focus, no stock-watermark clutter. |
| 2 | `img1.png` | **3:2**, min **2400×1600** | Professional reviewing compliance or quality data on a large monitor; context suggests audit, inspections, or operations—not a fake “hacker” aesthetic. |
| 3 | `supply-chain-quality-system.png` | **3:2**, min **2400×1600** | Supply-chain or QA dashboard on screen: supplier list, status traffic, document/evidence tiles; believable typography, muted enterprise palette. |
| 4 | `senior-care-companion-app.png` | **4:3** or **3:4**, min **1600×2000** | Hand holding phone showing a **simple** large-type health/care app UI (not illegible micro-text); warm, dignified, privacy-respecting mood. |
| 5 | `manufacturing-dashboard.png` | **3:2**, min **2400×1600** | Industrial ops / IoT dashboard: OEE, line status, alerts; dark UI acceptable; readable charts, no gibberish labels. |
| 6 | `finance-dashboard.png` | **3:2**, min **2400×1600** | Finance or risk analytics screen: portfolios, trends, KPI cards; institutional, calm color scheme. |
| 7 | `energy-dashboard.png` | **3:2**, min **2400×1600** | Energy/utility or grid-style monitoring: consumption, asset health, time series; operator context optional in background (blurred). |
| 8 | `healthcare-dashboard.png` | **3:2**, min **2400×1600** | Clinical or operations dashboard (appointments, care pathways, or population tiles); HIPAA-aware look—no real patient identifiers. |
| 9 | `retail-dashboard.png` | **3:2**, min **2400×1600** | Retail / FMCG ops: store or supplier performance, quality scores, inventory signals; clean BI aesthetic. |

### B. Recommended **new** files for ecosystem product cards (optional)

Place under `public/images/products/` and wire in code when ready.

| # | Suggested file | Target ratio | Brief (2 lines) |
|---|----------------|--------------|-----------------|
| 10 | `products/platform-admin.png` | **3:2** | Admin console: tenant list, entitlements, theme/module toggles; suggests control plane, not end-user ERP. |
| 11 | `products/lift-erp.png` | **3:2** | Elevator service context: technician tablet or dispatch board with jobs, assets, AMC—industrial, trustworthy. |
| 12 | `products/security-service.png` | **3:2** | Abstract secure pipeline: file upload → scan → clean badge; lock/shield motifs subtle, not cheesy. |
| 13 | `products/spire-assessments.png` | **3:2** | Exam paper preview + question bank grid; academic, print-ready vibe; equations or diagrams plausible. |
| 14 | `products/billerhq.png` | **3:2** | Invoicing workspace: invoice list, GST/tax line items, payment status—SMB to mid-market feel. |
| 15 | `products/digital-marketing.png` | **3:2** | Campaign calendar or multi-panel social previews (IG/FB) with approval states; brand-safe, modern marketing UI. |

### C. Logos (`/public/images/logo/*`)

Keep **vector or high-res PNG**; do not stretch. No replacement needed unless rebranding.

---

## Part 4 — Count summary

- **9** existing marketing/case images to (re)generate or replace at paths in §3A.  
- **6** optional ecosystem product images (§3B).  
- **Total for a full refresh:** **15** raster marketing images + logos unchanged.

When you have files, drop them in `public/images/` (and `public/images/products/` if using §3B) keeping **exact filenames** so no code changes are required for §3A.
