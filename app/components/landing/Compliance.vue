<script setup lang="ts">
const dates = [
  { big: '1 Jan 2028', text: 'B2B e-invoicing becomes mandatory for domestic transactions in Slovenia.' },
  { big: '1 Jul 2030', text: 'EU digital VAT reporting starts for cross-border B2B trade (ViDA package).' },
  { big: 'Built in', text: 'Correct VAT, invoice numbering and e-invoicing for each company’s country — maintained for you.', tint: true },
]
const trust = [
  { icon: 'shield', label: 'EU data hosting' },
  { icon: 'shield', label: 'GDPR export & deletion' },
  { icon: 'lock', label: 'Two-factor login' },
  { icon: 'file', label: 'Full audit log' },
  { icon: 'grid', label: 'Data separated per customer & company' },
]
</script>

<template>
  <section id="compliance" class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">E-invoicing &amp; compliance</span>
        <h2 class="h2">Be ready before the deadline, not after it.</h2>
        <p class="lead">Invoice rules are going digital and mandatory across Europe. Bizibees builds local compliance into every company you add.</p>
      </div>
      <div class="dates">
        <div v-for="d in dates" :key="d.big" class="card date" :class="{ 'date--tint': d.tint }">
          <span class="date__big">{{ d.big }}</span>
          <span class="date__text">{{ d.text }}</span>
        </div>
      </div>
      <ul class="trust">
        <li v-for="t in trust" :key="t.label"><AppIcon :name="t.icon" :size="17" :stroke="1.8" />{{ t.label }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.dates { display: flex; flex-wrap: wrap; gap: 20px; }
.date { flex: 1 1 300px; min-width: 0; display: flex; flex-direction: column; gap: 10px; }
.date--tint { background: #fff8e6; }
.date__big { font-family: var(--font-display); font-size: 40px; font-weight: 700; letter-spacing: -0.03em; }
.date__text { font-size: 15px; line-height: 1.6; color: var(--ink-3); }
.trust { margin-top: 20px; display: flex; flex-wrap: wrap; gap: 12px 32px; padding: 24px 28px; border: 1px solid var(--line); border-radius: var(--radius-md); background: var(--bg-tint); font-size: 14px; font-weight: 500; color: var(--ink-2); }
.trust li { display: flex; align-items: center; gap: 8px; }
.trust svg { color: var(--ink); }
</style>
