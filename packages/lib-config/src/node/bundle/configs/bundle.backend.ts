import type { BundleConfigParamsModel } from '@lib/config/node/bundle/bundle.models';
import { bundleConfig as bundleConfigBase } from '@lib/config/node/bundle/configs/bundle.base';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { EXTENSIONS_BACKEND } from '@lib/shared/file/file.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

export const bundleConfig: BundleConfigParamsModel = merge({
  strategy: MERGE_STRATEGY.DEEP_PREPEND,

  values: [
    {
      extensions: EXTENSIONS_BACKEND,

      platform: PLATFORM.BACKEND,
    },

    bundleConfigBase,
  ],
});
