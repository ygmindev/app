import { type DefineConfigModel } from '@lib/config/utils/defineConfig/defineConfig.models';

export type {{NAME}}(pascalCase)ConfigModel = DefineConfigModel<
  {{NAME}}(pascalCase)ConfigModel,
  _{{NAME}}(pascalCase)ConfigModel
>;

export type {{NAME}}(pascalCase)ConfigModel = {
};

export type _{{NAME}}(pascalCase)ConfigModel = Config;
