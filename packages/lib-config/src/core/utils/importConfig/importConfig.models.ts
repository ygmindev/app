import { type ReturnTypeModel } from '#lib-shared/core/core.models';

export type ImportConfigParamsModel = string;

export type ImportConfigModel<TParams, TResult = undefined> = Promise<{
  _config: ReturnTypeModel<TResult> | null;
  config: ReturnTypeModel<TParams>;
}>;
