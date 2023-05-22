import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import type { BundleConfigModel } from '@lib/config/node/bundle/_bundle.models';
import { default as bundleConfigFrontend } from '@lib/config/node/bundle/bundle.frontend';
import { PLATFORM } from '@lib/platform/core/core.constants';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

const bundleConfig: BundleConfigModel = async () => {
  const _bundleConfigFrontend = await bundleConfigFrontend();
  return merge(
    [
      {
        aliases: {
          'react-native': 'react-native-web',
          ...(process.env.NODE_ENV === 'test' ? { '\\.(css|sass)$': 'identity-obj-proxy' } : {}),
        },

        platform: PLATFORM.WEB,

        provide: {
          requestAnimationFrame: fromConfig('node/bundle/aliases/requestAnimationFrame/index.js'),
        },

        watch: [fromStatic('assets/**/*')],
      },

      _bundleConfigFrontend,
    ],
    MERGE_STRATEGY.DEEP_PREPEND,
  );
};

export default bundleConfig;
