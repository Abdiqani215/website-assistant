// Dashboard controller — sections are gated by sections.json
const SECTIONS = ["Overview","Conversations","Tasks","Knowledge Base","Plugins","Email","Calendar","Integrations","Permissions","Analytics","AI Models","Costs","Deployments","Webhooks","Settings","System Health"];
const items = document.querySelectorAll('.nav-item');
const panels = document.querySelectorAll('.panel');
function show(name){
  panels.forEach(p => p.hidden = p.id !== name);
  items.forEach(i => i.classList.toggle('active', i.dataset.section === name));
}
items.forEach(i => i.addEventListener('click', () => show(i.dataset.section)));
show(SECTIONS[0]);