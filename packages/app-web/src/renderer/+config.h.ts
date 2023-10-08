import { type Config } from 'vike/types';

export default {
  clientRouting: false,
  hydrationCanBeAborted: true,
  passToClient: ['context', 'pageProps'],
  prerender: true,
} satisfies Config;
