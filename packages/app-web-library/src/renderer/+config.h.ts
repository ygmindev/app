import { type Config } from 'vite-plugin-ssr/types';

export default {
  clientRouting: true,
  hydrationCanBeAborted: true,
  passToClient: ['context', 'pageProps'],
  prerender: true,
} satisfies Config;
