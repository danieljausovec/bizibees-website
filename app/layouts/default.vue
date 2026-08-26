<script setup lang="ts">
const route = useRoute()

// Pages set the header CTA and their own footer tagline through page meta.
const cta = computed(() => route.meta.headerCta !== false)
const footerTagline = computed(() => route.meta.footerTagline as string | undefined)
</script>

<template>
  <div class="site">
    <SiteHeader :cta="cta" />
    <main class="site-main">
      <slot />
    </main>
    <SiteFooter :tagline="footerTagline" />
  </div>
</template>
