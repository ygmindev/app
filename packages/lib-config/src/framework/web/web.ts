import type { WebConfigModel } from '@lib/config/framework/web/_web.models';

const webConfig: WebConfigModel = {
  build: {
    command: 'vite build',

    config: 'framework/web/configs/web.config.ts',
  },

  dev: {
    command: 'vite',

    config: 'framework/web/configs/web.config.ts',
  },

  isSsr: true,

  publicDir: 'assets',

  rootId: 'root',

  ssrContextKeys: ['state.initialState'],
};

export default webConfig;
