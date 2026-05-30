---
name: entityos-io-website
description: "Build, extend, and maintain the entityos.io website — the public marketing and security site for entityOS. Use this skill whenever the user asks to edit entityos.io, add or change a page, work on the homepage sections (home, what, learn, security, tools, repos, contact), build or update a /security/* sub-page (the-moment, the-mindset, the-solution, implementation, stage-1-ip, stage-2-mtls, reward), or produce anything that must match the entityos.io structure, routes, and navigation. For the underlying Glint design system (colours, fonts, component CSS, icon SVGs), also load the entityos-ecosystem skill — this skill covers the site map and conventions; that one covers the visual system."
---

# entityOS.io Website

`entityos.io` is the public marketing and security site for **entityOS**, the cloud operating system built by **ibCom** (Australia). It is a static, self-contained set of HTML pages deployed behind a Content-Security-Policy. This skill captures the site's structure, routes, and build conventions so changes stay consistent.

> For the full visual design system (colour tokens, typography, component CSS, the inline-SVG icon library, the alternating section rhythm), load the **entityos-ecosystem** skill alongside this one. This skill assumes that system and only records what is specific to entityos.io.

---

## Site identity

- **Domain:** `entityos.io`
- **Title:** `entityOS — A cloud operating system for entities.`
- **Tagline:** "A cloud operating system for entities."
- **Owner:** ibCom Pty Ltd, Australia
- **Compliance:** ISO 27001 Compliant (`https://docs.entityos.cloud/protect`)
- **Source repo:** `https://github.com/ibcom-lab/entityos-io`

`entityos.io` is the security-and-marketing front door. The product itself, docs, console, and learning material live on sibling domains (see Ecosystem).

---

## Route map

The site is one long single-page homepage plus a family of standalone `/security/*` pages. Always use these exact paths — the navigation and cross-links depend on them.

| Route | Page | Status |
|---|---|---|
| `/` | Homepage (all sections below) | Live |
| `/security/stage-1-ip` | Security guide — Stage 1: IP allowlisting | Available |
| `/security/stage-2-mtls` | Security guide — Stage 2: mTLS + X.509 | Coming soon |
| `/security/the-moment` | Why the closed internet — "The Moment" | Live |
| `/security/the-mindset` | The new security mindset | Live |
| `/security/the-solution` | The entityOS solution | Live |
| `/security/implementation` | How entityOS implements stages 1 & 2 | Live |
| `/security/reward` | Security Reward Program (responsible disclosure / bounty) | Live |

New security pages follow the `/security/{slug}` pattern and are surfaced as styled links inside the homepage **Security** section (and optionally the footer).

---

## Homepage section order

The homepage follows the entityos.cloud Glint rhythm. Sections, in order, with their anchors:

1. **Hero** — `#home` (dark). Eyebrow "entityOS", `display-1` headline "A cloud operating system for entities.", sub copy on Cloud/SSI/Blockchain/AI, CTAs **Start Learning** (`learn.entityos.cloud`) and **entityOS.cloud**, and entity pills: Individuals · Organisations · Collectives · DAOs.
2. **What Is entityOS?** — `#what` (green strip). Heading "Designed to liberate." Four entity cards: Individual, Organisation, Collective, DAO.
3. **Learn** — `#learn` (white). Heading "Five pillars. One platform." Pillar cards: Cloud, Continuity, SSI, On-Chain, AI.
4. **Security** — `#security` (dark). Heading "A staged approach to enterprise security." Two stage cards (Stage 01 IP Allowlisting — available; Stage 02 mTLS + X.509 — coming soon) plus the `/security/*` sub-page link list.
5. **Tools & Services** — `#tools` (grey). Heading "Everything you need to build and run." Cards: entityOS.cloud (Platform), Console (Developer), ORG (Application — `org.entityos.app`).
6. **Repos** — `#repos` (dark). Heading "Built in public." Cards link to the `ibcom-lab` GitHub repos (see Ecosystem).
7. **Contact / Get Started** — `#contact` (conclusion, deep dark). Heading "Start building on entityOS today.", note "Developer version is free forever. No credit card required.", links to Learn / Docs / Console / GitHub, and the ISO 27001 Compliant badge.
8. **Footer** — logo, quick links (Learn, Docs, Console, GitHub, Security), copyright "ibCom 2025", ISO 27001 link, and "Report an Issue" → `docs.entityos.cloud/reward`.

Header nav (fixed, transparent → opaque on scroll): **Learn · Security · Tools · Repos · Console** (Console is the green `.btn-nav` linking to `console.entityos.cloud`).

---

## The five pillars

Used in the Learn section and across the ecosystem:

| Pillar | One-liner |
|---|---|
| **Cloud** | 700+ API methods for any entity type — the core platform. |
| **Continuity** | Automation engine for workflows and event-driven processing. |
| **SSI** | Self-sovereign identity for verifiable credentials (KERI / ACDC). |
| **On-Chain** | Cardano blockchain integration for tokens and decentralised storage. |
| **AI** | AI agent integration and automation on the entityOS platform. |

The four entity types (Individual, Organisation, Collective, DAO) are the audience framing used in the hero pills and the "What Is entityOS?" section.

---

## Security narrative & Reward Program

entityos.io frames security as a **staged approach to a closed internet** — the public internet is treated as hostile, and access is gated in layers:

- **Stage 1 — IP allowlisting** (network-layer control; available now)
- **Stage 2 — mTLS + X.509** (cryptographic per-connection identity; coming soon)
- Backed by **self-sovereign identity** (KERI / ACDC) for credential-level trust.

The supporting essays (`the-moment`, `the-mindset`, `the-solution`, `implementation`) carry this argument; the driver referenced is AI-accelerated threat capability.

### `/security/reward` — the Reward Program

A responsible-disclosure / bounty page in the Glint theme. Key facts to keep consistent:

- Reporting is via a **single form, not email**: `https://forms.gle/AT249RsTWLESWTkJ6`. Do not reintroduce a `mailto:` flow.
- Reward tiers (indicative, AUD, at entityOS's discretion):
  - **Critical** A$600 – A$1,000 (allowlist/mTLS bypass, RCE, SSI credential forgery, cross-tenant data exposure)
  - **High** A$400 – A$600 (auth bypass, IAM privilege escalation, cert validation flaw)
  - **Medium** A$200 – A$400 (stored XSS in sensitive context, IDOR, logic flaw)
  - **Low** Recognition + A$50 – A$200 (minor info disclosure, non-sensitive misconfig)
- In scope: closed-internet edge, mTLS/PKI, SSI, serverless Lambda factories + API Gateway, S3/allowlist storage, web & console surfaces.
- Disclosure lifecycle: Report → Acknowledge → Triage → Remediate → Reward & credit. Safe-harbour for good-faith research; ~90-day disclosure window.

---

## Ecosystem (linked properties)

| Property | Role |
|---|---|
| `entityos.cloud` | Core platform / main marketing site (Glint theme) |
| `console.entityos.cloud` | Developer console, sign-up, API keys |
| `learn.entityos.cloud` | SDK guides and quickstarts |
| `docs.entityos.cloud` | API documentation (`/protect` = security/ISO, `/reward` = report an issue) |
| `org.entityos.app` | ORG — organisation management app built on entityOS |
| `github.com/ibcom-lab` | Open-source org |

### `ibcom-lab` repositories surfaced on the site

`entityos-sdk`, `entityos-sdk-layers`, `entityos-model`, `entityos-learn-aws`, `entityos-learn-continuity`, `entityos-learn-ssi`, `entityos-learn-onchain`, `entityos-learn-ai`, `entityos-learn-identity-trust`, `entityos-io` (this site).

---

## Build conventions

- **Single self-contained `.html` per page.** All CSS in one `<style>` block in `<head>`; one `<script>` block before `</body>` (progress bar, header opacity on scroll past 150px, smooth scroll, IntersectionObserver reveals).
- **Fonts:** Montserrat (headings/labels), Lora (body), JetBrains Mono (code/identifiers/footer) via the single Google Fonts import. `html { font-size: 10px; }` so all `rem` values are base-10.
- **Green accent:** `#39b54a` (hover `#2ea03d`); dark backgrounds `#0c0c0c` / `#111` / `#151515`; grey `#e6e6e6`.
- **Icons are inline SVG only.** Never use the Lucide CDN script or `data-lucide` — the deployed site's CSP blocks external scripts and they render blank. Copy SVG paths inline with `fill="none" stroke="currentColor"` and size/colour via CSS.
- **Logo:** the entityOS horizontal logo embedded as a base64 PNG with a transparent background (nav ~160px, footer ~140–150px). Favicon is a base64 PNG.
- **Cross-links:** internal pages use root-relative paths (`/security/...`); ecosystem links are absolute `https://` URLs.
- **Reveal animation:** elements with `.reveal` / `.reveal-target` start `opacity:0; translateY(20px)` and gain `.visible` via IntersectionObserver, staggered with `transitionDelay`.
- Keep the **agents.json** manifest (site root and/or `/.well-known/agents.json`) in sync when routes, the reward program, or ecosystem links change.

---

## Checklist before delivering an entityos.io change

- [ ] Matches the Glint design system (load entityos-ecosystem skill) — green accent, section rhythm, fonts.
- [ ] Routes use the exact `/security/{slug}` paths; new security pages are linked from the homepage Security section.
- [ ] Header nav and footer links unchanged unless intentionally updating them.
- [ ] Icons are inline SVG; no Lucide CDN / `data-lucide`.
- [ ] Logo + favicon embedded as transparent base64 PNGs.
- [ ] Reward page still uses the Google Form (no `mailto:`), with the current reward tiers.
- [ ] ISO badge reads "ISO 27001 Compliant" linking to `docs.entityos.cloud/protect`.
- [ ] `agents.json` updated if the route map, reward program, or ecosystem changed.
