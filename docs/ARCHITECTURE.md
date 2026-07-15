# Architecture

Website Assistant assembled from the "Website Assistant" template using clean architecture, a single runtime adapter, and 2 plugin(s).

## Modules

- **Brain** — Orchestrates reasoning, memory and tool calls (enabled)
- **Memory** — Short and long-term conversation memory (enabled)
- **Reasoning Engine** — Step-by-step planning over tools (enabled)
- **Planner** — Decomposes goals into executable steps (enabled)
- **Knowledge Engine** — Retrieves grounded context from project knowledge (enabled)
- **Repository Generator** — Assembles the deployable repository (enabled)
- **Plugin Manager** — Install/configure/remove integrations (enabled)
- **Integration Manager** — Routes events between plugins and brain (enabled)
- **Workflow Builder** — Executes workflow templates (enabled)
- **Authentication** — Per-project auth & permissions (enabled)
- **Deployment Manager** — Docker/Cloudflare/VPS targets (enabled)
- **GitHub Manager** — Repo creation & push (enabled)
- **Monitoring** — Health & uptime (disabled)
- **Analytics** — Usage & business metrics (enabled)
- **Admin Dashboard** — Generated agent dashboard (enabled)
- **Marketplace** — Browse/install templates & plugins (disabled)
- **API Manager** — Expose/secure agent APIs (enabled)
- **Background Worker** — Async jobs (enabled)
- **Scheduler** — Cron & delayed tasks (enabled)
- **Testing Framework** — Agent behavior tests (disabled)
- **Documentation Generator** — README & docs (enabled)
