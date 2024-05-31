import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import configBase from '@lib/config/node/bundle/bundle.base';
import {
  type _BundleConfigModel,
  type BundleConfigModel,
} from '@lib/config/node/bundle/bundle.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const config = defineConfig<BundleConfigModel, _BundleConfigModel>({
  ...configBase,

  overrides: () => [
    {
      // aliases: [
      //   { from: 'react', to: fromModules('react/cjs/react.production.min.js') },
      //   { from: 'react-dom', to: fromModules('react-dom/cjs/react-dom.production.min.js') },
      // ],

      babel: {
        plugins: [
          ['transform-react-remove-prop-types', { removeImport: true }] as [
            string,
            Record<string, unknown>,
          ],
          // 'react-native-reanimated/plugin',
        ],

        presets: ['@babel/preset-react', '@babel/preset-flow', '@babel/preset-typescript'],
      },

      define: {
        __DEV__: `${process.env.NODE_ENV === 'development'}`,
      },

      envPrefix: ['APP_', 'SERVER_APP_'],

      externals: ['raf/polyfill.js', 'setimmediate'],

      transpiles: [
        '@egjs/react-infinitegrid',
        '@expo/react-native-action-sheet',
        'countries-list',
        'css-in-js-utils',
        'expo-linear-gradient',
        'inline-style-prefixer',
        'moti',
        'react-native',
        'react-use',
        'react/jsx-runtime',
        'redux-persist',
        'thenby',
        ...fromGlobs(['react-native-!(codegen|gradle-plugin)'], { root: fromModules() }),
      ],

      watch: [fromPackages('lib-frontend/src/**/*')],
    },
  ],
});

export default config;
