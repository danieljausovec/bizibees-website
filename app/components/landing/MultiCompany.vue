<script setup lang="ts">
const companies = [
  { letter: 'A', name: 'Company A d.o.o.', meta: 'VAT SI · Ljubljana', tone: 'amber' },
  { letter: 'B', name: 'Company B s.p.', meta: 'VAT SI · Maribor', tone: 'blue' },
  { letter: 'C', name: 'Company C GmbH', meta: 'VAT AT · Graz', tone: 'green' },
]
const active = ref('A')
</script>

<template>
  <section class="section">
    <div class="container split">
      <div class="split__copy">
        <span class="eyebrow">Multi-company</span>
        <h2 class="h2">All your companies. One login.</h2>
        <p class="lead">
          Run two companies, a family business or a holding? Add them all to one account and one subscription.
          Each stays legally separate — its own details, payments, customers and invoices.
        </p>
        <ul class="ticks">
          <li><AppIcon name="check" :size="18" :stroke="2" />Switch companies in one click</li>
          <li><AppIcon name="check" :size="18" :stroke="2" />Invite your team with roles per company</li>
          <li><AppIcon name="check" :size="18" :stroke="2" />Local VAT and invoice rules for each company’s country</li>
        </ul>
      </div>

      <div class="switcher">
        <div class="switcher__label" id="switcher-label">SWITCH COMPANY</div>
        <div role="radiogroup" aria-labelledby="switcher-label" class="switcher__list">
          <button
            v-for="c in companies"
            :key="c.letter"
            type="button"
            role="radio"
            :aria-checked="active === c.letter"
            class="switcher__item"
            :class="{ 'is-active': active === c.letter }"
            @click="active = c.letter"
          >
            <span class="switcher__badge" :class="`tone-${c.tone}`">{{ c.letter }}</span>
            <span class="switcher__meta"><strong>{{ c.name }}</strong><span>{{ c.meta }}</span></span>
            <AppIcon v-if="active === c.letter" name="check" :size="18" :stroke="2.2" />
          </button>
        </div>
        <div class="switcher__divider" />
        <div class="switcher__add"><AppIcon name="plus" :size="16" :stroke="2" />Add company</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.split { display: flex; flex-wrap: wrap; gap: 64px; align-items: center; }
.split__copy { flex: 1 1 420px; min-width: 0; display: flex; flex-direction: column; gap: 18px; }
.ticks { margin-top: 8px; display: flex; flex-direction: column; gap: 12px; font-size: 15px; color: var(--ink-2); }
.ticks li { display: flex; gap: 10px; align-items: flex-start; }
.ticks svg { flex: none; margin-top: 2px; color: var(--ink); }

.switcher { flex: 1 1 420px; min-width: 0; background: #fff; border: 1px solid var(--line); border-radius: var(--radius-lg); box-shadow: 0 30px 60px -24px rgba(19,19,22,.2); padding: 10px; }
.switcher__label { padding: 12px 14px 8px; font-size: 12px; font-weight: 600; color: var(--muted); letter-spacing: 0.06em; }
.switcher__list { display: flex; flex-direction: column; gap: 4px; }
.switcher__item { display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 12px; border: 0; background: transparent; text-align: left; cursor: pointer; color: var(--ink); min-height: 60px; }
.switcher__item:hover { background: #fafafb; }
.switcher__item.is-active { background: var(--bg-soft); }
.switcher__badge { width: 36px; height: 36px; border-radius: 10px; font-weight: 700; font-size: 14px; display: flex; align-items: center; justify-content: center; flex: none; }
.tone-amber { background: var(--accent); color: var(--ink); }
.tone-blue { background: #e8eeff; color: #2440a8; }
.tone-green { background: var(--success-soft); color: var(--success); }
.switcher__meta { flex: 1; display: flex; flex-direction: column; gap: 2px; font-size: 15px; }
.switcher__meta span { font-size: 13px; color: var(--muted); }
.switcher__divider { height: 1px; background: var(--line-soft); margin: 4px 10px; }
.switcher__add { display: flex; align-items: center; gap: 10px; padding: 12px 14px; font-size: 14px; font-weight: 500; color: var(--ink-3); }
</style>
