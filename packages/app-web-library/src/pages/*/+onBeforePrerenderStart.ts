import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

const onBeforePrerenderStart = async (_pageContext: PageContextBuiltIn): Promise<unknown> => {
  return [
    {
      pageContext: { pageProps: {} },
      url: '/deleteme',
    },
  ];
};

export default onBeforePrerenderStart;
