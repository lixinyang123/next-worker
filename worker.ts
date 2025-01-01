import type { ExportedHandler, Fetcher } from '@cloudflare/workers-types';
import nextOnPagesHandler from "@cloudflare/next-on-pages/fetch-handler";

export default {
    async fetch(request, env, ctx) {
        // do something before running the next-on-pages handler

        const response = await nextOnPagesHandler.fetch(request, env, ctx);

        // do something after running the next-on-pages handler

        return response;
    },
} as ExportedHandler<{ ASSETS: Fetcher }>;
