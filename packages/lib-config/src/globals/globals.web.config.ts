import { globalsConfig as globalsConfigBase } from '@lib/config/globals/globals.base.config';
import type { GlobalsConfigModels } from '@lib/config/globals/globals.config.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

export const globalsConfig: GlobalsConfigModels = merge({
  strategy: MERGE_STRATEGY.DEEP,
  values: [
    {
      __IS_ANDROID__: false,
      __IS_IOS__: false,
      __IS_NATIVE__: false,
      __IS_SSR__: false,
      __IS_WEB__: true,
    },

    globalsConfigBase,
  ],
});
