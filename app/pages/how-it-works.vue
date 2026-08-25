<script setup lang="ts">
useSeoMeta({
  title: 'How it works',
  description:
    'One onboarding, every channel a buyer might use: four ways to get your inventory in, and an order flow that routes payment and delivery to the right partner automatically.',
})

const inventoryStages = [
  {
    stage: 'Stage 1',
    title: 'Photo & capture',
    body: 'Photograph the shelves; the app extracts item, price and a stock estimate.',
    tag: 'Fastest go-live',
    highlight: true,
  },
  {
    stage: 'Stage 2',
    title: 'File import',
    body: 'Upload or email a spreadsheet, or an export from your existing till.',
    tag: 'Good for volume',
  },
  {
    stage: 'Stage 3',
    title: 'API integration',
    body: 'A direct connection to an existing POS or e-commerce platform.',
    tag: 'Near real-time',
  },
  {
    stage: 'Stage 4',
    title: 'Agent-ready connection',
    body: 'Your own agent-native system talks directly to the BiziBees agent.',
    tag: 'Real-time, zero build',
  },
]
</script>

<template>
  <div>
    <section class="section section--rule section--intro">
      <div class="wrap">
        <h6 class="eyebrow">How it works</h6>
        <h1 class="page-title intro__title">One onboarding. Every channel a buyer might use.</h1>
        <p class="lede intro__lede">
          BiziBees turns a shop into an agentic storefront without asking it to build anything.
          Start where you are today; the system gets sharper as your data does.
        </p>
      </div>
    </section>

    <section class="section section--rule">
      <div class="wrap">
        <h2 class="section-title">Inventory: four ways in</h2>
        <p class="body-copy stages__lede">
          You can go live at Stage 1. The later stages raise data freshness, not the bar to launch.
        </p>
        <div class="auto-grid stages" style="--min: 240px; --gap: 18px">
          <article v-for="item in inventoryStages" :key="item.stage" class="card elev-sm stage">
            <div class="card-kicker stage__kicker">{{ item.stage }}</div>
            <h4 class="stage__title">{{ item.title }}</h4>
            <p class="stage__body">{{ item.body }}</p>
            <span
              class="tag stage__tag"
              :class="item.highlight ? 'tag-outline' : 'tag-neutral'"
            >{{ item.tag }}</span>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--rule">
      <div class="wrap">
        <h2 class="section-title">One order, orchestrated end to end</h2>
        <p class="body-copy flow__lede">
          BiziBees never builds a courier fleet or holds a payment license. It routes each order to
          the right partner automatically.
        </p>

        <div class="auto-grid flow" style="--min: 230px; --gap: 18px">
          <div class="panel">
            <div class="label label--accent">Buyer</div>
            <p class="dim">Orders via WhatsApp, voice, or an AI shopping agent.</p>
          </div>
          <div class="panel panel--accent">
            <div class="label label--accent">BiziBees</div>
            <p class="flow__hero-copy">Confirms stock, classifies the order, picks the best partner.</p>
          </div>
          <div class="flow__partners">
            <div class="panel flow__partner">
              <div class="label label--accent">Payment</div>
              <p class="dim flow__partner-copy">Through an acquiring partner: Adyen, Mollie or Stripe.</p>
            </div>
            <div class="panel flow__partner">
              <div class="label label--accent">Logistics</div>
              <p class="dim flow__partner-copy">
                A local courier for the same market, a global carrier for shipping.
              </p>
            </div>
          </div>
        </div>

        <div class="collection">
          <span class="tag tag-outline">Collection tag</span>
          <p class="collection__copy">
            Every order generates a QR or barcode carrying the pickup address, the item manifest and
            handling notes, sent straight to the chosen courier. No phone calls.
          </p>
        </div>
      </div>
    </section>

    <section class="section--close">
      <div class="wrap closer closer--tight">
        <h2 class="section-title closer__title">Ready to put your shelves online?</h2>
        <NuxtLink to="/waitlist" class="btn btn-primary closer__btn">Join the waitlist</NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.intro__title { max-width: 20ch; }
.intro__lede { max-width: 58ch; }

.stages__lede { max-width: 58ch; }
.stages { margin-top: 44px; }
.stage {
  padding: 24px;
  gap: 10px;
}
/* Stage numbers read as ordinals here, not as accent marks. */
.stage__kicker { color: color-mix(in srgb, var(--color-text) 50%, transparent); }
.stage__title { margin: 0; }
.stage__body {
  margin: 0;
  color: color-mix(in srgb, var(--color-text) 72%, transparent);
}
.stage__tag {
  align-self: flex-start;
  margin-top: 6px;
}

.flow__lede { max-width: 58ch; }
.flow {
  margin-top: 44px;
  align-items: stretch;
}
.flow__hero-copy { color: color-mix(in srgb, var(--color-text) 78%, transparent); }
.flow__partners {
  display: grid;
  gap: 18px;
}
.flow__partner { padding: 20px; }
.flow__partner-copy {
  margin-top: 8px;
  font-size: 14px;
}

.collection {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  align-items: baseline;
  margin-top: 28px;
  padding: 24px;
  border-radius: var(--radius-md);
  background: var(--color-surface);
}
.collection__copy {
  margin: 0;
  max-width: 70ch;
  color: color-mix(in srgb, var(--color-text) 75%, transparent);
}

.closer--tight { gap: 32px; }
.closer__title { max-width: 20ch; }
.closer__btn {
  padding: 13px 24px;
  font-size: 16px;
}
</style>
