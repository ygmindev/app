import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

const onBeforePrerenderStart = async (_pageContext: PageContextBuiltIn): Promise<unknown> => {
  console.warn('@@@onBeforePrerenderStart:');
  return [
    {
      pageContext: { pageProps: {} },
      url: '/deleteme',
    },
  ];
};

export default onBeforePrerenderStart;
