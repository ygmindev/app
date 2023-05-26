import type { WebConfigModel } from '@lib/config/platform/web/web.models';

export const WEB_CONFIG_STATIC: Pick<WebConfigModel, 'publicDir' | 'ssrContextKeys'> = {
  publicDir: 'assets',

  ssrContextKeys: ['locale.store', 'state.initialState'],
};
