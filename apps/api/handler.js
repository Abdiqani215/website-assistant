export function handleRequest(request, env) {
  const url = new URL(request.url);
  if (url.pathname === '/health') return { status: 200, headers: {'Content-Type':'application/json'}, body: JSON.stringify({ ok: true }) };
  if (url.pathname === '/') return { status: 200, headers: {'Content-Type':'text/plain'}, body: 'Agent API running' };
  return { status: 404, headers: {}, body: 'Not found' };
}
