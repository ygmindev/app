import { fromGlobs } from '#lib-backend/file/utils/fromGlobs/fromGlobs';
import { fromModules } from '#lib-backend/file/utils/fromModules/fromModules';
import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';
import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';
import { _config as _babelConfig } from '#lib-config/node/babel/babel.frontend';
import { _bundle } from '#lib-config/node/bundle/_bundle';
import { config as configBase } from '#lib-config/node/bundle/bundle.base';

const { _config, config } = defineConfig({
  _config: _bundle,

  config: configBase,

  overrides: () => [
    {
      aliases: {
        // TODO: preact missing renderToPipeableStream
        // react: 'preact/compat',
        // 'react-dom': 'preact/compat',
        // 'react-dom/test-utils': 'preact/test-utils',
        // 'react/jsx-runtime': 'preact/jsx-runtime',
      },

      babelConfig: _babelConfig,

      define: {
        __DEV__: `${process.env.NODE_ENV === 'development'}`,
      },

      envPrefix: ['APP_', 'DATABASE_'],

      externals: ['react', 'react-dom', 'react/jsx-runtime'],

      transpiles: [
        'countries-list',
        'css-in-js-utils',
        'moti',
        'inline-style-prefixer',
        'react/jsx-runtime',
        // 'react-dom/server',
        'react-native',
        'redux-persist',
        'react-use',
        'thenby',
        ...fromGlobs({
          globs: ['@expo', 'expo-*', 'react-native-!(codegen|gradle-plugin)'],
          root: fromModules(),
        }),
      ],

      watch: [fromPackages('lib-frontend/src/**/*')],
    },
  ],
});

export { _config, config };
