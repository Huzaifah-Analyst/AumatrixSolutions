# Aumatix Solutions — Project Context File
> Yeh file multiple AI agents ke liye hai taake sab ko poora context mile aur kaam continue ho sake.
> Last Updated: 2026-05-22

---

## 1. PROJECT OVERVIEW

**Company:** Aumatix Solutions  
**Type:** AI, Web & Automation Agency  
**Location:** Rawalpindi / Islamabad, Pakistan  
**Founders:** Huzaifah + Affan  
**Fiverr:** https://www.fiverr.com/huzaifah273  
**GitHub:** https://github.com/Huzaifah-Analyst  

**Contact Info (Real):**
- Email: AumatixSolutions@gmail.com (business) / huzaifahnaseer377@gmail.com (personal)
- WhatsApp: +92 336 151 0430

---

## 2. WEBSITE — TECH STACK

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite 5 |
| Styling | Tailwind CSS 3 + Custom CSS variables |
| Animations | Framer Motion 11 |
| Icons | Lucide React |
| Backend API | Vercel Serverless Functions (`api/` folder) |
| Email Service | Resend API |
| Deployment | Vercel |
| Repo | https://github.com/Huzaifah-Analyst/AumatrixSolutions |

---

## 3. PROJECT FILE STRUCTURE

```
aumatix/
├── api/
│   └── contact.js          ← Vercel serverless function (Resend email)
├── public/
│   ├── favicon.svg         ← Blue rounded square + lightning bolt
│   ├── huzaifah.jpg        ← Team photo
│   └── affan.jpg           ← Team photo
├── src/
│   ├── components/
│   │   ├── Header.jsx      ← Fixed nav, mobile menu, glassmorphism
│   │   ├── Hero.jsx        ← Landing section, stats, floating badges
│   │   ├── Services.jsx    ← 6 service cards
│   │   ├── Work.jsx        ← Portfolio — 6 projects (1 featured)
│   │   ├── Team.jsx        ← 2 founders + company values
│   │   └── Contact.jsx     ← Contact form + footer
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           ← CSS variables, reusable classes
├── index.html              ← Meta tags, favicon, fonts
├── vercel.json             ← Vercel build + API routing config
├── package.json            ← Dependencies incl. resend
├── tailwind.config.js
├── vite.config.js
└── PROJECT_CONTEXT.md      ← This file
```

---

## 4. PORTFOLIO PROJECTS (Work.jsx)

| # | Project | Status | Live Link | Client |
|---|---|---|---|---|
| 1 | Bennett Motor Werks | ✅ LIVE (Featured) | https://bennett-motor-werks.vercel.app | Dallas, USA |
| 2 | Node Graph Editor (AliceNumbers) | ✅ LIVE | https://node-graph-ten.vercel.app/ | Australia |
| 3 | Certificate Automation System | No live link | — | Turkey |
| 4 | USPS Tracking Bot | No live link | — | Spain |
| 5 | Aluminum Zemer v2 | ✅ LIVE | https://alumyj.com | Israel |
| 6 | LeadGen Pro | No live link | — | USA |

**Featured project** = Bennett Motor Werks (dark theme, 2-col layout at top)  
**Projects with `link: '#'`** = Certificate Automation, USPS Bot, LeadGen Pro (no deployment)

---

## 5. WHAT HAS BEEN DONE (Chronological)

### Phase 1 — Analysis & Fixes
- Website analyzed and scored **6.2/10** initially
- Fixed WhatsApp link → `https://wa.me/923361510430`
- Fixed email → `huzaifahnaseer377@gmail.com`
- Removed "Gani Gursoy" from Trusted By section (Hero.jsx)
- Fixed `#about` nav link → `#team` (no #about section existed)
- Fixed copyright year 2025 → 2026
- Removed broken external screenshot (`https://bennett-motor-werks.vercel.app/screenshot.png` — file didn't exist) → replaced with clean dark gradient preview
- Added Fiverr real link → `https://www.fiverr.com/huzaifah273`
- Added Aluminum Zemer live link → `https://alumyj.com`
- Added `View` button on portfolio cards that have live links
- Added favicon (`public/favicon.svg`) — blue rounded square + lightning bolt

### Phase 2 — Portfolio Expansion
- Analyzed all project folders on D:\ drive:
  - `d:/aluminum zemer` — Aluminum Zemer v2
  - `d:/dominic/node-graph-editor` — Node Graph Editor
  - `d:/lead gen/leadgen-pro` — LeadGen Pro
  - `d:/fiverr client` — Bennett Motor Werks
- Updated Aluminum Zemer description (bilingual Hebrew/Arabic e-commerce)
- Updated AliceNumbers → renamed to "Node Graph Editor — AliceNumbers" with accurate description
- Added **LeadGen Pro** as new portfolio entry (was missing)
- Deployed Node Graph Editor to Vercel → https://node-graph-ten.vercel.app/
- Added live link for Node Graph Editor in portfolio

### Phase 3 — Email Backend
- Integrated **Resend API** for real contact form emails
- Created `api/contact.js` as Vercel serverless function
- Added `resend` to package.json dependencies
- Contact.jsx updated with real fetch call, loading state, error handling
- Added `vercel.json` for proper Vercel build + API routing config
- TO email set to `AumatixSolutions@gmail.com`
- FROM email: `onboarding@resend.dev` (Resend free tier default sender)

---

## 6. ERRORS & ISSUES FACED

| Error | Cause | Fix Applied |
|---|---|---|
| `node_modules` committed to git | No `.gitignore` existed | Added `.gitignore`, ran `git rm -r --cached node_modules` |
| SSH push failed | SSH key not configured on machine | Switched remote URL to HTTPS |
| `backend/` folder approach abandoned | User wanted Vercel not Render | Moved to `api/` folder (Vercel serverless functions) |
| Contact form not sending email | Form was fake — `setSent(true)` only, no API call | Connected to real `/api/contact` endpoint |
| Screenshot image 404 | External URL `screenshot.png` didn't exist | Replaced with clean dark gradient div |
| `#about` link going nowhere | No section with `id="about"` in the app | Changed nav link to `#team` |

---

## 7. CURRENT STATUS — What's Working

| Feature | Status |
|---|---|
| Website design & animations | ✅ Working |
| Mobile responsive layout | ✅ Working |
| Portfolio with 6 projects | ✅ Working |
| 3 live project links | ✅ Working |
| Favicon | ✅ Working |
| WhatsApp link | ✅ Working |
| Fiverr profile link | ✅ Working |
| GitHub push (AumatrixSolutions repo) | ✅ Up to date |
| Contact form → email via Resend | ✅ Working — emails arriving at aumatixsolutions@gmail.com |

---

## 8. PENDING / NOT YET DONE

### Critical
- [x] **Contact form email** — ✅ WORKING. Emails arrive at aumatixsolutions@gmail.com via Resend API.

### High Priority
- [ ] **LinkedIn URL** — Footer LinkedIn `href="#"` hai (real profile URL nahi mili)
- [ ] **Upwork profile URL** — Footer Upwork `https://www.upwork.com` (homepage, profile nahi)
- [ ] **Open Graph meta tags** — Social sharing ke liye (WhatsApp/LinkedIn preview blank aata hai)

### Medium Priority
- [ ] **Website Vercel deployment** — Website ka live URL confirm karna (AumatrixSolutions repo Vercel pe deploy hua ya nahi)
- [ ] **Contact form** — Actual real email test confirm karna
- [ ] **robots.txt + sitemap.xml** — SEO ke liye

### Nice to Have
- [ ] `prefers-reduced-motion` — Accessibility, animations disable for users who prefer it
- [ ] `aria-label` on mobile menu button
- [ ] Image lazy loading on team photos

---

## 9. ENVIRONMENT VARIABLES NEEDED

### Vercel Dashboard → AumatrixSolutions project → Settings → Environment Variables

| Variable | Value | Where Used |
|---|---|---|
| `RESEND_API_KEY` | `re_5eDwymd6_BoUDiZb5hrSdJjHzSEqtDHF2` | `api/contact.js` — Resend email sending |
| `TO_EMAIL` | `AumatixSolutions@gmail.com` | `api/contact.js` — where form submissions go |

**Important:** After adding env vars → Vercel → Deployments → Redeploy latest deployment

---

## 10. KEY CODE LOCATIONS

| What | File | Line |
|---|---|---|
| Contact form submit logic | `src/components/Contact.jsx` | L9-26 |
| API endpoint | `api/contact.js` | Full file |
| Portfolio projects array | `src/components/Work.jsx` | L4-89 |
| Trusted By clients | `src/components/Hero.jsx` | L10 |
| Nav links | `src/components/Header.jsx` | L5-11 |
| Footer links (LinkedIn, Fiverr, Upwork) | `src/components/Contact.jsx` | L199-208 |
| CSS variables (colors) | `src/index.css` | L1-20 |

---

## 11. GITHUB REPOS

| Repo | URL | What |
|---|---|---|
| Main website | https://github.com/Huzaifah-Analyst/AumatrixSolutions | React frontend + Vercel API |
| Node Graph Editor | https://github.com/Huzaifah-Analyst/Node-graph | Dominic Cooper's math tool |

---

## 12. NEXT STEPS FOR ANY AI AGENT

If you are picking up this project, here is what to do next in order:

1. **Fix contact form email** — Check Vercel function logs, verify Resend env vars are set
2. **Add LinkedIn + Upwork real URLs** — Ask user for their profile URLs
3. **Add Open Graph tags** — In `index.html`, add `og:title`, `og:description`, `og:image`
4. **Deploy website to Vercel** — Confirm live URL and update CORS if needed
5. **Test full form flow** — Submit form → confirm email received at AumatixSolutions@gmail.com

---

## 13. SCORE HISTORY

| Stage | Score | Notes |
|---|---|---|
| Initial analysis | 6.2/10 | Fake form, broken links, no favicon |
| After Phase 1+2 fixes | 6.8/10 | Real links, favicon, portfolio updated |
| Target | 8.5/10 | After form works + OG tags + LinkedIn |
