# Website Assistant

Site-embedded assistant answering from the site's own content and routing to pages or contact.

## Features
- Site crawl
- Page metadata
- Contact options
- Conversion goals

## Quick Start
```bash
cp .env.example .env
npm install
npm run dev
```

## Configuration
- Model provider: groq / llama-3.3-70b-versatile
- Plugins: analytics, gmail

## Deployment
Docker, Cloudflare Workers, VPS, Railway. See `docker/` and `cloudflare/`.

## Dashboard
Generated dashboard sections:
- Overview
- Knowledge
- Conversations
- Plugins
- Model Provider
- Analytics
- Settings

## Project Structure
Assembled by the Agent Forge Repository Generator from the `website-assistant` template.