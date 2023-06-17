import { fromModules } from '#lib-backend/file/utils/fromModules/fromModules';
import { fromWorking } from '#lib-backend/file/utils/fromWorking/fromWorking';
import { _config as _babelConfig } from '#lib-config/node/babel/babel.base';
import { _bundle } from '#lib-config/node/bundle/_bundle';
import type { _BundleConfigModel, BundleConfigModel } from '#lib-config/node/bundle/bundle.models';
import { PLATFORM } from '#lib-platform/core/core.constants';
import { extensions } from '#lib-platform/core/utils/extensions/extensions';

export const config: BundleConfigModel = () => ({
  babelConfig: _babelConfig,

  envPrefix: ['ENV_', 'NODE_ENV'],

  extensions: extensions(),

  mainFields: ['module', 'main'],

  modulePaths: [fromModules()],

  outDir: fromWorking('dist'),

  platform: PLATFORM.BASE,

  tsconfigPath: fromWorking('tsconfig.json'),

  // TODO: watch is not really working
  // watch: [
  //   fromPackages('asset-static/src/**/*'),
  //   fromPackages('lib-config/src/**/*'),
  //   fromPackages('lib-shared/src/**/*'),
  //   fromWorking('src/**/*'),
  // ],
});

export const _config: _BundleConfigModel = () => _bundle(config());
