<script setup lang="ts">
definePageMeta({ layout: 'auth' })
useSeoMeta({ title: 'Sign in', description: 'Sign in to your Bizibees account.' })

const form = reactive({ email: '', password: '' })
const error = ref<string | null>(null)
const pending = ref(false)
const signedIn = ref(false)

async function submit() {
  error.value = null
  if (!form.email || !form.password) {
    error.value = 'Please enter your email and password.'
    return
  }
  pending.value = true
  try {
    await $fetch('/api/sign-in', { method: 'POST', body: { ...form } })
    signedIn.value = true
    // TODO: navigate to the app dashboard once it exists, e.g. navigateTo('/app')
  }
  catch (err: any) {
    error.value = err?.data?.message ?? 'Something went wrong. Please try again.'
  }
  finally {
    pending.value = false
  }
}
</script>

<template>
  <AuthCard v-if="!signedIn" title="Sign in to Bizibees" subtitle="Welcome back. Please sign in to continue.">
    <form class="form" novalidate @submit.prevent="submit">
      <div class="field">
        <label for="si-email" class="label">Email address</label>
        <input id="si-email" v-model="form.email" type="email" class="input" autocomplete="email" placeholder="you@company.si" required>
      </div>
      <div class="field">
        <div class="row">
          <label for="si-password" class="label">Password</label>
          <NuxtLink to="/sign-in#forgot" class="forgot">Forgot password?</NuxtLink>
        </div>
        <input id="si-password" v-model="form.password" type="password" class="input" autocomplete="current-password" required>
      </div>

      <p v-if="error" class="error" role="alert">{{ error }}</p>

      <button type="submit" class="btn btn--dark btn--block" :disabled="pending">
        {{ pending ? 'Signing in…' : 'Continue' }}
        <AppIcon v-if="!pending" name="arrow" :size="14" :stroke="2.2" />
      </button>
    </form>

    <template #footer>
      Don’t have an account? <NuxtLink to="/sign-up">Sign up</NuxtLink>
    </template>
    <template #note>
      <AppIcon name="shield" :size="14" :stroke="1.8" /> Secured with two-factor login · Hosted in the EU
    </template>
  </AuthCard>

  <AuthCard v-else>
    <div class="done" role="status">
      <span class="done__icon"><AppIcon name="check" :size="22" :stroke="2.4" /></span>
      <h1>Signed in</h1>
      <p>Taking you to your dashboard…</p>
    </div>
  </AuthCard>
</template>

<style scoped>
.form { display: flex; flex-direction: column; gap: 18px; }
.row { display: flex; justify-content: space-between; align-items: baseline; }
.forgot { font-size: 13px; font-weight: 500; color: var(--accent-ink); }
.btn--block { min-height: 46px; border-radius: var(--radius-sm); }
.done { display: flex; flex-direction: column; align-items: center; gap: 12px; text-align: center; padding: 8px 0; }
.done__icon { width: 48px; height: 48px; border-radius: 999px; background: var(--success-soft); color: var(--success); display: flex; align-items: center; justify-content: center; }
.done h1 { font-family: var(--font-display); font-size: 22px; font-weight: 700; }
.done p { font-size: 14px; color: #5a5a66; }
</style>
