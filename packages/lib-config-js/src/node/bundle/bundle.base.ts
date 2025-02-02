import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import fileConfig from '@lib/config/file/file';
import { BUILD_DIR } from '@lib/config/file/file.constants';
import { _bundle } from '@lib/config/node/bundle/_bundle';
import {
  type _BundleConfigModel,
  type BundleConfigModel,
} from '@lib/config/node/bundle/bundle.models';
import typescriptConfig from '@lib/config/node/typescript/typescript';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<BundleConfigModel, _BundleConfigModel>({
  config: _bundle,

  params: () => {
    const { extensions, packageDirs } = fileConfig.params();
    return {
      aliases: [
        {
          from: /^uuid$/,
          to: fromModules('uuid/dist/index.js'),
        },
      ],

      babel: {
        plugins: [
          '@babel/plugin-transform-runtime',
          // ['@babel/plugin-transform-private-methods', { loose: true }],
          '@babel/plugin-transform-class-static-block',
          // ['@babel/plugin-proposal-class-properties', { loose: true }],
          // ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
        ],
        // presets: [['@babel/preset-env', { loose: true, targets: { node: 'current' } }]],
      },

      buildDir: BUILD_DIR,

      configFilename: 'bundle.js',

      envPrefix: ['ENV_', 'NODE_ENV'],

      extensions,

      logSuppressPatterns: [/.*sourcemap.*/i, /.*source map.*/i],

      mainFields: ['module', 'main'],

      packager: 'pnpm',

      rootDirs: [fromRoot(), ...packageDirs.map((path) => fromPackages(path))],

      typescript: typescriptConfig.params(),

      watch: [
        fromPackages('asset-static/src/**/*'),
        fromPackages('lib-config-js/src/**/*'),
        fromPackages('lib-shared-js/src/**/*'),
        fromWorking('src/**/*'),
      ],
    };
  },
});

export default config;
