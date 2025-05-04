import { fromAssets } from '@lib/backend/file/utils/fromAssets/fromAssets';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { PUBLIC_DIR } from '@lib/config/file/file.constants';
import configBase from '@lib/config/node/bundle/bundle.base';
import {
  type _BundleConfigModel,
  type BundleConfigModel,
} from '@lib/config/node/bundle/bundle.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

export const config = defineConfig<BundleConfigModel, _BundleConfigModel>({
  ...configBase,

  overrides: () => [
    {
      aliases: [
        // { from: 'react', to: fromModules('react/cjs/react.production.min.js') },
        // { from: 'react-dom', to: fromModules('react-dom/cjs/react-dom.production.min.js') },
        {
          from: 'react-native-is-edge-to-edge',
          to: fromModules('react-native-is-edge-to-edge/dist/index.mjs'),
        },
      ],

      assetsPathname: fromAssets(),

      babel: {
        plugins: [
          ['transform-react-remove-prop-types', { removeImport: true }] as [
            string,
            Record<string, unknown>,
          ],
          // 'react-native-reanimated/plugin',
        ],

        presets: [
          ['@babel/preset-react', { runtime: 'automatic' }],
          '@babel/preset-flow',
          '@babel/preset-typescript',
        ],
      },

      define: {
        __DEV__: `${process.env.NODE_ENV === 'development'}`,
      },

      envPrefix: ['APP_', 'SERVER_APP_'],

      // externals: [
      //   'json-stringify-safe',
      //   'normalize-css-color',
      //   'pino',
      //   'postcss-value-parser',
      //   'raf/polyfill.js',
      //   'react-dom',
      //   'react',
      //   'react-fast-compare',
      //   'react-redux',
      //   'react/jsx-runtime',
      //   'setimmediate',
      //   'styleq',
      //   'void-elements',
      //   /lodash/,
      // ],

      publicDir: PUBLIC_DIR,

      transpileModules:
        filterNil([
          '@egjs/react-infinitegrid',
          '@expo/react-native-action-sheet',
          'countries-list',
          'css-in-js-utils',
          'expo-linear-gradient',
          'inline-style-prefixer',
          'moti',
          'react-use',
          'redux-persist',
          // TODO: fix?
          process.env.NODE_ENV === 'production' && 'inversify-react',
          ...fromGlobs(['react-native-!(codegen|gradle-plugin)'], {
            root: fromModules(),
          }),
          ...fromGlobs(['@react-native-'], { root: fromModules() }),
        ]) ?? [],

      watch: [fromPackages('lib-frontend-js/src/**/*')],
    },
  ],
});

export default config;
