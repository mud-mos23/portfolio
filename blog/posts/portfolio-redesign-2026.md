---
title: "Portfolio Redesign 2026 — Full Visual Tour"
date: "2026-07-08"
excerpt: "A complete visual tour of my redesigned portfolio: hero section, blog system, projects showcase, and what I learned building it."
---

I redesigned my portfolio from the ground up. Here's a visual tour of every section.

## Hero Section

The landing area introduces who I am and what I build. Clean typography, green accent, and key stats cards.

![Hero Section](/portfolio/assets/screenshots/hero-section.png)

**Design choices:**
- Minimal navigation with logo mark
- Large display typography (clamp 36-64px)
- Accent green (#1DB954) for emphasis
- Stats cards showing GitHub presence

## Blog Listing

The blog listing page loads dynamically from index.json. It shows post titles, dates, excerpts, and a recent posts sidebar.

![Blog Listing](/portfolio/assets/screenshots/blog-listing.png)

**How it works:**
1. I write posts as Markdown files in `blog/posts/`
2. A Node.js build script parses frontmatter + Markdown → generates HTML
3. The listing page fetches `index.json` and renders cards dynamically
4. GitHub Actions runs the build on every push

Currently **28 articles** on tech, accounting, ERP, and development.

## Article View

Each blog post has a clean reading layout with proper typography, blockquotes, code blocks, and inline code highlighting.

![Blog Post](/portfolio/assets/screenshots/blog-post.png)

**Features:**
- Automatic syntax highlighting for code blocks
- Blockquote styling with green left border
- Responsive typography scale
- Back navigation to blog listing

## Projects Section

The projects section showcases my work with cards showing title, description, and tech stack tags.

![Projects Section](/portfolio/assets/screenshots/projects-section.png)

**Currently featured:**
- **MusicPliz** — React Native Web music player with YouTube streaming
- **FinDash** — Financial analysis dashboard with Streamlit & Plotly
- **FraudShield** — ML fraud detection with Isolation Forest
- **AuditFlow** — Automatic accounting audit with PCG rules
- **Bubely ERP** — Full ERP with 12 Django modules
- **Nstup Taste** — Anti-slop design system

## Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML + CSS | Structure and styling |
| JavaScript | Dynamic blog loading |
| Node.js | Blog build script |
| GitHub Actions | CI/CD deployment |
| GitHub Pages | Hosting |

## What I Learned

Building a portfolio is iterative. The key decisions:

1. **No frameworks** — vanilla HTML/CSS/JS loads faster than any React portfolio ever could
2. **Markdown blog** — writing in Markdown and building to static HTML is the sweet spot between flexibility and simplicity
3. **Dynamic listing** — fetching JSON keeps the listing page fast without server-side rendering
4. **GitHub Actions** — automate the blog build so I just write and push

The full source is on [GitHub](https://github.com/mud-mos23/portfolio).
