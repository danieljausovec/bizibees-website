<script setup lang="ts">
// Illustrative example only — replace with your real API once it exists.
const snippet = `curl https://api.bizibees.eu/v1/payment-links \\
  -H "Authorization: Bearer $BIZIBEES_KEY" \\
  -H "Bizibees-Company: company_a" \\
  -d product=prod_workshop \\
  -d quantity=1 \\
  -d auto_invoice=true`

const points = [
  { title: 'MCP connector', text: 'Ask your AI assistant to “create a payment link for my workshop” — it happens in Bizibees.' },
  { title: 'Your permissions, always', text: 'AI can only do what the signed-in user can do. Sending, issuing or deleting always needs your click.' },
  { title: 'Every action logged', text: 'A full history of what was done, by whom — person or assistant.' },
]
</script>

<template>
  <section id="ai" class="section section--dark">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">AI &amp; open API</span>
        <h2 class="h2">Use Bizibees from the AI tools you already use.</h2>
        <p class="lead">Everything in the app is available through a documented public API — the same one our own app uses — and an MCP connector for ChatGPT, Claude and other AI assistants.</p>
      </div>
      <div class="ai-grid">
        <div class="code">
          <div class="code__bar">
            <span class="dot" /><span class="dot" /><span class="dot" />
            <span class="code__name">create-payment-link.sh · illustrative</span>
          </div>
          <pre><code>{{ snippet }}</code></pre>
        </div>
        <div class="points">
          <div v-for="p in points" :key="p.title" class="point">
            <strong>{{ p.title }}</strong>
            <span>{{ p.text }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ai-grid { display: flex; flex-wrap: wrap; gap: 20px; }
.code { flex: 1 1 460px; min-width: 0; background: var(--dark-card); border: 1px solid var(--dark-line); border-radius: 18px; overflow: hidden; }
.code__bar { display: flex; align-items: center; gap: 8px; padding: 12px 16px; border-bottom: 1px solid var(--dark-line); }
.dot { width: 10px; height: 10px; border-radius: 999px; background: #3a3a44; }
.code__name { margin-left: 8px; font-family: var(--font-mono); font-size: 12px; color: #a5a5b0; }
pre { margin: 0; padding: 22px; font-family: var(--font-mono); font-size: 13.5px; line-height: 1.75; color: #e4e4ea; overflow-x: auto; }
.points { flex: 1 1 380px; min-width: 0; display: flex; flex-direction: column; gap: 14px; }
.point { background: var(--dark-card); border: 1px solid var(--dark-line); border-radius: 18px; padding: 22px; display: flex; flex-direction: column; gap: 8px; }
.point strong { font-size: 16px; font-weight: 600; }
.point span { font-size: 14px; line-height: 1.6; color: #b7b7c2; }
</style>
