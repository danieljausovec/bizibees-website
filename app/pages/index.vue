<script setup lang="ts">
definePageMeta({
  footerTagline:
    'The storefront, the payment and the delivery, for the shop that never needed a website until now.',
})

useSeoMeta({
  title: 'The agentic storefront for every shop',
  description:
    'A leap beyond e-commerce: from the counter to the agentic economy, skipping the website era entirely. Your shelves become a live catalog, and payment and delivery are handled order by order.',
})

const orderTrace = [
  { stage: 'Order', detail: 'WhatsApp · 2 × COFFEE-1KG' },
  { stage: 'Payment', detail: '€30.70 · card authorised' },
  { stage: 'Courier', detail: 'Local partner · pickup 16:20' },
  { stage: 'Tag', detail: 'BB-4471-QR issued', lit: true },
]

const whyNow = [
  {
    kicker: '01 / Plumbing',
    title: 'New protocols, weeks old',
    body: "UCP, OpenAI's ACP, Google and PayPal's AP2 and Visa's Agent Pay all shipped within months of each other in 2026. For the first time an AI agent has a standard way to browse a catalog and complete a purchase.",
  },
  {
    kicker: '02 / Enterprise',
    title: 'Enterprise already moved',
    body: 'Large payments and commerce platforms have started shipping their own agentic-commerce layers, aimed at their existing enterprise clients and reached through direct sales relationships, not self-serve signup.',
  },
  {
    kicker: '03 / The gap',
    title: 'The SME segment is untouched',
    body: "A corner shop gets no enterprise sales call, can't build a protocol integration itself, and often still can't take a card payment at all. That is what BiziBees does.",
    lit: true,
  },
]

const solution = [
  {
    kicker: '01 Capture',
    title: 'Any starting point',
    body: 'Build a live catalog from a phone camera, a file, or a direct system connection. Whatever you already have is a starting point.',
  },
  {
    kicker: '02 Sell',
    title: 'Whichever channel fits',
    body: 'Customers order through WhatsApp, SMS, voice, a local messaging app, or a native AI shopping agent. No app to download, no AI literacy required.',
  },
  {
    kicker: '03 Fulfil',
    title: 'Paid and picked up',
    body: 'Payment is processed and delivery is booked with a local or global logistics partner, automatically, order by order.',
  },
]

const replaces = [
  {
    kicker: 'Discovery',
    title: 'Google Search, for AI agents',
    body: 'Any shopping agent can find the merchant.',
  },
  {
    kicker: 'Storefront',
    title: 'WordPress, without the build',
    body: 'A live, sellable storefront with zero web development.',
  },
  {
    kicker: 'Trust',
    title: 'Airbnb, for a shop with no online reputation yet',
    body: 'Trust between a buyer and a merchant who has never sold outside their four walls.',
  },
  {
    kicker: 'Local delivery',
    title: 'Delivery Hero, for anything on a shelf',
    body: 'Same-city delivery, brokered through local couriers.',
  },
  {
    kicker: 'Cross-border',
    title: 'DHL, on demand',
    body: 'Cross-border fulfillment through a global partner, no contract to negotiate.',
  },
  {
    kicker: 'Payments',
    title: 'A payments network, orchestrated',
    body: 'Card acceptance and settlement, with no license to hold.',
  },
]
</script>

<template>
  <div>
    <section class="hero">
      <div class="hero__grid" />
      <div class="hero__bloom" />
      <div class="wrap hero__inner">
        <div>
          <div class="protocols">
            <span class="protocols__dot" />ACP · AP2 · UCP · MCP
          </div>
          <h1 class="hero__title">The agentic storefront for every shop.</h1>
          <p class="hero__lede">
            A leap beyond e-commerce: from the counter to the agentic economy, skipping the website
            era entirely. Your shelves become a live catalog, customers order through whichever
            channel fits your market, and payment and delivery are handled order by order.
          </p>
          <div class="hero__actions">
            <NuxtLink to="/waitlist" class="btn btn-primary hero__btn">Join the waitlist</NuxtLink>
            <NuxtLink to="/how-it-works" class="btn btn-ghost hero__btn hero__btn--plain">
              See how it works →
            </NuxtLink>
          </div>
          <div class="hero__proof mono">
            <span>No website required</span><span>No POS required</span><span>Self-serve</span>
          </div>
        </div>

        <div class="demo">
          <div class="api">
            <div class="api__bar mono mono--sm">
              <span>GET /agent/catalog?shop=pekarna-mlinar</span>
              <span class="api__status">200 OK</span>
            </div>
            <pre v-pre class="api__body">{
  "merchant": "Pekarna Mlinar",
  "source": "photo_capture",
  "protocols": ["acp", "ap2", "ucp", "mcp"],
  "items": [
    { "sku": "COFFEE-1KG", "price": 13.40, "stock": 6 },
    { "sku": "RYE-LOAF",   "price":  3.20, "stock": 22 }
  ],
  "fulfilment": { "local_courier": true, "cross_border": true }
}</pre>
          </div>
          <div class="trace">
            <div v-for="step in orderTrace" :key="step.stage" class="trace__row">
              <span class="mono mono--sm">{{ step.stage }}</span>
              <span :class="{ 'trace__detail--lit': step.lit }">{{ step.detail }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--rule">
      <div class="wrap">
        <div class="mono mono--accent">Why now</div>
        <h2 class="section-title why__title">The rules of shopping just changed</h2>
        <p class="body-copy why__lede">
          Every major AI assistant just gained the ability to shop, but almost no small merchant can
          be found or paid through one yet. A shop with no site is invisible by default, and so is
          one with a full web shop if it never exposes a feed an agent can read.
        </p>
        <div class="auto-grid why__cards" style="--min: 290px">
          <article
            v-for="item in whyNow"
            :key="item.kicker"
            class="panel"
            :class="{ 'panel--lit': item.lit }"
          >
            <div class="mono mono--sm" :class="{ 'mono--accent': item.lit }">{{ item.kicker }}</div>
            <h4 class="panel-title">{{ item.title }}</h4>
            <p class="panel-copy">{{ item.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--rule">
      <div class="wrap">
        <div class="mono mono--accent">The solution</div>
        <h2 class="section-title solution__title">
          One merchant onboarding. Every channel a buyer might use.
        </h2>
        <div class="auto-grid solution__cards" style="--min: 260px">
          <div v-for="step in solution" :key="step.kicker" class="panel panel--interactive">
            <div class="mono mono--sm mono--accent">{{ step.kicker }}</div>
            <h4 class="panel-title">{{ step.title }}</h4>
            <p class="panel-copy">{{ step.body }}</p>
          </div>
        </div>
        <div class="solution__link">
          <NuxtLink to="/how-it-works">The full flow, path by path →</NuxtLink>
        </div>
      </div>
    </section>

    <section class="section section--rule">
      <div class="wrap">
        <div class="mono mono--accent">What we replace</div>
        <h2 class="section-title replaces__title">
          Not a catalog. Not a website. Not a courier. All of them, at once.
        </h2>
        <p class="body-copy replaces__lede">
          BiziBees bundles what would otherwise take six different vendors into one self-serve
          platform.
        </p>
        <div class="cell-grid replaces" style="--min: 300px">
          <div v-for="item in replaces" :key="item.kicker" class="cell">
            <div class="mono mono--sm">{{ item.kicker }}</div>
            <h4 class="replaces__item-title">{{ item.title }}</h4>
            <p class="replaces__item-copy">{{ item.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section--close section--lit">
      <div class="bloom closer__bloom" />
      <div class="wrap closer">
        <div>
          <h2 class="closer__title">Every corner shop deserves a place in the agentic economy.</h2>
          <p class="body-copy closer__body">
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
  border-bottom: 1px solid var(--color-neutral-800);
}
/* Blueprint grid, faded out towards the bottom right. */
.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--color-neutral-800) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-neutral-800) 1px, transparent 1px);
  background-size: 56px 56px;
  -webkit-mask-image: radial-gradient(80% 60% at 30% 0%, #000, transparent 75%);
  mask-image: radial-gradient(80% 60% at 30% 0%, #000, transparent 75%);
  opacity: 0.5;
  pointer-events: none;
}
.hero__bloom {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    90% 70% at 20% -10%,
    color-mix(in srgb, var(--color-accent) 14%, transparent),
    transparent 60%
  );
  pointer-events: none;
}
.hero__inner {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: 56px;
  align-items: center;
  padding: 100px 28px 92px;
}

.protocols {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 11px;
  border: 1px solid var(--color-neutral-800);
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: 11.5px;
  letter-spacing: 0.02em;
  color: var(--color-neutral-300);
}
.protocols__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-accent);
}

.hero__title {
  max-width: 17ch;
  margin: 24px 0 0;
  font-size: clamp(44px, 5.4vw, 74px);
  line-height: 1.03;
  letter-spacing: -0.038em;
}
.hero__lede {
  max-width: 54ch;
  margin: 22px 0 0;
  font-size: 18.5px;
  line-height: 1.6;
  color: var(--color-neutral-200);
}
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 32px;
}
.hero__btn {
  padding: 11px 20px;
  font-size: 15px;
}
.hero__btn--plain { color: var(--color-text); }
.hero__proof {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 44px;
  letter-spacing: normal;
}

/* — the worked example beside the headline — */
.demo {
  display: grid;
  gap: 14px;
}
.api {
  border: 1px solid var(--color-neutral-800);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
}
.api__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 14px;
  border-bottom: 1px solid var(--color-neutral-800);
  letter-spacing: 0.06em;
  text-transform: none;
}
.api__status { color: var(--color-accent-300); }
.api__body {
  margin: 0;
  padding: 16px;
  font-family: var(--font-mono);
  font-size: 12.5px;
  line-height: 1.75;
  color: var(--color-neutral-200);
  overflow-x: auto;
}

/* One order's journey, as hairline-separated rows. */
.trace {
  display: grid;
  gap: 1px;
  background: var(--color-neutral-800);
  border: 1px solid var(--color-neutral-800);
  border-radius: var(--radius-md);
  overflow: hidden;
}
.trace__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 14px;
  background: var(--color-bg);
  font-size: 13px;
}
.trace__row .mono { letter-spacing: 0.06em; }
.trace__detail--lit { color: var(--color-accent-300); }

.why__title { max-width: 24ch; }
.why__lede { max-width: 64ch; font-size: 17px; }
.why__cards { margin-top: 48px; }
.panel { padding: 28px; }

.solution__title { max-width: 26ch; }
.solution__cards { margin-top: 48px; }
.solution__link { margin-top: 24px; }

.replaces__title { max-width: 26ch; }
.replaces__lede { max-width: 58ch; font-size: 17px; }
.replaces { margin-top: 48px; }
.replaces__item-title { margin: 14px 0 6px; }
.replaces__item-copy {
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: var(--color-neutral-300);
}

.closer__bloom {
  background: radial-gradient(
    80% 120% at 82% 110%,
    color-mix(in srgb, var(--color-accent) 12%, transparent),
    transparent 60%
  );
}
.closer__title {
  max-width: 22ch;
  margin: 0;
  font-size: clamp(30px, 3.3vw, 46px);
  letter-spacing: -0.032em;
}
.closer__body {
  max-width: 48ch;
  font-size: 17px;
}
.closer__btn {
  padding: 13px 24px;
  font-size: 16px;
}

@media (max-width: 720px) {
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 64px 20px 72px;
  }
  .hero__proof {
    gap: 10px 20px;
    margin-top: 32px;
  }
  .panel { padding: 22px; }
}
</style>
