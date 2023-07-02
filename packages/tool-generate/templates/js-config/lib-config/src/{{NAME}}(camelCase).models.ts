import { type UserConfig } from 'vite';

import { type ConfigDynamicModel } from '#lib-config/core/core.models';
import { type _BabelConfigModel } from '#lib-config/{{MODULE}}(camelCase)/babel/babel.models';
import { type PlatformModel } from '#lib-platform/core/core.models';
import { type EmptyObjectModel } from '#lib-shared/core/core.models';

export type {{NAME}}(pascalCase)ConfigOptionsModel = EmptyObjectModel;

export type {{NAME}}(pascalCase)ConfigModel = ConfigDynamicModel<
  {
  },
  {{NAME}}(pascalCase)ConfigOptionsModel
>;

export type _{{NAME}}(pascalCase)ConfigModel = ConfigDynamicModel<UserConfig, {{NAME}}(pascalCase)ConfigOptionsModel>;
