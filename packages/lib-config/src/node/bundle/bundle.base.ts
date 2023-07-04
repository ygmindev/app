import { fromModules } from '#lib-backend/file/utils/fromModules/fromModules';
import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';
import { fromWorking } from '#lib-backend/file/utils/fromWorking/fromWorking';
import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';
import { _config as _babelConfig } from '#lib-config/node/babel/babel.base';
import { _bundle } from '#lib-config/node/bundle/_bundle';
import { type BundleConfigModel } from '#lib-config/node/bundle/bundle.models';
import { extensions } from '#lib-platform/core/utils/extensions/extensions';

const { _config, config } = defineConfig({
  _config: _bundle,

  config: () =>
    ({
      babelConfig: _babelConfig,

      envPrefix: ['ENV_', 'NODE_ENV'],

      extensions: extensions(),

      mainFields: ['module', 'main'],

      modulePaths: [fromModules()],

      outDir: fromWorking('dist'),

      tsconfigPath: fromWorking('tsconfig.json'),

      watch: [
        fromPackages('asset-static/src/**/*'),
        fromPackages('lib-config/src/**/*'),
        fromPackages('lib-shared/src/**/*'),
        fromWorking('src/**/*'),
      ],
    } satisfies BundleConfigModel),
});

export { _config, config };
