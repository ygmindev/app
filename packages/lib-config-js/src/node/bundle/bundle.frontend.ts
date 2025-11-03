import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromPublic } from '@lib/backend/file/utils/fromPublic/fromPublic';
import { ASSETS_DIR } from '@lib/config/file/file.constants';
import { config as configBase } from '@lib/config/node/bundle/bundle.base';
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
      // aliases: [
      //   // { from: /^react$/, to: fromModules('react/cjs/react.development.js') },
      //   // { from: /^react-dom$/, to: fromModules('react-dom/cjs/react-dom.development.js') },
      //   {
      //     from: 'react-native-is-edge-to-edge',
      //     to: fromModules('react-native-is-edge-to-edge/dist/index.mjs'),
      //   },
      // ],

      aliases: [
        {
          from: 'react-native-is-edge-to-edge',
          to: fromModules('react-native-is-edge-to-edge/dist/index.mjs'),
        },
      ],

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

      assetsDir: ASSETS_DIR,

      babel: {
        plugins: filterNil([
          ['transform-react-remove-prop-types', { removeImport: true }] as [
            string,
            Record<string, unknown>,
          ],

          process.env.NODE_ENV === 'production' && [
            'react-remove-properties',
            { properties: ['testID'] },
          ],
        ]),

        presets: [
          ['@babel/preset-react', { runtime: 'automatic' }],
          '@babel/preset-flow',
          '@babel/preset-typescript',
        ],
      },

      commonjsDeps: ['inversify-react'],

      define: {
        __DEV__: `${
          (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') &&
          !process.env.NODE_RUNTIME
        }`,
      },

      envPrefix: ['APP_', 'SERVER_APP_'],

      publicPathname: fromPublic(),

      transpileModules:
        filterNil([
          '@egjs/react-infinitegrid',
          '@expo/react-native-action-sheet',
          '@react-navigation/elements',
          '@react-navigation/native',
          '@react-navigation/native-stack',
          '@react-navigation/stack',
          '@shopify/flash-list',
          '@uiw/react-markdown-preview',
          '@uiw/react-md-editor',
          'countries-list',
          'css-in-js-utils',
          'expo-linear-gradient',
          'framer-motion',
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
          ...fromGlobs(['expo-'], { root: fromModules() }),
        ]) ?? [],

      watch: [fromPackages('lib-frontend-js/src/**/*')],
    },
  ],
});

export default config;
