# tylerchambers.com — CLAUDE.md

## Project
Personal portfolio site for Tyler Chambers. Next.js 14 App Router, Tailwind CSS, MDX blog, deployed on Vercel.

## Stack
- Next.js (App Router, TypeScript strict mode, Turbopack)
- Tailwind CSS with CSS custom properties for theming
- Framer Motion (animations — use sparingly)
- Resend for contact form email
- react-hook-form + zod for form validation
- Vercel Analytics

## File Structure
src/
  app/           → App Router pages and layouts
  components/    → Shared UI components
  components/ui/ → Primitive UI elements (buttons, inputs, etc.)
  content/blog/  → MDX blog posts
  content/       → profile.ts (single source of truth for bio/career data)
  lib/           → Utilities (email, helpers)
  styles/        → Global CSS, design tokens

## Code Style
- TypeScript strict mode, no `any`
- Named exports for all components
- CSS variables for all colors (dark/light mode via prefers-color-scheme)
- No inline styles except dynamic/computed values
- Framer Motion only for meaningful transitions — no decorative animation
- All images through next/image
- zod schemas for all form validation

## Design System
Dark-mode first, system-aware (respects prefers-color-scheme).

Colors (defined as CSS variables in src/styles/tokens.css):
  --color-bg:         #0A0A0F  (dark) / #F5F5F0  (light)
  --color-surface:    #13131A  (dark) / #EBEBЕ6  (light)
  --color-text:       #E8E8E0  (dark) / #1A1A24  (light)
  --color-muted:      #8B8B9A
  --color-accent:     #4F8EF7  (electric blue — used sparingly)
  --color-border:     #2A2A35  (dark) / #D0D0C8  (light)

Typography:
  Display: Geist (next/font)
  Body: Inter (next/font)
  Mono: JetBrains Mono (next/font) — for stats, data callouts

## Content (Single Source of Truth)
All personal data lives in src/content/profile.ts:
- Bio, career timeline, skills, project descriptions
- Never duplicate this data in page files

## Pages
/ → Hero with animated stat counters + CTAs
/about → Photo, narrative bio, Neural Code Labs mention
/experience → Interactive vertical timeline + downloadable resume
/skills → Skill matrix organized by category
/projects → TRACE (described without proprietary detail) + Neural Code Labs
/blog → MDX articles
/contact → Form + email + Calendly link

## What This Site Communicates
Tyler bridges 15+ years of industrial operations expertise (NDT QA/QC, data analysis, pulp & paper) with modern software, AI, and business skills. He designed and oversaw development of an enterprise NDT analysis platform (TRACE). He also runs Neural Code Labs (marketing/consulting/software).

Tone: confident, precise, professional — not corporate. Not a typical tech bro portfolio. The industrial + software combination is the differentiator.

## Social Links
- LinkedIn
- GitHub
- X (Twitter)
- Instagram

## Deployment
- GitHub repo: tylerchambers-site
- Vercel: auto-deploy from main branch
- Domain: tylerchambers.com
- Never commit .env.local
- Env vars set in Vercel dashboard