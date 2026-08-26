<script setup lang="ts">
definePageMeta({
  footerTagline: 'One onboarding, every channel a buyer might use.',
})

useSeoMeta({
  title: 'How it works',
  description:
    'Human or agent. Four parallel paths get a shop\'s inventory in, and one broker agent routes every order to the right payment and logistics partner.',
})

const paths = [
  {
    path: 'Path A',
    title: 'Photo & capture',
    body: 'Photograph the shelves; the app extracts item, price and a stock estimate.',
    tag: 'Fastest go-live',
    highlight: true,
  },
  {
    path: 'Path B',
    title: 'File import',
    body: 'Bulk upload or email a spreadsheet, or an export from an existing till.',
    tag: 'Good for volume',
  },
  {
    path: 'Path C',
    title: 'API integration',
    body: 'A direct connection to an existing POS or e-commerce platform.',
    tag: 'Near real-time',
  },
  {
    path: 'Path D',
    title: 'Agent-ready connection',
    body: "The merchant's own agent-native system talks directly to the BiziBees agent, with no integration built per merchant.",
    tag: 'Zero build, true real-time',
  },
]

const hive = [
  { label: 'Merchant intake', items: ['Photo capture', 'File upload', 'API', 'AI agent'] },
  {
    label: 'AI shopping surfaces',
    items: ['ChatGPT (ACP)', 'Claude / MCP', 'Gemini (AP2)', 'WhatsApp & voice'],
  },
  { label: 'Payment options', items: ['Adyen', 'Mollie', 'Stripe', 'Local acquirers'] },
  {
    label: 'Logistics partners',
    items: ['Local courier', 'Global carrier', 'Postal network', 'Regional partner'],
  },
]
</script>

<template>
  <div>
    <section class="section section--intro section--rule">
      <div class="wrap">
        <div class="mono mono--accent">How it works</div>
        <h1 class="page-title intro__title">
          One merchant onboarding. Every channel a buyer might use.
        </h1>
        <p class="lede intro__lede">
          Human or agent. BiziBees turns a shop into a fully agentic storefront without asking it to
          build anything.
        </p>
      </div>
    </section>

    <section class="section section--rule">
      <div class="wrap">
        <div class="mono mono--accent">Inventory</div>
        <h2 class="section-title paths__title">
          Any starting point. Every merchant becomes agent-ready.
        </h2>
        <p class="body-copy paths__lede">
          These aren't steps in a sequence, they're parallel paths. Pick whichever fits your market
          and your level of digitalization; every path feeds the same outcome, a live agent-ready
          storefront.
        </p>
        <div class="auto-grid paths" style="--min: 240px; --gap: 18px">
          <article v-for="item in paths" :key="item.path" class="panel path">
            <div class="mono mono--sm">{{ item.path }}</div>
            <h4 class="path__title">{{ item.title }}</h4>
            <p class="path__body">{{ item.body }}</p>
            <span class="tag path__tag" :class="item.highlight ? 'tag-outline' : 'tag-neutral'">
              {{ item.tag }}
            </span>
          </article>
        </div>
        <p class="note paths__note">
          A merchant in a low-digitalization market might stay on photo capture indefinitely. One
          already running a modern POS plugs straight into API integration. Whichever path fits, the
          destination is the same: a live feed into the same agent protocols (ACP, AP2, UCP, MCP).
        </p>
      </div>
    </section>

    <section class="section section--rule">
      <div class="wrap">
        <div class="mono mono--accent">Fulfilment</div>
        <h2 class="section-title flow__title">One order, orchestrated end to end</h2>
        <p class="body-copy flow__lede">
          BiziBees never builds the courier fleet or holds the payment license. It routes each order
          to the right partner automatically.
        </p>

        <div class="auto-grid flow" style="--min: 230px; --gap: 18px">
          <div class="panel flow__panel">
            <div class="flow-label">Buyer</div>
            <p class="flow__copy">
              Orders through whichever channel fits the market: WhatsApp, SMS, voice, or an AI
              shopping agent.
            </p>
          </div>
          <div class="panel panel--lit flow__panel">
            <div class="flow-label">BiziBees</div>
            <p class="flow__copy">Confirms stock, classifies the order, picks the best partner.</p>
          </div>
          <div class="flow__partners">
            <div class="panel flow__partner">
              <div class="flow-label">Payment</div>
              <p class="flow__copy flow__copy--sm">
                Processed via an existing acquiring partner (Adyen, Mollie or Stripe).
              </p>
            </div>
            <div class="panel flow__partner">
              <div class="flow-label">Logistics</div>
              <p class="flow__copy flow__copy--sm">
                Local courier for same-market delivery, global carrier for shipping.
              </p>
            </div>
          </div>
        </div>

        <div class="collection">
          <span class="tag tag-outline">Collection tag</span>
          <p class="collection__copy">
            Every order generates a QR or barcode carrying the pickup address, the item manifest and
            handling notes, sent straight to the chosen courier for pickup. No phone calls.
          </p>
        </div>
      </div>
    </section>

    <section class="section section--rule">
      <div class="wrap">
        <div class="mono mono--accent">Architecture</div>
        <h2 class="section-title hive__title">One hive. Every channel plugs in, from every side.</h2>
        <p class="body-copy hive__lede">
          Merchant intake, AI shopping surfaces, payment rails and logistics partners each form their
          own hive of options, all routed through one BiziBees core.
        </p>
        <div class="auto-grid hive" style="--min: 240px; --gap: 18px">
          <div v-for="group in hive" :key="group.label" class="panel hive__group">
            <div class="hive__label">{{ group.label }}</div>
            <div class="hive__items">
              <span v-for="item in group.items" :key="item">{{ item }}</span>
            </div>
          </div>
        </div>
        <div class="panel panel--lit core">
          <div class="hive__label core__label">BiziBees core</div>
          <p class="flow__copy">Every side of the hive routes through one broker agent.</p>
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
/* This page's accent marks sit a step back from the raw accent. */
.tag-outline {
  border-color: var(--color-accent-700);
  color: var(--color-accent-300);
}
/* Uppercase labels inside the flow and hive panels are set in the body face,
   not the mono one — they read as headings, not as machine output. */
.flow-label {
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent-300);
}

.intro__title { max-width: 20ch; }
.intro__lede { max-width: 58ch; }

.paths__title,
.flow__title,
.hive__title { margin-top: 14px; }
.paths__lede { max-width: 64ch; }
.paths { margin-top: 44px; }
.path {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.path__title { margin: 0; }
.path__body {
  margin: 0;
  color: var(--color-neutral-200);
}
.path__tag {
  align-self: flex-start;
  margin-top: 6px;
}
.paths__note { max-width: 74ch; font-size: 14px; }

.flow__lede { max-width: 60ch; }
.flow {
  margin-top: 44px;
  align-items: stretch;
}
.flow__panel { padding: 24px; }
.flow__copy {
  margin: 10px 0 0;
  color: var(--color-neutral-200);
}
.flow__copy--sm {
  margin-top: 8px;
  font-size: 14px;
}
.flow__partners {
  display: grid;
  gap: 18px;
}
.flow__partner { padding: 20px; }

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
  color: var(--color-neutral-200);
}

.hive__lede { max-width: 64ch; }
.hive { margin-top: 44px; }
.hive__group { padding: 22px; }
.hive__label {
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-neutral-400);
}
.hive__items {
  display: grid;
  gap: 8px;
  margin-top: 14px;
  font-size: 15px;
}

.core {
  margin-top: 18px;
  padding: 22px;
  text-align: center;
}
.core__label { color: var(--color-accent-300); }
.core .flow__copy { margin-top: 8px; }

.closer--tight { gap: 32px; }
.closer__title {
  max-width: 20ch;
  margin: 0;
  font-size: clamp(26px, 3.2vw, 38px);
}
.closer__btn {
  padding: 13px 24px;
  font-size: 16px;
}
</style>
