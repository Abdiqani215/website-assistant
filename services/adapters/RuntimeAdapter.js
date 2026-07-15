/**
 * RuntimeAdapter — the ONLY file that knows about the execution runtime.
 * Today: Node/Bun/Cloudflare. Tomorrow: anything. Replace this file to
 * migrate the agent; nothing else in the repo changes.
 */
export class RuntimeAdapter {
  constructor(env) { this.env = env || {}; }
  get port() { return this.env.PORT || 8080; }
  secret(key) { return this.env[key] ?? null; }
  log(level, msg) { console[`log`?.[level] ? level : 'log'](msg); }
}
