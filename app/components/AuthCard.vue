<script setup lang="ts">
defineProps<{ title?: string; subtitle?: string }>()
</script>

<template>
  <div>
    <div class="auth-card" :class="{ 'auth-card--solo': !$slots.footer }">
      <div v-if="title" class="auth-card__head">
        <AppLogo :size="44" :show-name="false" />
        <div class="auth-card__titles">
          <h1>{{ title }}</h1>
          <p v-if="subtitle">{{ subtitle }}</p>
        </div>
      </div>
      <slot />
    </div>
    <div v-if="$slots.footer" class="auth-card__footer">
      <slot name="footer" />
    </div>
    <div v-if="$slots.note" class="auth-card__note">
      <slot name="note" />
    </div>
  </div>
</template>

<style scoped>
.auth-card {
  background: #fff; border: 1px solid var(--line); border-radius: 20px 20px 0 0;
  box-shadow: 0 24px 48px -20px rgba(19,19,22,.16), 0 2px 6px rgba(19,19,22,.04);
  padding: 40px 36px 32px; display: flex; flex-direction: column; gap: 28px;
}
.auth-card--solo { border-radius: 20px; }
.auth-card__head { display: flex; flex-direction: column; align-items: center; gap: 14px; text-align: center; }
.auth-card__titles { display: flex; flex-direction: column; gap: 6px; }
.auth-card__titles h1 { font-family: var(--font-display); font-size: 24px; font-weight: 700; letter-spacing: -0.02em; }
.auth-card__titles p { font-size: 14px; color: #5a5a66; }
.auth-card__footer {
  background: var(--bg-soft); border: 1px solid var(--line); border-top: 0; border-radius: 0 0 20px 20px;
  padding: 18px 36px; text-align: center; font-size: 14px; color: #5a5a66;
}
.auth-card__footer :deep(a) { font-weight: 600; color: var(--ink); }
.auth-card__note { display: flex; justify-content: center; flex-wrap: wrap; align-items: center; gap: 8px 16px; margin-top: 24px; font-size: 12px; color: var(--muted); }
@media (max-width: 480px) { .auth-card { padding: 32px 22px 26px; } .auth-card__footer { padding-inline: 22px; } }
</style>
