FROM node:20-alpine AS base
WORKDIR /app
COPY package.json ./
COPY apps ./apps
COPY services ./services
COPY configs ./configs
EXPOSE 8080
CMD ["node", "apps/api/server.js"]
