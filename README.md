# Scroll-Driven Hero Animation

A premium hero section built with Next.js, Tailwind CSS, and GSAP ScrollTrigger.

The page focuses on smooth intro motion, scroll-linked transformation, and clean visual hierarchy for frontend internship evaluation.

## Demo Focus

- Cinematic hero with animated headline and metric cards
- Scroll-driven car movement tied to page progress
- Responsive animation tuning for mobile and desktop
- Performance-oriented animation using transform-based motion

## Tech Stack

- Next.js (App Router, TypeScript)
- React
- Tailwind CSS
- GSAP + ScrollTrigger

## Project Structure

```text
src/
  app/
    components/
      HeroSection.tsx
    layout.tsx
    page.tsx
public/
  car-top-view.svg
```

## Local Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build and Lint

```bash
npm run lint
npm run build
```

## Animation Notes

- Intro sequence uses a GSAP timeline for:
  - letter-by-letter headline reveal
  - staggered stat card entrance
  - car entry transition
- Scroll sequence uses `ScrollTrigger` with `scrub`:
  - car position, scale, and rotation linked to scroll progress
  - headline parallax/fade on scroll
  - mobile-specific reduced-intensity motion via `gsap.matchMedia()`

## Deployment

Deploy easily on [Vercel](https://vercel.com/).

For static-only hosting (for example GitHub Pages), configure static export in `next.config.ts` and deploy the generated output.
