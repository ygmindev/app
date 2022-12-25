import { _bundleConfig } from '@lib/config/node/bundle/_bundle';
import { BUNDLE_MODE } from '@lib/config/node/bundle/bundle.constants';
import type { BundleConfigParamsModel } from '@lib/config/node/bundle/bundle.models';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import type { PlatformModel } from '@lib/shared/platform/platform.models';
import { reduce } from 'lodash';

const platform = getEnv<PlatformModel>('APP_PLATFORM', PLATFORM.BASE);
const config: BundleConfigParamsModel =
  require(`@lib/config/node/bundle/configs/bundle.${platform}`).bundleConfig;

export const bundleConfig = _bundleConfig({
  ...config,

  define: {
    ...config.define,

    ...reduce(
      process.env,
      (result, v, k) =>
        k.startsWith(config.envPrefix)
          ? {
              ...result,
              [`process.env.${k}`]: JSON.stringify(v),
            }
          : result,
      {},
    ),
  },

  mode: process.env.NODE_ENV === 'production' ? BUNDLE_MODE.PRODUCTION : BUNDLE_MODE.DEVELOPMENT,
});
