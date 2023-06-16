import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

const onBeforeRender = async (pageContext: PageContextBuiltIn): Promise<unknown> => {
  return {
    pageContext: {
      pageProps: {},
    },
  };
};

export default onBeforeRender;
