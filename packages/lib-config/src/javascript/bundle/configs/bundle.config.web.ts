import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import type { BundleConfigParamsModel } from '@lib/config/javascript/bundle/bundle.models';
import { bundleConfig as bundleConfigBase } from '@lib/config/javascript/bundle/configs/bundle.config.base';
import { bundleConfig as bundleConfigFrontend } from '@lib/config/javascript/bundle/configs/bundle.config.frontend';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

export const bundleConfig: BundleConfigParamsModel = merge({
  strategy: MERGE_STRATEGY.DEEP_PREPEND,

  values: [
    {
      aliases: {
        // 'react-native': fromConfig('javascript/bundle/aliases/react-native-web/index.js'),
        'react-native': 'react-native-web',
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
