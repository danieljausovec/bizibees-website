<script setup lang="ts">
/**
 * Brand logo.
 * TODO: drop your logo into /public (e.g. /public/logo.svg) and set LOGO_SRC below.
 * Until then a dashed placeholder is shown.
 */
const LOGO_SRC: string | null = null // e.g. '/logo.svg'

withDefaults(defineProps<{ size?: number; showName?: boolean }>(), {
  size: 32,
  showName: true,
})
</script>

<template>
  <span class="logo">
    <img v-if="LOGO_SRC" :src="LOGO_SRC" alt="" :width="size" :height="size">
    <span
      v-else
      class="logo__placeholder"
      :style="{ width: `${size}px`, height: `${size}px`, fontSize: `${Math.round(size * 0.28)}px` }"
      aria-hidden="true"
    >LOGO</span>
    <span v-if="showName" class="logo__name">Bizibees</span>
  </span>
</template>

<style scoped>
.logo { display: inline-flex; align-items: center; gap: 10px; }
.logo__placeholder {
  border-radius: 25%;
  border: 1.5px dashed #b9b9c0;
  background: #fff;
  display: flex; align-items: center; justify-content: center;
  font-weight: 600; color: var(--muted); letter-spacing: 0.04em;
}
.logo__name { font-family: var(--font-display); font-weight: 700; font-size: 20px; letter-spacing: -0.02em; color: var(--ink); }
</style>
