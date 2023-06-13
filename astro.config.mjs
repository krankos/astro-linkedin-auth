import { defineConfig } from 'astro/config';
import auth from "auth-astro";
import Github from '@auth/core/providers/github';
// import { loadEnv } from "vite"

import node from "@astrojs/node";

// const env = loadEnv(import.meta.env.MODE, process.cwd(), "");

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [auth()],
  output: "server",
  adapter: vercel()
});