import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import type { BundleConfigParamsModel } from '@lib/config/javascript/bundle/bundle.models';
import { bundleConfig as bundleConfigBase } from '@lib/config/javascript/bundle/configs/bundle.base.config';
import { bundleConfig as bundleConfigFrontend } from '@lib/config/javascript/bundle/configs/bundle.frontend.config';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

export const bundleConfig: BundleConfigParamsModel = merge({
  strategy: MERGE_STRATEGY.DEEP_PREPEND,

  values: [
    {
      aliases: {
        'react-native': fromConfig('javascript/bundle/aliases/react-native-web/index.js'),
        'react-native-linear-gradient': 'react-native-web-linear-gradient',
        'react-native-svg': fromRoot(
          'node_modules/react-native-svg/lib/module/ReactNativeSVG.web.js',
        ),
      },

      copy: [
        { from: fromStatic('assets'), to: fromWorking('public') },
        {
          from: fromModules('react-native-vector-icons/Fonts/Ionicons.ttf'),
          to: fromWorking('public/fonts'),
        },
        {
          from: fromModules('react-native-vector-icons/Fonts/FontAwesome.ttf'),
          to: fromWorking('public/fonts'),
        },
      ],

      extensions: permuteString(['.web'], bundleConfigBase.extensions),

      platform: PLATFORM.WEB,
    },

    bundleConfigFrontend,
  ],
});
