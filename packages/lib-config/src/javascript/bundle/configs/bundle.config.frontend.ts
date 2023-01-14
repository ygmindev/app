import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import type { BundleConfigParamsModel } from '@lib/config/javascript/bundle/bundle.models';
import { bundleConfig as bundleConfigBase } from '@lib/config/javascript/bundle/configs/bundle.config.base';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';

export const bundleConfig: BundleConfigParamsModel = merge({
  strategy: MERGE_STRATEGY.DEEP_PREPEND,

  values: [
    {
      envPrefix: ['APP_'],

      extensions: permuteString(['.frontend'], bundleConfigBase.extensions),

      externals: fromGlobs({
        globs: [
          '@expo',
          '@react-native*',
          'history',
          'moti',
          'react-native-!(codegen|gradle-plugin)',
          'react-native',
        ],
        root: fromModules(),
      }),

      watch: [fromPackages('lib-frontend/src/**/*')],
    },

    bundleConfigBase,
  ],
});
