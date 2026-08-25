<script setup lang="ts">
useSeoMeta({
  title: 'The storefront for shops that never had a website',
  description:
    'BiziBees turns a shop\'s shelves into a live catalog. Customers order over WhatsApp, voice, or an AI shopping agent — payment taken, courier booked, order out the door.',
})

const whyNow = [
  {
    kicker: '01 — Plumbing',
    title: 'New protocols, weeks old',
    body: 'UCP, ACP, AP2 and Agent Pay all shipped in 2026. The rails for AI agents to browse and buy now exist industry-wide.',
  },
  {
    kicker: '02 — Enterprise',
    title: 'Enterprise already moved',
    body: 'Adyen shipped an agentic-commerce layer for merchants big enough to have an Adyen relationship. Square, Toast and Lightspeed are watching, not shipping.',
  },
  {
    kicker: '03 — The gap',
    title: 'The corner shop is untouched',
    body: 'There is no self-serve way for a shop with no website to be discovered and bought from by an agent, or even to take a card for the first time. That is what BiziBees does.',
    featured: true,
  },
]

const steps = [
  {
    n: '01',
    title: 'Capture',
    body: 'Photograph your shelves, send a spreadsheet, or connect your till. Whatever you already have becomes a live catalog.',
  },
  {
    n: '02',
    title: 'Sell',
    body: 'Orders arrive over WhatsApp, voice, or an AI shopping agent. No app for your customers, no AI literacy for you.',
  },
  {
    n: '03',
    title: 'Fulfil',
    body: 'Payment is processed and a courier is booked automatically. You get a pickup tag with the item list. No phone calls.',
  },
]
</script>

<template>
  <div>
    <section class="hero section--rule">
      <div class="hero__glow" />
      <div class="wrap hero__inner">
        <span class="tag tag-outline">Agentic commerce for offline shops</span>
        <h1 class="hero__title">The storefront for shops that never had a website.</h1>
        <p class="hero__lede">
          Your shelves become a live catalog. Customers order over WhatsApp, voice, or an AI
          shopping agent. Payment is taken, a courier is booked, and the order leaves your counter.
          One onboarding, no website required.
        </p>
        <div class="hero__actions">
          <NuxtLink to="/waitlist" class="btn btn-primary hero__btn">Join the waitlist</NuxtLink>
          <NuxtLink to="/how-it-works" class="btn btn-ghost hero__btn hero__btn--plain">
            See how it works
          </NuxtLink>
        </div>
        <div class="hero__proof">
          <span>Start with a phone camera</span>
          <span>Take cards for the first time</span>
          <span>Listed on ACP · AP2 · UCP · MCP</span>
        </div>
      </div>
    </section>

    <section class="section section--rule">
      <div class="wrap">
        <h6 class="eyebrow">Why now</h6>
        <h2 class="why__title">The rules of shopping just changed</h2>
        <p class="why__lede">
          Every major AI assistant can now shop on a customer's behalf. Almost no small merchant can
          be found or paid through one yet.
        </p>
        <div class="auto-grid why__cards" style="--min: 280px">
          <article
            v-for="item in whyNow"
            :key="item.kicker"
            class="card elev-sm why__card"
            :class="{ 'card--featured': item.featured }"
          >
            <div class="card-kicker">{{ item.kicker }}</div>
            <h4 class="card-title why__card-title">{{ item.title }}</h4>
            <p class="card-body dim">{{ item.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--rule">
      <div class="wrap auto-grid" style="--gap: 44px">
        <div v-for="step in steps" :key="step.n">
          <div class="label">{{ step.n }}</div>
          <h4 class="steps__title">{{ step.title }}</h4>
          <p class="steps__body">{{ step.body }}</p>
        </div>
      </div>
      <div class="wrap steps__link">
        <NuxtLink to="/how-it-works">The full flow, stage by stage →</NuxtLink>
      </div>
    </section>

    <section class="section--close">
      <div class="wrap closer">
        <div>
          <h2 class="closer__title">Be one of the first shops in the agentic economy.</h2>
          <p class="closer__body">
            We are onboarding a first pilot market. Leave your details and we will come to you.
          </p>
        </div>
        <NuxtLink to="/waitlist" class="btn btn-primary closer__btn">Join the waitlist</NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding: 120px 40px 96px;
}
/* Accent bloom behind the headline, bled off the top-left corner. */
.hero__glow {
  position: absolute;
  top: -220px;
  left: -140px;
  width: 640px;
  height: 640px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    color-mix(in srgb, var(--color-accent-300) 12%, transparent),
    transparent 65%
  );
  pointer-events: none;
}
.hero__inner { position: relative; }
.hero__title {
  max-width: 15ch;
  margin: 22px 0 0;
  font-size: clamp(44px, 6vw, 82px);
  line-height: 1.02;
  letter-spacing: -0.03em;
}
.hero__lede {
  max-width: 56ch;
  margin: 26px 0 0;
  font-size: 19px;
  line-height: 1.5;
  color: color-mix(in srgb, var(--color-text) 72%, transparent);
}
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 36px;
}
.hero__btn {
  padding: 11px 20px;
  font-size: 15px;
}
.hero__btn--plain { color: var(--color-text); }
.hero__proof {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 56px;
  font-size: 13px;
  color: color-mix(in srgb, var(--color-text) 55%, transparent);
}

.why__title {
  max-width: 24ch;
  margin: 14px 0 0;
  font-size: clamp(30px, 3.6vw, 46px);
  letter-spacing: -0.025em;
}
.why__lede {
  max-width: 60ch;
  margin: 18px 0 0;
  font-size: 17px;
  color: color-mix(in srgb, var(--color-text) 70%, transparent);
}
.why__cards { margin-top: 52px; }
.why__card { padding: 26px; }
.why__card-title { margin-top: 8px; }

.steps__title { margin: 10px 0 8px; }
.steps__body {
  margin: 0;
  color: color-mix(in srgb, var(--color-text) 70%, transparent);
}
.steps__link { margin-top: 36px; }

.closer__title {
  max-width: 22ch;
  margin: 0;
  font-size: clamp(28px, 3.4vw, 42px);
  letter-spacing: -0.025em;
}
.closer__body {
  max-width: 48ch;
  margin: 16px 0 0;
  color: color-mix(in srgb, var(--color-text) 70%, transparent);
}
.closer__btn {
  padding: 13px 24px;
  font-size: 16px;
}

@media (max-width: 720px) {
  .hero { padding: 80px 20px 72px; }
  .hero__proof { gap: 12px 24px; margin-top: 40px; }
}
</style>
