# Stubbs' Rugs Landing Page

A landing page for **Stubbs' Rugs** — custom hand-tufted rugs made to order.

## Features

- Hero section with brand logo
- Gallery of 58+ product photos with lightbox
- About section
- Contact form (sends orders directly to Gmail via SMTP)
- Dark theme with electric blue accents

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact Form Setup (Gmail — same as Lovely Reds)

1. Copy `.env.local.example` to `.env.local`
2. Set `SMTP_USER` to your Gmail address (e.g. `stubbsrugz@gmail.com`)
3. Set `SMTP_PASS` to a [Google App Password](https://myaccount.google.com/apppasswords) — **not** your regular Gmail password

Orders are sent directly to `stubbsrugz@gmail.com` with subject `New Rug Order — [Name]`.

## Deploy to Vercel

Add these environment variables in the Vercel dashboard:

- `SMTP_USER` — your Gmail address
- `SMTP_PASS` — your Google App Password

Then redeploy.

## Tech Stack

- Next.js 16 (App Router)
- Tailwind CSS 4
- Nodemailer + Gmail SMTP (contact form emails)
- Vercel (hosting)
