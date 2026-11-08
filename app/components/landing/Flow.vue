<script setup lang="ts">
const steps = [
  { title: 'Add a product', text: 'Once, in your catalogue.', auto: false },
  { title: 'Share a link', text: 'On the web, by email or on social.', auto: false },
  { title: 'Customer pays', text: 'Card, wallet or bank.', auto: true },
  { title: 'Invoice sent', text: 'Correct VAT and numbering.', auto: true },
  { title: 'Accountant has it', text: 'Export or e-invoice.', auto: true },
]
</script>

<template>
  <section class="section section--soft">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">How it works</span>
        <h2 class="h2">From “I have a product” to “I’ve been paid” in minutes.</h2>
        <p class="lead">Steps three to five happen on their own. No spreadsheet required.</p>
      </div>
      <ol class="steps">
        <li v-for="(s, i) in steps" :key="s.title" class="step" :class="{ 'step--auto': s.auto }">
          <span class="step__num">{{ String(i + 1).padStart(2, '0') }}<template v-if="s.auto"> · AUTOMATIC</template></span>
          <span class="step__title">{{ s.title }}</span>
          <span class="step__text">{{ s.text }}</span>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.steps { display: flex; flex-wrap: wrap; gap: 14px; }
.step { flex: 1 1 190px; min-width: 0; background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); padding: 22px; display: flex; flex-direction: column; gap: 10px; }
.step--auto { background: var(--ink); border-color: var(--ink); color: #fff; }
.step__num { font-family: var(--font-mono); font-size: 13px; font-weight: 500; color: var(--muted); }
.step--auto .step__num { color: var(--accent); }
.step__title { font-size: 17px; font-weight: 600; }
.step__text { font-size: 14px; line-height: 1.55; color: var(--ink-3); }
.step--auto .step__text { color: var(--dark-muted); }
</style>
