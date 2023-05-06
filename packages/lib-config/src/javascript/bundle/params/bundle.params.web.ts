import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import type { _BundleConfigParamsModel } from '@lib/config/javascript/bundle/_bundle.models';
import { bundleConfigParams as bundleConfigBase } from '@lib/config/javascript/bundle/params/bundle.params.base';
import { bundleConfigParams as bundleConfigFrontend } from '@lib/config/javascript/bundle/params/bundle.params.frontend';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

export const bundleConfigParams: _BundleConfigParamsModel = merge({
  strategy: MERGE_STRATEGY.DEEP_PREPEND,

  values: [
    {
      aliases: {
        'react-native$': 'react-native-web',
        ...(process.env.NODE_ENV === 'test' ? { '\\.(css|sass)$': 'identity-obj-proxy' } : {}),
      },

      babelConfig: {
        plugins: ['react-native-web'],
      },

      extensions: permuteString(['.web'], bundleConfigBase.extensions),

      platform: PLATFORM.WEB,

      provide: {
        requestAnimationFrame: fromConfig(
          'javascript/bundle/aliases/requestAnimationFrame/index.js',
        ),
      },

      watch: [fromStatic('assets/**/*')],
    },

    bundleConfigFrontend,
  ],
});
