import { _bundleConfig } from '@lib/config/javascript/bundle/_bundle.config';
import { BUNDLE_MODE } from '@lib/config/javascript/bundle/bundle.constants';
import type { BundleConfigParamsModel } from '@lib/config/javascript/bundle/bundle.models';
import { reduce, some } from 'lodash';

const config: BundleConfigParamsModel =
  require(`@lib/config/javascript/bundle/configs/bundle.${process.env.ENV_PLATFORM}.config`).bundleConfig;

export const bundleConfig = _bundleConfig({
  ...config,

  define: {
    ...config.define,

    ...reduce(
      process.env,
      (result, v, k) =>
        some(config.envPrefix, (prefix) => k.startsWith(prefix))
          ? { ...result, [`process.env.${k}`]: JSON.stringify(v) }
          : result,
      {},
    ),
  },

  mode: process.env.NODE_ENV === 'production' ? BUNDLE_MODE.PRODUCTION : BUNDLE_MODE.DEVELOPMENT,
});
