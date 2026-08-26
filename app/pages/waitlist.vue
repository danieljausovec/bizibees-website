<script setup lang="ts">
definePageMeta({
  // The waitlist is where the header CTA leads, so it doesn't repeat it.
  headerCta: false,
  footerTagline: 'We onboard market by market, starting with a handful of shops in each.',
})

useSeoMeta({
  title: 'Join the waitlist',
  description:
    'Tell us about your shop. We onboard market by market and start with a handful of shops in each — no commitment, no setup fee, nothing to install today.',
})

const stockOptions = [
  'On paper or in my head',
  'A spreadsheet',
  'A till or POS system',
  'An online shop already',
]

const form = reactive({
  shop: '',
  city: '',
  email: '',
  phone: '',
  stock: stockOptions[0],
})

const sent = ref(false)
const confirmation = ref<HTMLElement | null>(null)

async function submit() {
  // TODO: post `form` to the waitlist endpoint once it exists; the design
  // confirms optimistically, so failures will need surfacing here too.
  sent.value = true
  await nextTick()
  confirmation.value?.focus()
}
</script>

<template>
  <div class="waitlist wrap">
    <div>
      <div class="mono mono--accent">Join the waitlist</div>
      <h1 class="waitlist__title">Tell us about your shop.</h1>
      <p class="waitlist__lede">
        We onboard market by market and start with a handful of shops in each. No commitment, no
        setup fee, and nothing to install today.
      </p>
      <div class="perks">
        <div class="perk">
          <span class="perk__arrow">→</span><span>Go live from photos of your shelves</span>
        </div>
        <div class="perk">
          <span class="perk__arrow">→</span><span>Take card payments, even without a terminal</span>
        </div>
        <div class="perk">
          <span class="perk__arrow">→</span><span>Courier pickup booked for you, order by order</span>
        </div>
      </div>
    </div>

    <form v-if="!sent" class="signup" @submit.prevent="submit">
      <div class="field">
        <label for="shop">Shop name</label>
        <input id="shop" v-model="form.shop" class="input" name="shop" placeholder="Pekarna Mlinar" required>
      </div>
      <div class="field">
        <label for="city">City and country</label>
        <input id="city" v-model="form.city" class="input" name="city" placeholder="Ljubljana, Slovenia" required>
      </div>
      <div class="field">
        <label for="email">Email</label>
        <input id="email" v-model="form.email" class="input" name="email" type="email" placeholder="you@shop.com" required>
      </div>
      <div class="field">
        <label for="phone">WhatsApp number <span class="text-muted">(optional)</span></label>
        <input id="phone" v-model="form.phone" class="input" name="phone" placeholder="+386 …">
      </div>
      <div class="field">
        <label for="stock">How do you track stock today?</label>
        <select id="stock" v-model="form.stock" class="input" name="stock">
          <option v-for="option in stockOptions" :key="option">{{ option }}</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary btn-block signup__submit">Join the waitlist</button>
      <p class="signup__fineprint">We use your details only to contact you about the pilot.</p>
    </form>

    <div v-else ref="confirmation" class="confirmation" role="status" tabindex="-1">
      <div class="confirmation__check" aria-hidden="true">✓</div>
      <h3 class="confirmation__title">You're on the list.</h3>
      <p class="confirmation__body">
        We'll be in touch when we open onboarding in your market. Questions in the meantime:
        <a href="mailto:miha.culiberg@bizibees.ai">miha.culiberg@bizibees.ai</a>
      </p>
      <NuxtLink to="/how-it-works" class="btn btn-ghost confirmation__link">Read how it works</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.waitlist {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 64px;
  align-content: start;
  width: 100%;
  padding: 88px 28px 96px;
}

.waitlist__title {
  max-width: 18ch;
  margin: 16px 0 0;
  font-size: clamp(34px, 4.4vw, 54px);
  line-height: 1.05;
  letter-spacing: -0.035em;
}
.waitlist__lede {
  max-width: 46ch;
  margin: 20px 0 0;
  font-size: 17px;
  color: var(--color-neutral-200);
}

.perks {
  display: grid;
  gap: 14px;
  margin-top: 36px;
  font-size: 14px;
  color: var(--color-neutral-300);
}
.perk {
  display: flex;
  gap: 10px;
}
.perk__arrow { color: var(--color-accent-300); }

.signup {
  display: grid;
  gap: 18px;
  align-content: start;
  padding: 32px;
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-sm);
}
.signup .input:focus { border-color: var(--color-accent-500); }
.signup__submit {
  padding: 12px 20px;
  font-size: 15px;
  margin-top: 6px;
}
.signup__fineprint {
  margin: 0;
  font-size: 12px;
  color: var(--color-neutral-400);
}

.confirmation {
  align-self: start;
  padding: 40px 28px;
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: 0 0 0 1px var(--color-accent-700);
}
.confirmation__check {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--color-accent-300);
  color: var(--color-accent-300);
  font-size: 17px;
}
.confirmation__title { margin: 20px 0 8px; }
.confirmation__body {
  margin: 0;
  max-width: 38ch;
  color: var(--color-neutral-200);
}
.confirmation__link {
  display: inline-block;
  margin-top: 26px;
  color: var(--color-text);
}

@media (max-width: 720px) {
  .waitlist {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 56px 20px 72px;
  }
  .signup { padding: 24px; }
}
</style>
