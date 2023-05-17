import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import type { BundleConfigModel } from '@lib/config/node/bundle/_bundle.models';
import { default as bundleConfigBase } from '@lib/config/node/bundle/bundle.base';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

const bundleConfig: BundleConfigModel = merge(
  [
    {
      envPrefix: ['SERVER_'],

      extensions: permuteString(['.node'], bundleConfigBase.extensions),

      platform: PLATFORM.NODE,

      watch: [fromPackages('lib-backend/src/**/*')],
    },

    bundleConfigBase,
  ],
  MERGE_STRATEGY.DEEP_PREPEND,
);

export default bundleConfig;
