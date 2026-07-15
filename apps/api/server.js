import { handleRequest } from './handler.js';
const PORT = process.env.PORT || 8080;
const server = Bun?.serve ?? null;
const handler = (req) => handleRequest(req, process.env);
if (typeof Bun !== 'undefined') { Bun.serve({ port: PORT, fetch: handler }); }
else {
  const http = await import('node:http');
  http.createServer((req, res) => {
    handler(req).then((r) => { res.writeHead(r.status || 200, r.headers || {}); r.body ? res.end(r.body) : res.end(); });
  }).listen(PORT);
}
console.log(`Agent API on :${PORT}`);
