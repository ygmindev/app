import { type Config } from 'vike/types';

export default {
  clientRouting: true,
  hydrationCanBeAborted: true,
  passToClient: ['context', 'pageProps'],
  prerender: true,
} satisfies Config;
