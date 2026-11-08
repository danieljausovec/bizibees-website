<script setup lang="ts">
const columns = [
  {
    title: 'Product',
    links: [
      { to: '/#products', label: 'Catalogue' },
      { to: '/#products', label: 'Checkout & links' },
      { to: '/#products', label: 'Invoicing' },
      { to: '/#ai', label: 'AI assistant' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { to: '/#ai', label: 'API docs' },
      { to: '/#ai', label: 'MCP connector' },
    ],
  },
  {
    title: 'Company',
    links: [
      { to: '/#accountants', label: 'Partners' },
      { to: '/#compliance', label: 'Security & GDPR' },
      { to: '/#contact', label: 'Contact' },
    ],
  },
]
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__top">
        <div class="footer__brand">
          <AppLogo />
          <p>One platform for European small businesses to sell, get paid and invoice.</p>
        </div>
        <div class="footer__cols">
          <div v-for="c in columns" :key="c.title" class="footer__col">
            <span class="footer__title">{{ c.title }}</span>
            <NuxtLink v-for="l in c.links" :key="l.label" :to="l.to">{{ l.label }}</NuxtLink>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© {{ year }} Bizibees. Hosted in the EU.</span>
        <span class="footer__legal">
          <NuxtLink to="/#privacy">Privacy</NuxtLink>
          <NuxtLink to="/#terms">Terms</NuxtLink>
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer { border-top: 1px solid var(--line-soft); }
.footer__inner { padding-block: 56px 40px; display: flex; flex-direction: column; gap: 48px; }
.footer__top { display: flex; flex-wrap: wrap; gap: 40px; justify-content: space-between; }
.footer__brand { display: flex; flex-direction: column; gap: 14px; max-width: 320px; }
.footer__brand p { font-size: 14px; line-height: 1.6; color: #5a5a66; }
.footer__cols { display: flex; flex-wrap: wrap; gap: 56px; }
.footer__col { display: flex; flex-direction: column; gap: 12px; font-size: 14px; }
.footer__col a { color: #5a5a66; }
.footer__title { font-weight: 600; }
.footer__bottom {
  display: flex; flex-wrap: wrap; gap: 16px; justify-content: space-between;
  font-size: 13px; color: var(--muted); border-top: 1px solid var(--line-soft); padding-top: 24px;
}
.footer__legal { display: flex; gap: 20px; }
</style>
