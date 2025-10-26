import { type WebConfigModel } from '@lib/config/node/web/web.models';
import { ROOT } from '@lib/frontend/root/root.constants';

export const WEB_ROOT_ID: WebConfigModel['rootId'] = ROOT;

export const WEB_SSR_CONTEXT_KEYS: WebConfigModel['ssrContextKeys'] = [
  'locale.store',
  'locale.lang',
  'state.initialState',
  'route.location.pathname',
  'query.state',
];
