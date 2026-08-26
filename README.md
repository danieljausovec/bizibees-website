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

`nocturne.css` is the exported design system, vendored close to verbatim so a
re-export diffs cleanly against it. The only local edits are marked `site:` in
the file: a `--font-mono` token and the link colours the pages assume. Change the
brand there, not in the pages.

The pages carry no inline styles: repeated inline rules from the export became
either shared classes in `site.css` or scoped styles in the page that uses them.
Repeated content blocks (cards, stages, table rows, phases) are data arrays at the
top of each page's `<script setup>`, so copy edits happen in one place.

### Page meta

The default layout reads two optional keys off page meta, declared in
`app/types/page-meta.d.ts`:

- `headerCta` — show "Join the waitlist" in the nav (default `true`)
- `footerTagline` — the one-line summary under the footer wordmark

`/waitlist` turns off the CTA, since it is where that CTA leads. Every page sets
its own tagline.

The footer's Product column lists the product pages minus the one you are on.
The export hard-codes those lists per page and omits Home on `/investors`; the
generalisation matches it everywhere else and adds the missing link.

## Known gap

The waitlist form is front-end only: submitting flips it to the confirmation
state the design specifies, but nothing is sent anywhere. The `submit()` handler
in `app/pages/waitlist.vue` is where a POST to a real endpoint goes, along with
the error handling that an optimistic confirmation currently skips.
