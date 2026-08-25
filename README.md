# BiziBees.ai — website

Nuxt 4 build of the BiziBees marketing site, converted from the Claude Design
canvas export (`Website from PDF about agentics.zip`).

## Running it

```bash
npm install
npm run dev
```

If `npm install` fails with `Cannot read properties of null (reading 'edgesOut')`,
that is a peer-resolution bug in npm 10.9.2, not this project. Use the committed
lockfile (`npm ci`) or `npm install --legacy-peer-deps`.

| Script | Does |
| --- | --- |
| `npm run dev` | Dev server on http://localhost:3000 |
| `npm run build` | Production build into `.output` |
| `npm run preview` | Serve the production build |
| `npm run generate` | Static prerender — the site has no server routes, so this works as-is |
| `npm run typecheck` | `vue-tsc` over the project |

## Layout of the code

```
app/
  assets/css/nocturne.css   design-system tokens + component classes (.btn, .card, .table, …)
  assets/css/site.css       page-level patterns shared across routes (.section, .wrap, .auto-grid, …)
  components/               SiteHeader, SiteFooter, BeeMark
  layouts/default.vue       header + main + footer shell
  pages/                    index, how-it-works, investors, waitlist
  types/page-meta.d.ts      typing for the custom page meta the layout reads
```

`nocturne.css` is the exported design system with the token block retuned to the
BiziBees palette — a citron accent (`--color-accent-300`) on a deep plum ground.
Change the brand there, not in the pages.

The pages carry no inline styles: repeated inline rules from the export became
either shared classes in `site.css` or scoped styles in the page that uses them.
Repeated content blocks (cards, stages, table rows, phases) are data arrays at the
top of each page's `<script setup>`, so copy edits happen in one place.

### Page meta

The default layout reads three optional keys off page meta, declared in
`app/types/page-meta.d.ts`:

- `stickyHeader` — float the header over the content (default `true`)
- `headerCta` — show "Join the waitlist" in the nav (default `true`)
- `footerNote` — extra line after the footer wordmark

`/waitlist` turns off the first two; `/investors` sets the third.

## Known gap

The waitlist form is front-end only: submitting flips it to the confirmation
state the design specifies, but nothing is sent anywhere. The `submit()` handler
in `app/pages/waitlist.vue` is where a POST to a real endpoint goes, along with
the error handling that an optimistic confirmation currently skips.
