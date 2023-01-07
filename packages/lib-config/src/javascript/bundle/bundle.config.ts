import { _bundleConfig } from '@lib/config/javascript/bundle/_bundle.config';
import { BUNDLE_MODE } from '@lib/config/javascript/bundle/bundle.constants';
import type { BundleConfigParamsModel } from '@lib/config/javascript/bundle/bundle.models';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import type { PlatformModel } from '@lib/shared/platform/platform.models';
import { reduce } from 'lodash';

const APP_PLATFORM = getEnv<PlatformModel>('APP_PLATFORM', PLATFORM.BASE);
const config: BundleConfigParamsModel =
  require(`@lib/config/javascript/bundle/configs/bundle.${APP_PLATFORM}.config`).bundleConfig;

export const bundleConfig = _bundleConfig({
  ...config,

  define: {
    ...config.define,

    ...reduce(
      process.env,
      (result, v, k) =>
        k.startsWith(config.envPrefix)
          ? { ...result, [`process.env.${k}`]: JSON.stringify(v) }
          : result,
      {},
    ),
  },

  mode: process.env.NODE_ENV === 'production' ? BUNDLE_MODE.PRODUCTION : BUNDLE_MODE.DEVELOPMENT,
});
