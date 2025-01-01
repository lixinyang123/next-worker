import { NextRequest } from "next/server";
// import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = 'edge'

export async function GET(request: NextRequest) {
    // const { env, cf, ctx } = getRequestContext();

    const rse = await fetch('https://kv.conchbrain.club/demo/get?Hi');
    const text = await rse.text();
    return new Response(`Hello from ${request.method} ${text}`);
}
