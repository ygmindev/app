import { fromWorking } from '#lib-backend/file/utils/fromWorking/fromWorking';
import { _config as _bundleConfig } from '#lib-config/node/bundle/bundle.web';
import { _web } from '#lib-config/platform/web/_web';
import { WEB_CONFIG_STATIC } from '#lib-config/platform/web/web.constants';
import type { _WebConfigModel, WebConfigModel } from '#lib-config/platform/web/web.models';

export const config: WebConfigModel = () => ({
  bundleConfig: _bundleConfig,

  configFile: fromWorking('web.js'),

  isSsr: true,

  ...WEB_CONFIG_STATIC,
});

export const _config: _WebConfigModel = () => _web(config());
