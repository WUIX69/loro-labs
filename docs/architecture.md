# Loro Labs — Website Architecture

## Platform

Built on **Hostinger Website Builder** (Zyro/Zyrosite platform). Static site hosted on Hostinger infrastructure.

## Site Structure

```
Home (/)                    — Hero, services overview, about, team note, contact form, footer
├── Services (/services)    — Three service pillars + projects preview + contact form
├── Showcase (/showcase)    — Loro AI English Learning app feature
├── Pricing (/pricing)      — Pricing tiers for all services + contact form
├── Quote (/quote)          — Quote request form
├── Privacy Policy (/privacy-policy)
└── Terms and Conditions (/terms-and-conditions)
```

## Navigation

Sticky top nav with 5 links (Home, Services, Showcase, Pricing, Quote). Consistent footer across all pages with social links (Facebook, Instagram, TikTok), contact info, address, and legal links.

## Content & Media

- All images hosted on Hostinger's CDN (`assets.zyrosite.com`)
- Image optimization via `cdn-cgi/image/format=auto` with responsive `w` and `fit=crop` params
- Animated GIF content from MP4 sources
- Contact form (no backend visible — likely Hostinger's native form handler)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Builder | Hostinger Website Builder (Zyrosite) |
| Hosting | Hostinger |
| CDN | Zyrosite asset CDN with auto-format |
| Forms | Hostinger native (no custom backend) |
| Analytics | Bing tracking pixel |
| Auth | Hostinger auth (Google, Facebook, GitHub OAuth) |

## Mobile

Responsive design with stacked layouts on small screens. Social media links: Facebook, Instagram, TikTok.
