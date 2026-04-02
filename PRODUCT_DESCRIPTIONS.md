# Spire Product Descriptions

Based on the current product catalog in `docs/ECOSYSTEM_OVERVIEW.md` as of 2026-04-02.

## Platform Admin

**Very short**  
Spire's tenant governance and onboarding control plane.

**Short**  
Platform Admin is the ecosystem control plane used by Spire operators to create tenants, assign product access, manage themes, and bootstrap onboarding.

**Medium**  
Platform Admin is the central governance layer for the Spire Ecosystem. It manages tenant lifecycle, member provisioning, product and module entitlements, dashboard configuration, and theme assignment. It is the operational starting point before any tenant begins using Lift ERP, Assessments, Digital Marketing, or other Spire products.

**Detailed**  
Platform Admin is a multi-tenant control plane for ecosystem-wide setup and governance. It gives Spire admins a structured workflow to register customers, create tenant accounts, grant product access, seed member roles, and manage configuration such as themes, modules, and dashboard layouts. Rather than serving end-customer business operations directly, it ensures every tenant is onboarded consistently and that each product runs with the correct entitlements and configuration boundaries. In the Spire architecture, this is the canonical entry point for tenant onboarding, governance, and ecosystem operations.

## Lift ERP

**Very short**  
Elevator service, project, and contract operations ERP.

**Short**  
Lift ERP is Spire's field-service and project-execution product for elevator businesses, covering sales, installation, service, contracts, and billing-linked workflows.

**Medium**  
Lift ERP is an India-first, multi-tenant ERP for elevator companies. It supports customer and site management, lift asset tracking, service jobs, installation projects, quotations, warranty handling, and AMC/CAMC contract workflows. Billing and collections integrate with BillerHQ, while file uploads are protected through the shared Security service.

**Detailed**  
Lift ERP is the most mature tenant-facing product in the Spire Ecosystem and is positioned as the operational system for elevator businesses. It spans the lifecycle from lead and quotation through installation, handover, warranty, service visits, and recurring AMC/CAMC revenue management. The product combines CRM, asset registry, field operations, project tracking, auditability, mobile-friendly usage, and secure document workflows in one system. It is designed for branch-based, role-aware operations, with BillerHQ powering invoice and payment capabilities and the Security module enforcing malware scanning for uploads.

## Security

**Very short**  
Shared file scanning and upload security service.

**Short**  
Security is Spire's shared scanning product/module that verifies uploaded files before they are accepted by ecosystem applications.

**Medium**  
Security provides a reusable API and SDK layer for malware scanning across Spire products. It uses hash-based caching for fast clean-file decisions, cloud scanning for verification, and optional local-agent support for stricter environments. The service is designed to protect upload flows in products such as Lift ERP, BillerHQ, and Spire Assessments.

**Detailed**  
Security is a cross-product platform service focused on zero-trust file validation and malware detection. Its architecture combines file validation, hash lookups, cloud-based ClamAV scanning, optional local-first agent workflows, mismatch detection, and usage metering. The goal is to make secure upload handling reusable across the ecosystem rather than re-implementing scanning logic inside each product. In practice, it acts as a shared security layer that improves compliance, reduces operational risk, and standardizes how Spire applications handle documents, photos, and attachments.

## Spire Assessments

**Very short**  
Question bank and exam paper generation platform.

**Short**  
Spire Assessments is a structured question bank and paper engine for schools, institutes, and exam administrators.

**Medium**  
Spire Assessments helps academic teams ingest, review, and reuse scientific questions, then assemble print-ready exam papers from approved content. It supports question bank creation, review and approval workflows, paper composition, per-student variant generation, and answer-key mapping. The product is being built with future QR-linked and OMR-compatible evaluation flows in mind.

**Detailed**  
Spire Assessments is designed to replace manual, error-prone exam paper preparation with a structured, reusable academic workflow. It supports question intake from manual entry and source PDFs or images, preserves diagrams and scientific assets, and enables reviewers to approve questions before reuse. From that approved bank, exam composers can build master papers, generate deterministic student-wise variants, and export print-ready papers and aligned answer keys. The product is intended for institutes, schools, coaching centers, and exam operations teams that need academic correctness, print fidelity, and future-ready variant persistence for downstream evaluation workflows.

## BillerHQ

**Very short**  
Multi-tenant billing and invoicing platform.

**Short**  
BillerHQ is Spire's standalone billing product for invoicing, payments, collections, compliance-ready billing, and reporting.

**Medium**  
BillerHQ is a multi-tenant billing platform built for shops, MSMEs, and larger organizations. It supports customers, products and services, invoicing, payments, credit and debit notes, recurring billing, exports, and reporting. It is India-first for GST readiness while also being structured for multi-currency and broader global tax models.

**Detailed**  
BillerHQ is positioned as Spire's reusable commerce and billing layer, capable of running both as a standalone product and as a billing module inside other applications such as Lift ERP. Its scope includes tenant onboarding, customer and catalog management, invoice creation, payment recording, outstanding tracking, tax-aware billing, recurring invoices, audit trails, and integration-friendly APIs. The product is designed to scale from small merchants to larger multi-branch organizations, with a strong emphasis on tenant isolation, role-based controls, compliance readiness, and reporting. In the ecosystem, it serves as both an independent revenue product and a shared billing foundation.

## Spire Digital Marketing

**Very short**  
AI-powered branded campaign content automation platform.

**Short**  
Spire Digital Marketing is an AI-assisted content operations product for creating, approving, and publishing branded marketing assets across social channels.

**Medium**  
Spire Digital Marketing helps businesses turn brand knowledge, offerings, and regional context into platform-ready campaign content. The MVP focuses on onboarding brand context, generating multilingual variants, supporting approval workflows, and publishing or exporting assets for Instagram, Facebook, and WhatsApp. It is designed as an enterprise-ready admin product rather than a simple post generator.

**Detailed**  
Spire Digital Marketing is an AI-powered content automation platform for businesses that need faster, more consistent campaign execution across social and messaging channels. It centralizes brand context, offerings, languages, regions, and source content, then uses AI to generate multiple platform-specific content variants with review and approval before publication. The product targets fragmented marketing workflows where branding, localization, and speed are difficult to manage manually. Within the Spire Ecosystem, it can operate as a standalone tenant-facing product or as a product granted and governed through Platform Admin.
