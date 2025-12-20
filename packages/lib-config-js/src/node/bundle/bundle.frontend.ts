import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { fromPublic } from '@lib/backend/file/utils/fromPublic/fromPublic';
import { ASSETS_DIR } from '@lib/config/file/file.constants';
import { bundleConfig as configBase } from '@lib/config/node/bundle/bundle.base';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

let bundleConfig = configBase;

bundleConfig = bundleConfig.extend(() => {
  const environment = Container.get(Environment);

  return {
    aliases: [
      {
        from: 'react-native-is-edge-to-edge',
        to: 'react-native-is-edge-to-edge/dist/index.mjs',
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

    dedupe: ['react'],

    define: {
      __DEV__: `${
        (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') &&
        !environment.variables.NODE_RUNTIME
      }`,
    },

    envPrefix: ['APP_', 'SERVER_APP_'],

    externals: ['firebase'],

    publicPathname: fromPublic(),

    transpileModules:
      filterNil([
        // '@egjs/react-infinitegrid',
        // '@expo/react-native-action-sheet',
        // '@shopify/flash-list',
        // '@uiw/react-markdown-preview',
        // '@uiw/react-md-editor',
        // 'countries-list',
        'moti',
        // 'react-use',
        // 'redux-persist',
        // TODO: fix?
        // process.env.NODE_ENV === 'production' && 'inversify-react',
      ]) ?? [],

    transpilePatterns: [
      /^react-native-(?!web)/,
      /^@react-navigation.*/,
      /^@react-native.*/,
      /^expo-.*/,
      /^@expo.*/,
    ],
  };
});

export { bundleConfig };
