import type { Config } from 'vite-plugin-ssr/types';

export default {
  clientRouting: true,
  passToClient: ['pageProps', 'context'],
  prerender: true,
} satisfies Config;
