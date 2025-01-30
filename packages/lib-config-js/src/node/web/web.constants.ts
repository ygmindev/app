import { PUBLIC_DIR } from '@lib/config/file/file.constants';
import { type WebConfigModel } from '@lib/config/node/web/web.models';
import { ROOT } from '@lib/frontend/root/root.constants';

export const WEB_CONFIG: Pick<WebConfigModel, 'publicDir' | 'rootId' | 'ssrContextKeys'> = {
  publicDir: PUBLIC_DIR,

  rootId: ROOT,

  ssrContextKeys: [
    'locale.store',
    'locale.lang',
    'state.initialState',
    'route.location.pathname',
    'query.state',
  ],
};
