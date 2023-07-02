import { type ConfigDynamicModel } from '#lib-config/core/core.models';
import { type EmptyObjectModel } from '#lib-shared/core/core.models';

export type {{NAME}}(pascalCase)ConfigOptionsModel = EmptyObjectModel;

export type {{NAME}}(pascalCase)ConfigModel = ConfigDynamicModel<
  {
  },
  {{NAME}}(pascalCase)ConfigOptionsModel
>;

export type _{{NAME}}(pascalCase)ConfigModel = ConfigDynamicModel<Config, {{NAME}}(pascalCase)ConfigOptionsModel>;
