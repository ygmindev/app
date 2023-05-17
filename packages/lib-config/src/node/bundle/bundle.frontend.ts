import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import type { BundleConfigModel } from '@lib/config/node/bundle/_bundle.models';
import { default as bundleConfigBase } from '@lib/config/node/bundle/bundle.base';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';

const bundleConfig: BundleConfigModel = merge(
  [
    {
      define: {
        __DEV__: `${process.env.NODE_ENV === 'development'}`,
      },

      envPrefix: ['APP_'],

      extensions: permuteString(['.frontend'], bundleConfigBase.extensions),

      externals: fromGlobs({
        globs: [
          '@expo',
          '@react-native*',
          'expo-*',
          'history',
          'moti',
          'react-native',
          'react-native-!(codegen|gradle-plugin)',
          'redux-persist',
        ],
        root: fromModules(),
      }),

      watch: [fromPackages('lib-frontend/src/**/*')],
    },

    bundleConfigBase,
  ],
  MERGE_STRATEGY.DEEP_PREPEND,
);

export default bundleConfig;
