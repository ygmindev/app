import { type RootContextModel } from '@lib/frontend/root/root.models';
import { type DeepKeyModel } from '@lib/shared/core/core.models';

export const SSR_CONTEXT_KEYS: Array<DeepKeyModel<RootContextModel>> = [
  'locale.store',
  'locale.lang',
  'state.initialState',
  'route.location.pathname',
  'query.state',
];
