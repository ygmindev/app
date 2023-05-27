import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { _config as _babelConfig } from '@lib/config/node/babel/babel.frontend';
import { _bundle } from '@lib/config/node/bundle/_bundle';
import { config as configBase } from '@lib/config/node/bundle/bundle.base';
import type { _BundleConfigModel, BundleConfigModel } from '@lib/config/node/bundle/bundle.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

export const config: BundleConfigModel = () =>
  merge(
    [
      {
        babelConfig: _babelConfig,

        define: {
          __DEV__: `${process.env.NODE_ENV === 'development'}`,
        },

        envPrefix: ['APP_'],

        externals: [
          // 'history',
          'moti',
          'react/jsx-runtime',
          'react-dom',
          'react-native',
          'redux-persist',
          ...fromGlobs({
            globs: ['@expo', 
            // '@react-native*', 
            'expo-*', 'react-native-!(codegen|gradle-plugin)'],
            root: fromModules(),
          }),
        ],

        watch: [fromPackages('lib-frontend/src/**/*')],
      },

      configBase(),
    ],
    MERGE_STRATEGY.DEEP_PREPEND,
  );

export const _config: _BundleConfigModel = () => _bundle(config());
