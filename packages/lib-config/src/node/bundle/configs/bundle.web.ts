import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import type { BundleConfigParamsModel } from '@lib/config/node/bundle/bundle.models';
import { bundleConfig as bundleConfigFrontend } from '@lib/config/node/bundle/configs/bundle.frontend';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { EXTENSIONS_WEB } from '@lib/shared/file/file.constants';

export const bundleConfig: BundleConfigParamsModel = merge({
  strategy: MERGE_STRATEGY.DEEP_PREPEND,

  values: [
    {
      aliases: {
        'react-native': fromConfig('node/bundle/aliases/react-native-web/index.js'),
        'react-native-linear-gradient': 'react-native-web-linear-gradient',
        'react-native-svg': fromRoot(
          'node_modules/react-native-svg/lib/module/ReactNativeSVG.web.js',
        ),
      },

      extensions: EXTENSIONS_WEB,
    },
    bundleConfigFrontend,
  ],
});
