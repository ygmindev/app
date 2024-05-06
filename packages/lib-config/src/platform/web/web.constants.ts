import { type WebConfigModel } from '@lib/config/platform/web/web.models';
import { ROOT } from '@lib/frontend/root/root.constants';

export const WEB_CONFIG: Pick<WebConfigModel, 'publicPath' | 'rootId' | 'ssrContextKeys'> = {
  publicPath: 'assets',

  rootId: ROOT,

  ssrContextKeys: [
    'locale.store',
    'locale.lang',
    'state.initialState',
    'route.location.pathname',
    'query.state',
  ],
};
