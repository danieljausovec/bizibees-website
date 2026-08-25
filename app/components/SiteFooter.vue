<script setup lang="ts">
defineProps<{
  /** Appended to the wordmark, e.g. the investor deck's date line. */
  note?: string
}>()

const route = useRoute()

const links = [
  { to: '/', label: 'Home' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/investors', label: 'Investors' },
]

// No point linking to the page the reader is already on.
const otherPages = computed(() => links.filter(link => link.to !== route.path))
</script>

<template>
  <footer class="site-footer">
    <span>BiziBees.ai<template v-if="note"> · {{ note }}</template></span>
    <div class="site-footer__links">
      <NuxtLink v-for="link in otherPages" :key="link.to" :to="link.to">{{ link.label }}</NuxtLink>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
  padding: 36px 40px;
  border-top: 1px solid var(--color-divider);
  font-size: 13px;
  color: color-mix(in srgb, var(--color-text) 55%, transparent);
}
.site-footer__links {
  display: flex;
  gap: 24px;
}

@media (max-width: 720px) {
  .site-footer {
    padding: 32px 20px;
  }
}
</style>
