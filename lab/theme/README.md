# entityOS Learn · Jekyll Theme

A GitHub Pages Jekyll theme for [learn.entityos.cloud](https://learn.entityos.cloud) — the learning hub for the entityOS cloud operating system.

## Structure

```
├── _config.yml               # Jekyll site configuration
├── _layouts/
│   ├── entityos.html         # Base layout (nav + footer + scripts)
│   ├── home.html             # Home page layout (extends entityos)
│   └── guide.html            # Guide/doc layout with sidebar (extends entityos)
├── _includes/
│   ├── entityos-nav.html     # Fixed top navigation with dropdown + mobile menu
│   ├── entityos-sidebar.html # Sticky sidebar navigation for guide pages
│   └── entityos-footer.html  # Multi-column footer with theme toggle
├── assets/
│   ├── css/
│   │   └── entityos.css      # Full design system (tokens, components, layouts)
│   └── js/
│       └── entityos.js       # Theme toggle, nav scroll, mobile menu, TOC, copy buttons
├── index.html                # Home page
├── learn-quick-start.md      # Example guide page
└── Gemfile
```

## Layouts

### `entityos` (base)
All pages extend this. Provides: `<head>`, nav, optional page-hero, main wrapper, footer, scripts.

**Front matter options:**
```yaml
title: "Page Title"
description: "Meta description"
hero: "Hero heading text"        # Shows page hero section if set
subtitle: "Hero subtitle"
section: "Section label"         # Eyebrow above hero title
breadcrumbs:
  - label: "Parent"
    url: /parent
  - label: "Current Page"
body_class: "extra-class"
toc: true                        # Enable auto-generated TOC in sidebar
layout_sidebar: true             # Enable sidebar layout
custom_css: /assets/css/page.css
custom_js: /assets/js/page.js
```

### `home`
Extends `entityos`, sets `body_class: home`. Use for the index page.

### `guide`
Extends `entityos`, enables `layout_sidebar: true`. Use for all guide/doc pages.

## Design Tokens

All colours use CSS variables defined in `:root` with full dark mode support via `[data-theme="dark"]`.

| Token | Light | Dark |
|-------|-------|------|
| `--bg` | `#f8f9fc` | `#0b0f1a` |
| `--surface` | `#ffffff` | `#131929` |
| `--text` | `#0d1421` | `#e8edf7` |
| `--accent` | `#0052CC` | `#0052CC` |
| `--muted` | `#4a5568` | `#a0aec0` |

## Components

- **`.btn-primary`** — pill-shaped filled button
- **`.btn-secondary`** — pill-shaped outline button
- **`.qs-card`** — Quick Start link card with hover accent bar
- **`.guide-card`** — Guide listing card
- **`.usecase-card`** — Use case card
- **`.builtOn-card`** — Built-on-entityOS card
- **`.step-item`** — Numbered step with title and description
- **`.callout`** + `.callout-info / -warn / -success` — Highlighted notices
- **`.reveal`** — Scroll-triggered fade-up animation

## Usage

```bash
bundle install
bundle exec jekyll serve
```

## GitHub Pages

Push to a GitHub repository with Pages enabled. In `_config.yml` set:

```yaml
url: "https://yourusername.github.io"
baseurl: "/your-repo"   # or "" if at root
```

Add the `github-pages` gem instead of standalone `jekyll` if deploying via GitHub Actions.
