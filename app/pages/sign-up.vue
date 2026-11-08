<script setup lang="ts">
definePageMeta({ layout: 'auth' })
useSeoMeta({ title: 'Create your account', description: 'Create a Bizibees account to sell, get paid and invoice in one place.' })

const route = useRoute()

const form = reactive({
  accountName: '',
  email: typeof route.query.email === 'string' ? route.query.email : '',
})
const errors = reactive<{ accountName?: string; email?: string; form?: string }>({})
const pending = ref(false)
const sentTo = ref<string | null>(null)

function validate() {
  errors.accountName = form.accountName.trim().length < 2 ? 'Please enter an account name.' : undefined
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) ? undefined : 'Please enter a valid email address.'
  return !errors.accountName && !errors.email
}

async function submit() {
  errors.form = undefined
  if (!validate()) return
  pending.value = true
  try {
    await $fetch('/api/sign-up', {
      method: 'POST',
      body: { accountName: form.accountName.trim(), email: form.email.trim() },
    })
    sentTo.value = form.email.trim()
  }
  catch (err: any) {
    errors.form = err?.data?.message ?? 'Something went wrong. Please try again.'
  }
  finally {
    pending.value = false
  }
}

function reset() {
  sentTo.value = null
  form.email = ''
}
</script>

<template>
  <AuthCard
    v-if="!sentTo"
    title="Create your account"
    subtitle="Start selling, getting paid and invoicing in minutes."
  >
    <form class="form" novalidate @submit.prevent="submit">
      <div class="field">
        <label for="su-account" class="label">Account name</label>
        <input
          id="su-account"
          v-model="form.accountName"
          type="text"
          class="input"
          autocomplete="organization"
          placeholder="e.g. Novak Group"
          :aria-invalid="!!errors.accountName"
          aria-describedby="su-account-help"
          required
        >
        <span v-if="errors.accountName" id="su-account-help" class="error">{{ errors.accountName }}</span>
        <span v-else id="su-account-help" class="help">Your business or team name. You can add one or more companies later.</span>
      </div>

      <div class="field">
        <label for="su-email" class="label">Email address</label>
        <input
          id="su-email"
          v-model="form.email"
          type="email"
          class="input"
          autocomplete="email"
          placeholder="you@company.si"
          :aria-invalid="!!errors.email"
          :aria-describedby="errors.email ? 'su-email-error' : undefined"
          required
        >
        <span v-if="errors.email" id="su-email-error" class="error">{{ errors.email }}</span>
      </div>

      <p v-if="errors.form" class="error" role="alert">{{ errors.form }}</p>

      <button type="submit" class="btn btn--accent btn--block" :disabled="pending">
        {{ pending ? 'Creating account…' : 'Create account' }}
        <AppIcon v-if="!pending" name="arrow" :size="14" :stroke="2.2" />
      </button>

      <p class="terms">
        By creating an account you agree to the <NuxtLink to="/#terms">Terms</NuxtLink>
        and <NuxtLink to="/#privacy">Privacy Policy</NuxtLink>.
      </p>
    </form>

    <template #footer>
      Already have an account? <NuxtLink to="/sign-in">Sign in</NuxtLink>
    </template>
    <template #note>
      <span>Free trial</span><span aria-hidden="true">·</span><span>No card required</span><span aria-hidden="true">·</span><span>Hosted in the EU</span>
    </template>
  </AuthCard>

  <AuthCard v-else>
    <div class="done" role="status">
      <span class="done__icon"><AppIcon name="mail" :size="24" :stroke="1.9" /></span>
      <h1>Check your inbox</h1>
      <p>We sent a link to <strong>{{ sentTo }}</strong> to confirm your account and set a password.</p>
      <button type="button" class="btn btn--sm btn--outline" @click="reset">Use a different email</button>
    </div>
    <template #footer>
      Already confirmed? <NuxtLink to="/sign-in">Sign in</NuxtLink>
    </template>
  </AuthCard>
</template>

<style scoped>
.form { display: flex; flex-direction: column; gap: 18px; }
.btn--block { min-height: 46px; border-radius: var(--radius-sm); }
.terms { font-size: 12px; line-height: 1.55; color: var(--muted); text-align: center; }
.terms a { color: var(--ink-2); text-decoration: underline; }
.done { display: flex; flex-direction: column; align-items: center; gap: 14px; text-align: center; padding: 8px 0; }
.done__icon { width: 52px; height: 52px; border-radius: 999px; background: var(--accent-soft); color: var(--accent-ink); display: flex; align-items: center; justify-content: center; }
.done h1 { font-family: var(--font-display); font-size: 24px; font-weight: 700; letter-spacing: -0.02em; }
.done p { font-size: 14px; line-height: 1.6; color: #5a5a66; }
.done strong { color: var(--ink); }
</style>
