import { type ConfigModuleModel } from '#lib-config/core/core.models';
import { type EmptyObjectModel } from '#lib-shared/core/core.models';

export type ImportConfigParamsModel<TOptions = EmptyObjectModel> = [
  name: string,
  options?: TOptions,
];

export type ImportConfigModel<TParams, TResult = undefined> = Promise<
  ConfigModuleModel<TParams, TResult>
>;
