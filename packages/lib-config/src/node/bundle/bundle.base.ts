import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { packages } from '@lib/backend/file/utils/packages/packages';
import { config as fileConfig } from '@lib/config/core/file/file';
import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { _config as _babelConfig } from '@lib/config/node/babel/babel.base';
import { _bundle } from '@lib/config/node/bundle/_bundle';
import { BUNDLE_CONFIG } from '@lib/config/node/bundle/bundle.constants';
import { type BundleConfigModel } from '@lib/config/node/bundle/bundle.models';
import { extensions } from '@lib/shared/platform/utils/extensions/extensions';

const { _config, config } = defineConfig({
  _config: _bundle,

  config: () =>
    ({
      ...BUNDLE_CONFIG,

      aliases: [
        {
          from: /^uuid$/,
          to: fromModules('uuid/dist/index.js'),
        },
      ],

      babelConfig: _babelConfig,

      buildPath: fileConfig.buildPath,

      cachePath: fileConfig.cachePath,

      distPath: fileConfig.distPath,

      envPrefix: ['ENV_', 'NODE_ENV'],

      extensions: extensions(),

      logSuppressPatterns: [/.*sourcemap.*/i, /.*source map.*/i],

      mainFields: ['module', 'main'],

      packager: 'pnpm',

      publicPath: fileConfig.publicPath,

      rootDirs: [fromRoot(), ...packages.map((path) => fromPackages(path))],

      tsconfigPath: 'tsconfig.json',

      watch: [
        fromPackages('asset-static/src/**/*'),
        fromPackages('lib-config/src/**/*'),
        fromPackages('lib-shared/src/**/*'),
        fromWorking('src/**/*'),
      ],
    }) satisfies BundleConfigModel,
});

export { _config, config };
