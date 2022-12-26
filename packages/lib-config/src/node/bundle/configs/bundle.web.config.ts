import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import type { BundleConfigParamsModel } from '@lib/config/node/bundle/bundle.models';
import { bundleConfig as bundleConfigFrontend } from '@lib/config/node/bundle/configs/bundle.frontend.config';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { EXTENSIONS_WEB } from '@lib/shared/file/file.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

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

      copy: [{ from: fromStatic('assets'), to: fromWorking('public') }],

      extensions: EXTENSIONS_WEB,

      platform: PLATFORM.WEB,
    },

    bundleConfigFrontend,
  ],
});
