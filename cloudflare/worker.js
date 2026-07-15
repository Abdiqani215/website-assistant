import { handleRequest } from "../apps/api/handler.js";
export default {
  async fetch(request, env) {
    return handleRequest(request, env);
  },
};
