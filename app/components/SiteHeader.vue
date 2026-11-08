<script setup lang="ts">
const links = [
  { to: '/#products', label: 'Products' },
  { to: '/#ai', label: 'AI & API' },
  { to: '/#compliance', label: 'E-invoicing' },
  { to: '/#pricing', label: 'Pricing' },
  { to: '/#accountants', label: 'For accountants' },
]
</script>

<template>
  <header class="header">
    <div class="container header__inner">
      <NuxtLink to="/" aria-label="Bizibees home"><AppLogo /></NuxtLink>
      <nav aria-label="Main" class="header__nav">
        <NuxtLink v-for="l in links" :key="l.to" :to="l.to">{{ l.label }}</NuxtLink>
      </nav>
      <div class="header__actions">
        <NuxtLink to="/sign-in" class="btn btn--sm header__signin">Sign in</NuxtLink>
        <NuxtLink to="/sign-up" class="btn btn--sm btn--dark">
          <span class="label-long">Get early access</span><span class="label-short">Sign up</span>
          <AppIcon name="arrow" :size="14" :stroke="2.2" />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky; top: 0; z-index: 20;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--line-soft);
}
.header__inner { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding-block: 14px; flex-wrap: wrap; }
.header__nav { display: flex; gap: 28px; flex-wrap: wrap; font-size: 14px; font-weight: 500; }
.header__nav a { color: var(--ink-3); }
.header__nav a:hover { color: var(--ink); }
.header__actions { display: flex; gap: 6px; align-items: center; }
.header__signin { padding-inline: 14px; font-weight: 500; }
.label-short { display: none; }
@media (max-width: 900px) {
  .header__nav { display: none; }
  .header__inner { flex-wrap: nowrap; }
}
@media (max-width: 480px) {
  .label-long { display: none; }
  .label-short { display: inline; }
}
</style>
