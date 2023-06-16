import type { Config } from 'vite-plugin-ssr/types';

export default {
  clientRouting: true,
  passToClient: ['context', 'lang', 'pageProps'],
  prerender: true,
} satisfies Config;
