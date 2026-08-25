<script setup lang="ts">
const route = useRoute()

// Pages opt out of the sticky header and the header CTA through page meta.
const sticky = computed(() => route.meta.stickyHeader !== false)
const cta = computed(() => route.meta.headerCta !== false)
const footerNote = computed(() => route.meta.footerNote as string | undefined)
</script>

<template>
  <div class="site">
    <SiteHeader :sticky="sticky" :cta="cta" />
    <main class="site-main">
      <slot />
    </main>
    <SiteFooter :note="footerNote" />
  </div>
</template>
