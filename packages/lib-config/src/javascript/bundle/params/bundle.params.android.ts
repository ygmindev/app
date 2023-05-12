import type { _BundleConfigParamsModel } from '@lib/config/javascript/bundle/_bundle.models';
import { bundleConfigParams as bundleConfigBase } from '@lib/config/javascript/bundle/params/bundle.params.base';
import { bundleConfigParams as bundleConfigFrontend } from '@lib/config/javascript/bundle/params/bundle.params.frontend';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

export const bundleConfigParams: _BundleConfigParamsModel = merge(
  [
    {
      extensions: permuteString(['.android', '.native'], bundleConfigBase.extensions),

      platform: PLATFORM.ANDROID,
    },

    bundleConfigFrontend,
  ],
  MERGE_STRATEGY.DEEP_PREPEND,
);
