<template>
  <section id="top" class="hero dots">
    <div class="container hero__inner">
      <div class="hero__copy">
        <NuxtLink to="/#compliance" class="hero__badge">
          <span class="hero__badge-tag">NEW</span>
          Ready for Slovenia’s B2B e-invoicing mandate · 1 Jan 2028
        </NuxtLink>
        <h1 class="hero__title">Sell, get paid and invoice. In one place.</h1>
        <p class="hero__lead">
          Bizibees is the all-in-one platform for European small businesses: product catalogue,
          checkout pages, payment links and compliant invoices — with an AI assistant that does the busywork.
        </p>
        <div class="hero__ctas">
          <NuxtLink to="/sign-up" class="btn btn--dark">
            Get early access <AppIcon name="arrow" :size="15" :stroke="2.2" />
          </NuxtLink>
          <NuxtLink to="/#demo" class="btn btn--outline">Book a demo</NuxtLink>
        </div>
        <ul class="hero__ticks">
          <li><AppIcon name="check" :size="16" :stroke="2" />Free trial</li>
          <li><AppIcon name="check" :size="16" :stroke="2" />EU data hosting</li>
          <li><AppIcon name="check" :size="16" :stroke="2" />Multi-company from day one</li>
        </ul>
      </div>

      <!-- Product preview cluster (illustrative UI) -->
      <div class="hero__visual" aria-label="Product preview" role="img">
        <div class="hero__row">
          <div class="ui-card">
            <div class="ui-card__top">
              <span class="ui-label">CHECKOUT</span>
              <span class="ui-chip">bizibees.eu/pay/…</span>
            </div>
            <div class="checkout__product">
              <span class="checkout__thumb"><AppIcon name="calendar" :size="22" :stroke="1.8" /></span>
              <span class="checkout__meta">
                <strong>Weekend pottery workshop</strong>
                <span>Studio Glina d.o.o.</span>
              </span>
            </div>
            <div class="checkout__price">€45.00</div>
            <div class="checkout__methods">
              <span class="is-active">Card</span><span>Wallet</span><span>Bank</span>
            </div>
            <div class="checkout__pay">Pay €45.00</div>
          </div>

          <div class="ui-card ui-card--offset">
            <div class="ui-card__top">
              <span class="ui-label">INVOICE</span>
              <span class="pill pill--paid invoice__paid"><AppIcon name="check" :size="11" :stroke="3" />PAID</span>
            </div>
            <span class="mono invoice__no">2026-SI-0142</span>
            <dl class="invoice__lines">
              <div><dt>Net</dt><dd>€36.89</dd></div>
              <div><dt>VAT 22%</dt><dd>€8.11</dd></div>
              <div class="invoice__total"><dt>Total</dt><dd>€45.00</dd></div>
            </dl>
            <div class="invoice__note"><AppIcon name="send" :size="14" :stroke="2" />e-invoice sent · accountant notified</div>
          </div>
        </div>

        <div class="ai-card">
          <div class="ai-card__label"><AppIcon name="sparkle" :size="16" :stroke="2" class="ai-card__spark" />AI ASSISTANT</div>
          <div class="ai-card__prompt">Create an invoice for ACME for 3 hours of consulting</div>
          <div class="ai-card__result">
            <div>
              <strong>Draft ready · ACME d.o.o.</strong>
              <span>3 × Consulting hour · VAT applied · next number reserved</span>
            </div>
            <span class="ai-card__cta">Review &amp; send</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero { border-bottom: 1px solid var(--line-soft); overflow: hidden; }
.hero__inner { display: flex; flex-wrap: wrap; gap: 56px; align-items: center; padding-block: 96px 88px; }
.hero__copy { flex: 1 1 460px; min-width: 0; display: flex; flex-direction: column; gap: 28px; }
.hero__badge {
  align-self: flex-start; display: inline-flex; align-items: center; gap: 10px;
  padding: 6px 14px 6px 6px; border: 1px solid var(--line); background: #fff; border-radius: 999px;
  font-size: 13px; font-weight: 500; color: var(--ink-2);
}
.hero__badge-tag { background: var(--accent); color: var(--ink); font-weight: 700; font-size: 11px; padding: 4px 9px; border-radius: 999px; }
.hero__title { font-family: var(--font-display); font-weight: 700; font-size: clamp(44px, 5.6vw, 72px); line-height: 1.02; letter-spacing: -0.035em; }
.hero__lead { font-size: 19px; line-height: 1.6; color: var(--ink-3); max-width: 540px; }
.hero__ctas { display: flex; gap: 12px; flex-wrap: wrap; }
.hero__ticks { display: flex; gap: 22px; flex-wrap: wrap; font-size: 13px; color: #5a5a66; font-weight: 500; }
.hero__ticks li { display: flex; align-items: center; gap: 7px; }
.hero__ticks svg { color: var(--ink); }

.hero__visual { flex: 1 1 480px; min-width: 0; display: flex; flex-direction: column; gap: 16px; }
.hero__row { display: flex; gap: 16px; flex-wrap: wrap; align-items: flex-start; }
.ui-card {
  flex: 1 1 250px; min-width: 0; background: #fff; border: 1px solid var(--line); border-radius: 18px;
  box-shadow: var(--shadow-card); padding: 22px; display: flex; flex-direction: column; gap: 16px;
}
.ui-card--offset { flex-basis: 220px; margin-top: 40px; gap: 14px; }
.ui-card__top { display: flex; justify-content: space-between; align-items: center; }
.ui-label { font-size: 12px; font-weight: 600; color: var(--muted); letter-spacing: 0.06em; }
.ui-chip { font-size: 11px; font-weight: 600; color: var(--ink-2); background: #f2f2f4; padding: 4px 8px; border-radius: 6px; }

.checkout__product { display: flex; gap: 12px; align-items: center; }
.checkout__thumb { width: 48px; height: 48px; border-radius: 12px; background: var(--accent-soft); color: var(--accent-ink); display: flex; align-items: center; justify-content: center; }
.checkout__meta { display: flex; flex-direction: column; gap: 2px; font-size: 15px; }
.checkout__meta span { font-size: 13px; color: var(--muted); }
.checkout__price { font-family: var(--font-display); font-size: 34px; font-weight: 700; letter-spacing: -0.02em; }
.checkout__methods { display: flex; gap: 8px; }
.checkout__methods span { flex: 1; text-align: center; font-size: 12px; font-weight: 600; padding: 9px 0; border: 1px solid #e0e0e5; border-radius: 9px; color: var(--ink-3); }
.checkout__methods .is-active { border: 1.5px solid var(--ink); color: var(--ink); }
.checkout__pay { font-size: 14px; font-weight: 600; text-align: center; padding: 12px 0; background: var(--accent); border-radius: 10px; }

.invoice__paid { display: inline-flex; align-items: center; gap: 5px; }
.invoice__no { font-size: 13px; font-weight: 500; }
.invoice__lines { margin: 0; display: flex; flex-direction: column; gap: 8px; font-size: 13px; }
.invoice__lines div { display: flex; justify-content: space-between; }
.invoice__lines dt { color: var(--muted); }
.invoice__lines dd { margin: 0; }
.invoice__total { border-top: 1px solid var(--line-soft); padding-top: 8px; font-weight: 600; }
.invoice__total dt { color: var(--ink); }
.invoice__note { display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--ink-3); background: var(--bg-soft); padding: 9px 10px; border-radius: 9px; }

.ai-card { background: var(--ink); color: #fff; border-radius: 18px; box-shadow: 0 24px 48px -18px rgba(19,19,22,.4); padding: 20px; display: flex; flex-direction: column; gap: 14px; }
.ai-card__label { display: flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 600; letter-spacing: 0.06em; color: #b7b7c2; }
.ai-card__spark { color: var(--accent); }
.ai-card__prompt { align-self: flex-end; max-width: 85%; background: #2a2a31; padding: 11px 14px; border-radius: 14px 14px 4px 14px; font-size: 14px; line-height: 1.5; }
.ai-card__result { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: space-between; background: #1e1e24; border: 1px solid #33333b; padding: 12px 14px; border-radius: 12px; }
.ai-card__result div { display: flex; flex-direction: column; gap: 3px; font-size: 13px; }
.ai-card__result span { color: #b7b7c2; }
.ai-card__cta { font-size: 13px; font-weight: 600; padding: 9px 14px; background: var(--accent); color: var(--ink) !important; border-radius: 9px; }
</style>
