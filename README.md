# Bizibees website (Nuxt 4)

Marketing site plus Sign in / Sign up pages for Bizibees.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (Node server in .output/)
npm run preview    # run the production build locally
npm run generate   # static site in .output/public (API routes won't run)
```

Node 20+ is required.

## Routes

| Route      | File                     |
|------------|--------------------------|
| `/`        | `app/pages/index.vue`    |
| `/sign-in` | `app/pages/sign-in.vue`  |
| `/sign-up` | `app/pages/sign-up.vue`  |
| `POST /api/sign-up` | `server/api/sign-up.post.ts` (stub) |
| `POST /api/sign-in` | `server/api/sign-in.post.ts` (stub) |

## Where to change things

- **Logo** – put your file in `public/` (e.g. `public/logo.svg`) and set `LOGO_SRC`
  in `app/components/AppLogo.vue`. Replace `public/favicon.svg` too.
- **Colours, fonts, spacing** – CSS variables at the top of `app/assets/css/main.css`.
  `--accent` is the honey yellow used for buttons and highlights.
- **Landing page sections** – one component each in `app/components/landing/`
  (Hero, Products, Flow, MultiCompany, AiApi, Compliance, Pricing, Accountants, FinalCta).
- **Prices** – `app/components/landing/Pricing.vue` (currently `[PRICE]` placeholders).
- **Header / footer links** – `app/components/SiteHeader.vue`, `SiteFooter.vue`.

## Sign up / sign in

The sign-up form collects **account name** and **email**, validates them on the
client and on the server, then shows a “Check your inbox” confirmation.
The landing page’s bottom email box pre-fills the sign-up email (`/sign-up?email=…`).

Both API routes are stubs — connect them to your backend (see the TODOs in
`server/api/`). Sign-in should set a secure httpOnly session cookie and redirect to
the app dashboard once it exists.

The API code sample in the “AI & open API” section is illustrative only.
