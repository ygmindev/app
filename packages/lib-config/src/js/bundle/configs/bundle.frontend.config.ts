import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import type { BundleConfigParamsModel } from '@lib/config/js/bundle/bundle.models';
import { bundleConfig as bundleConfigBase } from '@lib/config/js/bundle/configs/bundle.base.config';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';

export const bundleConfig: BundleConfigParamsModel = merge({
  strategy: MERGE_STRATEGY.DEEP_PREPEND,

  values: [
    {
      extensions: permuteString(['.frontend'], bundleConfigBase.extensions),

      externals: fromGlobs({
        globs: [
          '@expo',
          '@react-native*',
          'moti',
          'react-native-!(codegen|gradle-plugin)',
          'react-native',
        ],
        root: fromModules(),
      }),
    },

    bundleConfigBase,
  ],
});
