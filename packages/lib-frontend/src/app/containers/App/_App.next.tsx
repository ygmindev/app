import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

export const App: NextPage<AppProps> = appWithTranslation(({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
));
