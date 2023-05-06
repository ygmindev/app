import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import type { _BundleConfigParamsModel } from '@lib/config/javascript/bundle/_bundle.models';
import { bundleConfigParams as bundleConfigBase } from '@lib/config/javascript/bundle/params/bundle.params.base';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { permuteString } from '@lib/shared/core/utils/permuteString/permuteString';

export const bundleConfigParams: _BundleConfigParamsModel = merge({
  strategy: MERGE_STRATEGY.DEEP_PREPEND,

  values: [
    {
      babelConfig: {
        plugins: ['@emotion', ['transform-react-remove-prop-types', { removeImport: true }]],
        presets: [
          'module:metro-react-native-babel-preset',
          ['@babel/preset-react', { runtime: 'automatic' }],
        ],
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
          'react-native-!(codegen|gradle-plugin)',
          'redux-persist',
        ],
        root: fromModules(),
      }),

      watch: [fromPackages('lib-frontend/src/**/*')],
    },

    bundleConfigBase,
  ],
});
