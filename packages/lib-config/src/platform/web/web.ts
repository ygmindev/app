import type { WebConfigModel, _WebConfigModel } from '@lib/config/platform/web/web.models';
import { _config as _bundleConfig } from '@lib/config/node/bundle/bundle.web';
import { _web } from '@lib/config/platform/web/_web';

export const config: WebConfigModel = {
  bundleConfig: _bundleConfig,

  isSsr: true,

  publicDir: 'assets',

  rootId: 'root',

  ssrContextKeys: ['locale.store', 'state.initialState'],
};

export const _config: _WebConfigModel = () => _web(config);
