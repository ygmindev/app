import type { WebConfigModel } from '#lib-config/platform/web/web.models';
import { ROOT } from '#lib-frontend/root/root.constants';
import type { ReturnTypeModel } from '#lib-shared/core/core.models';

export const WEB_CONFIG_STATIC: Pick<
  ReturnTypeModel<WebConfigModel>,
  'publicDir' | 'rootId' | 'ssrContextKeys'
> = {
  publicDir: 'assets',

  rootId: ROOT,

  ssrContextKeys: ['locale.store', 'state.initialState'],
};
