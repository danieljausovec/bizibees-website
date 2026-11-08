<script setup lang="ts">
// TODO: prices are still to be validated with early customers.
const plans = [
  {
    name: 'Starter', audience: 'For freelancers', price: '[PRICE]',
    features: ['1 company · 1 user', 'Catalogue', 'Payment links', 'Invoices'],
  },
  {
    name: 'Business', audience: 'For small companies', price: '[PRICE]', featured: true,
    features: ['1–2 companies · up to 5 users', 'Everything in Starter', 'Checkout pages', 'E-invoicing'],
  },
  {
    name: 'Pro', audience: 'For multi-company & teams', price: '[PRICE]',
    features: ['3+ companies · unlimited users', 'Everything in Business', 'AI assistant', 'API & MCP connector', 'Priority support'],
  },
]
</script>

<template>
  <section id="pricing" class="section section--soft">
    <div class="container">
      <div class="section-head section-head--center">
        <span class="eyebrow">Pricing</span>
        <h2 class="h2">Simple plans that grow with you.</h2>
        <p class="lead">Monthly or yearly. Plus a small fee on payments through checkout and payment links.</p>
      </div>
      <div class="plans">
        <article v-for="p in plans" :key="p.name" class="plan" :class="{ 'plan--featured': p.featured }">
          <div class="plan__head">
            <div class="plan__name">
              <h3>{{ p.name }}</h3>
              <span>{{ p.audience }}</span>
            </div>
            <span v-if="p.featured" class="plan__tag">POPULAR</span>
          </div>
          <div class="plan__price"><strong>€{{ p.price }}</strong><span>/ month</span></div>
          <NuxtLink to="/sign-up" class="btn btn--block" :class="p.featured ? 'btn--dark' : 'btn--outline'">Start free trial</NuxtLink>
          <ul class="plan__features">
            <li v-for="f in p.features" :key="f"><AppIcon name="check" :size="16" :stroke="2" />{{ f }}</li>
          </ul>
        </article>
      </div>
      <p class="note">Extra companies and an AI add-on available on any plan.</p>
    </div>
  </section>
</template>

<style scoped>
.plans { display: flex; flex-wrap: wrap; gap: 20px; align-items: stretch; }
.plan { flex: 1 1 300px; min-width: 0; background: #fff; border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 32px; display: flex; flex-direction: column; gap: 22px; }
.plan--featured { border: 2px solid var(--ink); padding: 31px; box-shadow: 0 30px 60px -28px rgba(19,19,22,.3); }
.plan__head { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
.plan__name { display: flex; flex-direction: column; gap: 6px; }
.plan__name h3 { font-size: 20px; font-weight: 600; }
.plan__name span { font-size: 14px; color: var(--muted); }
.plan__tag { font-size: 11px; font-weight: 700; padding: 5px 9px; background: var(--accent); border-radius: 999px; letter-spacing: 0.03em; }
.plan__price { display: flex; align-items: baseline; gap: 6px; }
.plan__price strong { font-family: var(--font-display); font-size: 40px; font-weight: 700; letter-spacing: -0.03em; }
.plan__price span { font-size: 14px; color: var(--muted); }
.plan__features { display: flex; flex-direction: column; gap: 12px; font-size: 14px; color: var(--ink-2); }
.plan__features li { display: flex; gap: 10px; align-items: center; }
.plan__features svg { color: var(--ink); flex: none; }
.note { margin-top: 32px; text-align: center; font-size: 14px; color: var(--muted); }
</style>
