<script setup lang="ts">
defineProps<{
  /** One-line summary under the wordmark; each page sets its own. */
  tagline?: string
}>()

const route = useRoute()

const productPages = [
  { to: '/', label: 'Home' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/waitlist', label: 'Join the waitlist' },
]

// No point linking to the page the reader is already on.
const productLinks = computed(() => productPages.filter(page => page.to !== route.path))
</script>

<template>
  <footer class="site-footer">
    <div class="wrap site-footer__columns">
      <div>
        <div class="site-footer__brand">
          <BeeMark />
          <span>BiziBees.ai</span>
        </div>
        <p v-if="tagline" class="site-footer__tagline">{{ tagline }}</p>
      </div>
      <div>
        <div class="mono mono--sm">Product</div>
        <div class="site-footer__links">
          <NuxtLink v-for="link in productLinks" :key="link.to" :to="link.to">
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>
      <div>
        <div class="mono mono--sm">Company</div>
        <div class="site-footer__links">
          <NuxtLink to="/investors">For investors</NuxtLink>
        </div>
      </div>
    </div>
    <div class="site-footer__bar">
      <div class="wrap mono">© 2026 BiziBees.ai</div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer { border-top: 1px solid var(--color-neutral-800); }
.site-footer__columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 40px;
  padding: 52px 28px;
}

.site-footer__brand {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 15px;
}
.site-footer__tagline {
  max-width: 26ch;
  margin: 14px 0 0;
  font-size: 13.5px;
  line-height: 1.65;
  color: var(--color-neutral-400);
}

.site-footer__links {
  display: grid;
  gap: 10px;
  margin-top: 16px;
  font-size: 14px;
}
.site-footer__links a { color: var(--color-neutral-300); }
.site-footer__links a:hover { color: var(--color-text); }

.site-footer__bar { border-top: 1px solid var(--color-neutral-800); }
.site-footer__bar .wrap { padding: 18px 28px; }

@media (max-width: 720px) {
  .site-footer__columns {
    gap: 32px;
    padding: 40px 20px;
  }
  .site-footer__bar .wrap { padding: 18px 20px; }
}
</style>
