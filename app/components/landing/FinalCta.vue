<script setup lang="ts">
const email = ref('')

// Hand the email over to the sign-up page so the user doesn't type it twice.
function start() {
  navigateTo({ path: '/sign-up', query: email.value ? { email: email.value } : undefined })
}
</script>

<template>
  <section id="start" class="cta-wrap">
    <div class="container">
      <div class="cta">
        <h2 class="cta__title">Sell, get paid and invoice in one place — with AI that does the busywork.</h2>
        <p class="cta__text">Be among the first businesses in Slovenia and the region on Bizibees.</p>
        <form class="cta__form" @submit.prevent="start">
          <label for="cta-email" class="sr-only">Work email</label>
          <input id="cta-email" v-model="email" type="email" class="cta__input" placeholder="you@company.si" autocomplete="email">
          <button type="submit" class="btn btn--accent">Get early access</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-wrap { padding-bottom: 112px; }
.cta { background: var(--ink); color: #fff; border-radius: 28px; padding: 80px 32px; display: flex; flex-direction: column; align-items: center; gap: 24px; text-align: center; }
.cta__title { font-family: var(--font-display); font-weight: 700; font-size: clamp(34px, 4.4vw, 56px); line-height: 1.05; letter-spacing: -0.035em; max-width: 820px; }
.cta__text { font-size: 18px; color: var(--dark-muted); max-width: 560px; line-height: 1.6; }
.cta__form { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; width: 100%; max-width: 520px; margin-top: 8px; }
.cta__input { flex: 1 1 260px; min-width: 0; min-height: 50px; padding: 0 16px; font-size: 15px; color: #fff; background: #1f1f25; border: 1px solid #3a3a44; border-radius: 12px; }
.cta__input::placeholder { color: #8d8d99; }
.cta__input:focus { outline: none; border-color: var(--accent); }
</style>
