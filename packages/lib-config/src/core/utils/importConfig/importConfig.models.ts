import { type EmptyObjectModel, type ReturnTypeModel } from '#lib-shared/core/core.models';

export type ImportConfigParamsModel<TOptions = EmptyObjectModel> = [
  name: string,
  options?: TOptions,
];

export type ImportConfigModel<TParams, TResult = undefined> = Promise<{
  _config: ReturnTypeModel<TResult> | null;
  config: ReturnTypeModel<TParams>;
}>;
