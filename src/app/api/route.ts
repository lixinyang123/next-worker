import { NextRequest } from "next/server";
// import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = 'edge'

export async function GET(request: NextRequest) {
    // const { env, cf, ctx } = getRequestContext();

    const pathname = new URL(request.url).pathname
    return new Response(`Hello world from ${pathname}`);
}
