import { type WebConfigModel } from '@lib/config/web/web.models';
import { ROOT } from '@lib/frontend/root/root.constants';

export const WEB_CONFIG: Pick<
  WebConfigModel,
  'configFile' | 'publicPath' | 'rootId' | 'ssrContextKeys'
> = {
  configFile: 'web.js',

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
