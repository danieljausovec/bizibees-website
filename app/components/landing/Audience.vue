<script setup lang="ts">
const segments = ['Freelancers', 'Micro & small companies', 'Online sellers', 'Agencies', 'Multi-company owners', 'Accountants']
</script>

<template>
  <section aria-label="Who it is for" class="audience">
    <div class="container audience__inner">
      <span class="audience__label">Built for</span>
      <span v-for="s in segments" :key="s" class="audience__item">{{ s }}</span>
    </div>
  </section>
</template>

<style scoped>
.audience { border-bottom: 1px solid var(--line-soft); }
.audience__inner { padding-block: 32px; display: flex; flex-wrap: wrap; gap: 16px 40px; align-items: center; justify-content: center; }
.audience__label { font-size: 13px; color: var(--muted); font-weight: 500; }
.audience__item { font-family: var(--font-display); font-size: 17px; font-weight: 600; color: var(--ink-2); }
</style>
