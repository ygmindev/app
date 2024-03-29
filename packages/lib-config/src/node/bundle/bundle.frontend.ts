import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { _config as _babelConfig } from '@lib/config/node/babel/babel.frontend';
import { _bundle } from '@lib/config/node/bundle/_bundle';
import { config as configBase } from '@lib/config/node/bundle/bundle.base';

const { _config, config } = defineConfig({
  _config: _bundle,

  config: configBase,

  overrides: () => [
    {
      // aliases: {
      //   // TODO: preact missing renderToPipeableStream
      //   // react: 'preact/compat',
      //   // 'react-dom': 'preact/compat',
      //   // 'react-dom/test-utils': 'preact/test-utils',
      //   // 'react/jsx-runtime': 'preact/jsx-runtime',
      //   // 'react/jsx-runtime': fromModules('react/cjs/react-jsx-runtime.production.min.js'),
      // },

      aliases: [
        { from: 'react', to: fromModules('react') },
        { from: 'react-dom', to: fromModules('react-dom') },
      ],

      babelConfig: _babelConfig,

      define: {
        __DEV__: `${process.env.NODE_ENV === 'development'}`,
      },

      envPrefix: ['APP_', 'SERVER_APP_'],

      externals: ['raf/polyfill.js', 'setimmediate'],

      transpiles: [
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
        ...fromGlobs(['react-native-!(codegen|gradle-plugin)'], {
          root: fromModules(),
        }),
      ],

      watch: [fromPackages('lib-frontend/src/**/*')],
    },
  ],
});

export { _config, config };
