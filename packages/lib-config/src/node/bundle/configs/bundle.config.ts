import { _bundleConfig } from '@lib/config/node/bundle/_bundle.config';
import type {
  _BundleConfigModel,
  _BundleConfigParamsModel,
} from '@lib/config/node/bundle/_bundle.models';
import { importFromEnv } from '@lib/shared/core/utils/importFromEnv/importFromEnv';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';
import reduce from 'lodash/reduce';
import some from 'lodash/some';

export const bundleConfig: _BundleConfigModel = async () => {
  const { bundleConfigParams } = await importFromEnv<
    _BundleConfigParamsModel,
    'bundleConfigParams'
  >('@lib/config/node/bundle/params/bundle.params');
  return _bundleConfig({
    ...bundleConfigParams,

    define: {
      ...bundleConfigParams.define,

      ...reduce(
        process.env,
        (result, v, k) =>
          some(bundleConfigParams.envPrefix, (prefix) => k.startsWith(prefix))
            ? { ...result, [`process.env.${k}`]: JSON.stringify(v) }
            : result,
        {},
      ),
    },

    extensions: [
      ...bundleConfigParams.extensions,
      ...permuteString([`.${process.env.NODE_ENV}`], bundleConfigParams.extensions)
    ],
  })();
};
