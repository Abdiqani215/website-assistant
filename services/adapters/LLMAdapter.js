/** OpenAI-compatible LLM adapter — works with groq, openrouter, openai, ollama, etc. */
export class LLMAdapter {
  constructor(env) { this.env = env || {}; }
  async generate(prompt) {
    const res = await fetch((this.env.LLM_BASE_URL||'').replace(/\/$/,'') + '/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type':'application/json', Authorization:`Bearer ${this.env.LLM_API_KEY}` },
      body: JSON.stringify({ model: this.env.LLM_MODEL, messages:[{role:'user',content:prompt}] }),
    });
    const d = await res.json();
    return d?.choices?.[0]?.message?.content ?? '';
  }
}
