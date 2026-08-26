<script setup lang="ts">
withDefaults(
  defineProps<{
    /** Hidden on the waitlist page, which is where the CTA leads. */
    cta?: boolean
  }>(),
  { cta: true },
)
</script>

<template>
  <header class="site-header">
    <div class="wrap site-header__inner">
      <NuxtLink to="/" class="brand">
        <BeeMark />
        <span>BiziBees.ai</span>
      </NuxtLink>
      <nav class="site-nav">
        <NuxtLink to="/how-it-works">How it works</NuxtLink>
        <NuxtLink to="/investors">Investors</NuxtLink>
        <NuxtLink v-if="cta" to="/waitlist" class="btn btn-primary site-nav__cta">
          Join the waitlist
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  border-bottom: 1px solid var(--color-neutral-800);
  background: color-mix(in srgb, var(--color-bg) 80%, transparent);
  backdrop-filter: blur(14px) saturate(150%);
}
.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 13px 28px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 9px;
  color: var(--color-text);
  font-size: 15.5px;
  letter-spacing: -0.01em;
}
.brand:hover {
  color: var(--color-text);
  opacity: 0.75;
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
}
.site-nav a {
  padding: 7px 11px;
  border-radius: var(--radius-sm);
  color: var(--color-neutral-300);
}
.site-nav a:hover {
  background: var(--color-neutral-800);
  color: var(--color-text);
}
/* The link to the page you are on stays lit, and doesn't take the hover pill. */
.site-nav a.router-link-active {
  color: var(--color-accent-300);
  background: transparent;
}
/* The CTA keeps its button colours, so it has to outrank `.site-nav a`. */
.site-nav a.site-nav__cta,
.site-nav a.site-nav__cta:hover {
  margin-left: 10px;
  color: var(--color-accent);
}
.site-nav a.site-nav__cta:hover {
  background: color-mix(in srgb, var(--color-accent) 12%, transparent);
}

@media (max-width: 720px) {
  .site-header__inner {
    flex-wrap: wrap;
    gap: 12px;
    padding: 12px 20px;
  }
  .site-nav { gap: 2px; }
  .site-nav__cta { margin-left: 6px; }
}
</style>
