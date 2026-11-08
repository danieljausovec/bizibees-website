<template>
  <div class="auth dots">
    <header class="container auth__header">
      <NuxtLink to="/" aria-label="Bizibees home"><AppLogo /></NuxtLink>
      <NuxtLink to="/" class="auth__back">
        <AppIcon name="back" :size="14" :stroke="2.2" /> Back to home
      </NuxtLink>
    </header>
    <main class="auth__main">
      <div class="auth__column">
        <slot />
      </div>
    </main>
  </div>
</template>

<style scoped>
.auth { min-height: 100vh; display: flex; flex-direction: column; }
.auth__header { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding-block: 20px; }
.auth__back { display: inline-flex; align-items: center; gap: 6px; min-height: 44px; font-size: 14px; font-weight: 500; color: var(--ink-3); }
.auth__main { flex: 1; display: flex; align-items: center; justify-content: center; padding: 32px 20px 64px; }
.auth__column { width: 100%; max-width: 420px; }
</style>
