import { type Config } from 'vike/types';

export default {
  hydrationCanBeAborted: true,
  passToClient: ['context', 'pageProps'],
  prerender: true,
} satisfies Config;
