import type { BundleConfigParamsModel } from '@lib/config/js/bundle/bundle.models';
import { bundleConfig as bundleConfigBase } from '@lib/config/js/bundle/configs/bundle.base.config';
import { bundleConfig as bundleConfigFrontend } from '@lib/config/js/bundle/configs/bundle.frontend.config';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

export const bundleConfig: BundleConfigParamsModel = merge({
  strategy: MERGE_STRATEGY.DEEP_PREPEND,

  values: [
    {
      extensions: permuteString(['.ios', '.native'], bundleConfigBase.extensions),

      platform: PLATFORM.IOS,
    },

    bundleConfigFrontend,
  ],
});
