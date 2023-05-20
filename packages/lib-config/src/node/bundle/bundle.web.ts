import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import type { BundleConfigModel } from '@lib/config/node/bundle/_bundle.models';
import { default as bundleConfigBase } from '@lib/config/node/bundle/bundle.base';
import { default as bundleConfigFrontend } from '@lib/config/node/bundle/bundle.frontend';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

const bundleConfig: BundleConfigModel = async () => {
  const _bundleConfigBase = await bundleConfigBase();
  const _bundleConfigFrontend = await bundleConfigFrontend();
  return merge(
    [
      {
        aliases: {
          'react-native': 'react-native-web',
          ...(process.env.NODE_ENV === 'test' ? { '\\.(css|sass)$': 'identity-obj-proxy' } : {}),
        },
  
        extensions: permuteString(['.web'], _bundleConfigBase.extensions),
  
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
