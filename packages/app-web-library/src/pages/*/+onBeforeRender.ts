import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

const onBeforeRender = async (pageContext: PageContextBuiltIn): Promise<unknown> => {
  console.warn('@@@onBeforeRender:');
  console.warn(pageContext);
  return {
    pageContext: {
      pageProps: {},
    },
  };
};

export default onBeforeRender;
