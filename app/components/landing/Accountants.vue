<template>
  <section id="accountants" class="section">
    <div class="container">
      <div class="banner">
        <div class="banner__copy">
          <span class="eyebrow">For accountants</span>
          <h2 class="banner__title">Clean, compliant data from every client.</h2>
          <p class="banner__text">Join the partner programme. Recommend Bizibees to your clients and get a free dashboard to see their invoices and payments in one place.</p>
        </div>
        <NuxtLink to="/#partners" class="btn btn--outline">
          Become a partner <AppIcon name="arrow" :size="15" :stroke="2.2" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner { border: 1px solid var(--line); border-radius: 24px; padding: 48px; display: flex; flex-wrap: wrap; gap: 40px; align-items: center; justify-content: space-between; background: var(--bg-tint); }
.banner__copy { flex: 1 1 460px; min-width: 0; display: flex; flex-direction: column; gap: 14px; }
.banner__title { font-family: var(--font-display); font-weight: 700; font-size: clamp(28px, 3.2vw, 38px); line-height: 1.12; letter-spacing: -0.025em; }
.banner__text { font-size: 17px; line-height: 1.6; color: var(--ink-3); }
@media (max-width: 600px) { .banner { padding: 28px; } }
</style>
