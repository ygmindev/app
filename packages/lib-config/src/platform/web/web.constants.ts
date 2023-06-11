import type { WebConfigModel } from '@lib/config/platform/web/web.models';
import { ROOT } from '@lib/frontend/root/root.constants';

export const WEB_CONFIG_STATIC: Pick<WebConfigModel, 'publicDir' | 'rootId' | 'ssrContextKeys'> = {
  publicDir: 'assets',

  rootId: ROOT,

  ssrContextKeys: ['locale.store', 'state.initialState'],
};
