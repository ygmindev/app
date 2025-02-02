import { type WebConfigModel } from '@lib/config/node/web/web.models';
import { ROOT } from '@lib/frontend/root/root.constants';

export const WEB_CONFIG: Pick<WebConfigModel, 'rootId' | 'ssrContextKeys'> = {
  rootId: ROOT,

  ssrContextKeys: [
    'locale.store',
    'locale.lang',
    'state.initialState',
    'route.location.pathname',
    'query.state',
  ],
};
