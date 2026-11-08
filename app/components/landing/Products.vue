<template>
  <section id="products" class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Products</span>
        <h2 class="h2">Replace four to six tools with one connected platform.</h2>
        <p class="lead">Enter your data once. Catalogue, checkout, invoicing and customers share it — so nothing is retyped, and nothing goes missing.</p>
      </div>

      <div class="grid">
        <article class="card product">
          <div class="product__text">
            <span class="icon-tile"><AppIcon name="box" :size="20" :stroke="1.8" /></span>
            <h3>Catalogue</h3>
            <p>One list of products and prices, used everywhere. Change a price once and every link and invoice follows.</p>
          </div>
          <div class="mock" aria-hidden="true">
            <div class="mock-row"><strong>Consulting hour</strong><span class="muted">€ / hour</span></div>
            <div class="mock-row"><strong>Online course · Level 1</strong><span class="muted">digital</span></div>
            <div class="mock-row"><strong>Workshop ticket</strong><span class="muted">event</span></div>
          </div>
        </article>

        <article class="card product">
          <div class="product__text">
            <span class="icon-tile"><AppIcon name="link" :size="20" :stroke="1.8" /></span>
            <h3>Checkout &amp; payment links</h3>
            <p>A branded payment page, or a link to share by email, chat or social. Customers pay by card, wallet or bank — no web shop needed.</p>
          </div>
          <div class="mock" aria-hidden="true">
            <div class="mock-row mono link-row"><AppIcon name="lock" :size="14" :stroke="2" />bizibees.eu/pay/workshop</div>
            <div class="chips"><span>Copy link</span><span>Email</span><span>QR code</span></div>
          </div>
        </article>

        <article class="card product">
          <div class="product__text">
            <span class="icon-tile"><AppIcon name="file" :size="20" :stroke="1.8" /></span>
            <h3>Invoicing</h3>
            <p>Invoices created automatically after each payment, or by hand. Correct VAT, correct numbering, ready for e-invoicing.</p>
          </div>
          <div class="mock" aria-hidden="true">
            <div class="mock-row"><span class="mono">2026-SI-0142</span><span class="pill pill--paid">PAID</span></div>
            <div class="mock-row"><span class="mono">2026-SI-0143</span><span class="pill pill--sent">SENT</span></div>
            <div class="mock-row"><span class="mono">2026-SI-0144</span><span class="pill pill--draft">DRAFT</span></div>
          </div>
        </article>

        <article class="card product">
          <div class="product__text">
            <span class="icon-tile"><AppIcon name="users" :size="20" :stroke="1.8" /></span>
            <h3>Customers</h3>
            <p>One customer list shared by checkout and invoicing. See at a glance what you sold and who hasn’t paid.</p>
          </div>
          <div class="mock" aria-hidden="true">
            <div class="mock-row"><span class="avatar avatar--amber">AC</span><strong class="grow">ACME d.o.o.</strong><span class="muted">B2B</span></div>
            <div class="mock-row"><span class="avatar avatar--blue">MN</span><strong class="grow">Maja Novak</strong><span class="muted">B2C</span></div>
          </div>
        </article>

        <article class="card product product--wide">
          <div class="product__text">
            <span class="icon-tile icon-tile--accent"><AppIcon name="sparkle" :size="20" :stroke="1.8" /></span>
            <h3>AI assistant</h3>
            <p>Not just a chatbot. It creates invoices, payment links and reports in seconds — and always asks you to confirm before anything is sent.</p>
          </div>
          <ul class="prompts">
            <li>“Who hasn’t paid this month?”</li>
            <li>“Create a payment link for my workshop”</li>
            <li>“Send this month’s invoices to my accountant”</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid { display: flex; flex-wrap: wrap; gap: 20px; }
.product { flex: 1 1 340px; min-width: 0; display: flex; flex-direction: column; gap: 22px; }
.product__text { display: flex; flex-direction: column; gap: 10px; }
.product h3 { font-size: 20px; font-weight: 600; letter-spacing: -0.01em; }
.product p { font-size: 15px; line-height: 1.6; color: var(--ink-3); }
.product--wide { flex: 1 1 700px; flex-direction: row; flex-wrap: wrap; align-items: center; gap: 28px; background: var(--bg-tint); }
.product--wide .product__text { flex: 1 1 280px; min-width: 0; }
.icon-tile--accent { background: var(--accent); }
.mock strong { font-weight: 500; }
.muted { color: var(--muted); }
.grow { flex: 1; }
.link-row { justify-content: flex-start; color: var(--ink-2); }
.chips { display: flex; gap: 8px; flex-wrap: wrap; }
.chips span { font-size: 12px; font-weight: 600; padding: 7px 11px; background: #fff; border: 1px solid #ececef; border-radius: 8px; }
.avatar { width: 26px; height: 26px; border-radius: 999px; font-size: 11px; font-weight: 700; display: flex; align-items: center; justify-content: center; }
.avatar--amber { background: var(--accent-soft); color: var(--accent-ink); }
.avatar--blue { background: #e8eeff; color: #2440a8; }
.prompts { flex: 1 1 300px; min-width: 0; display: flex; flex-direction: column; gap: 8px; }
.prompts li { background: #fff; border: 1px solid #ececef; border-radius: 12px; padding: 12px 14px; font-size: 14px; color: var(--ink-2); }
</style>
