<script setup lang="ts">
withDefaults(
  defineProps<{
    /** Marketing pages float the header over the content; the waitlist doesn't. */
    sticky?: boolean
    /** Hidden on the waitlist page, where the whole page is the call to action. */
    cta?: boolean
  }>(),
  { sticky: true, cta: true },
)
</script>

<template>
  <header class="site-header" :class="{ 'site-header--sticky': sticky }">
    <NuxtLink to="/" class="brand">
      <BeeMark />
      <span>BiziBees.ai</span>
    </NuxtLink>
    <nav class="site-nav">
      <NuxtLink to="/how-it-works">How it works</NuxtLink>
      <NuxtLink to="/investors">Investors</NuxtLink>
      <NuxtLink v-if="cta" to="/waitlist" class="btn btn-primary">Join the waitlist</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 18px 40px;
  border-bottom: 1px solid var(--color-divider);
}
.site-header--sticky {
  position: sticky;
  top: 0;
  z-index: 20;
  background: color-mix(in srgb, var(--color-bg) 88%, transparent);
  backdrop-filter: blur(10px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 9px;
  color: var(--color-text);
  font-size: 16px;
  letter-spacing: -0.01em;
}
.brand:hover {
  color: var(--color-text);
  text-decoration: none;
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 28px;
  font-size: 14px;
}
.site-nav a {
  color: color-mix(in srgb, var(--color-text) 70%, transparent);
}
/* The link to the page you are on stays lit. */
.site-nav a.router-link-active {
  color: var(--color-accent-300);
}
.site-nav a.btn {
  color: var(--color-accent);
}

@media (max-width: 720px) {
  .site-header {
    flex-wrap: wrap;
    gap: 14px;
    padding: 16px 20px;
  }
  .site-nav {
    gap: 18px;
  }
}
</style>
