import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import type { BundleConfigParamsModel } from '@lib/config/javascript/bundle/bundle.models';
import { bundleConfig as bundleConfigBase } from '@lib/config/javascript/bundle/configs/bundle.base.config';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

export const bundleConfig: BundleConfigParamsModel = merge({
  strategy: MERGE_STRATEGY.DEEP_PREPEND,

  values: [
    {
      envPrefix: ['SERVER_'],

      extensions: permuteString(['.node'], bundleConfigBase.extensions),

      platform: PLATFORM.NODE,

      watch: [fromPackages('lib-backend/src/**/*')],
    },

    bundleConfigBase,
  ],
});
