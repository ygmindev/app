import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import type { _BundleConfigParamsModel } from '@lib/config/node/bundle/_bundle.models';
import { bundleConfigParams as bundleConfigBase } from '@lib/config/node/bundle/params/bundle.params.base';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

export const bundleConfigParams: _BundleConfigParamsModel = merge(
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
