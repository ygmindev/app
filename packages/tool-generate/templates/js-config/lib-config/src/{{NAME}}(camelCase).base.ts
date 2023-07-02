import { fromModules } from '#lib-backend/file/utils/fromModules/fromModules';
import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';
import { fromWorking } from '#lib-backend/file/utils/fromWorking/fromWorking';
import { _config as _babelConfig } from '#lib-config/{{MODULE}}(camelCase)/babel/babel.base';
import { _{{NAME}}(camelCase) } from '#lib-config/{{MODULE}}(camelCase)/{{NAME}}(camelCase)/_{{NAME}}(camelCase)';
import {
  type _{{NAME}}(pascalCase)ConfigModel,
  type {{NAME}}(pascalCase)ConfigModel,
} from '#lib-config/{{MODULE}}(camelCase)/{{NAME}}(camelCase)/{{NAME}}(camelCase).models';
import { PLATFORM } from '#lib-platform/core/core.constants';
import { extensions } from '#lib-platform/core/utils/extensions/extensions';

export const config: {{NAME}}(pascalCase)ConfigModel = () => ({
  babelConfig: _babelConfig,

  envPrefix: ['ENV_', 'NODE_ENV'],

  extensions: extensions(),

  mainFields: ['module', 'main'],

  modulePaths: [fromModules()],

  outDir: fromWorking('dist'),

  platform: PLATFORM.BASE,

  tsconfigPath: fromWorking('tsconfig.json'),

  // TODO: watch is not really working
  watch: [
    fromPackages('asset-static/src/**/*'),
    fromPackages('lib-config/src/**/*'),
    fromPackages('lib-shared/src/**/*'),
    fromWorking('src/**/*'),
  ],
});

export const _config: _{{NAME}}(pascalCase)ConfigModel = ({ ...params } = {}) => _{{NAME}}(camelCase)(config({ ...params }));
