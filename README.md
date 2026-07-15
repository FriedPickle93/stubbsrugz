# Stubbs' Rugs Landing Page

A landing page for **Stubbs' Rugs** — custom hand-tufted rugs made to order.

## Features

- Hero section with brand logo
- Gallery of 58+ product photos with lightbox
- About section
- Contact form (powered by Resend)
- Dark theme with electric blue accents

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact Form Setup

1. Create a free account at [resend.com](https://resend.com)
2. Copy `.env.local.example` to `.env.local`
3. Set `CONTACT_EMAIL` to your email
4. Set `RESEND_API_KEY` to your Resend API key

Until these are configured, the form shows a friendly "not configured" message.

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Add `CONTACT_EMAIL` and `RESEND_API_KEY` as environment variables
4. Deploy

## Tech Stack

- Next.js 16 (App Router)
- Tailwind CSS 4
- Resend (contact form emails)
- Vercel (hosting)
