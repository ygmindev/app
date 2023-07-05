import { type PartialDeepModel } from '#lib-shared/core/core.models';

export type ImportConfigParamsModel<TParams> = [
  name: string,
  overrides?: Array<PartialDeepModel<TParams>>,
];

export type ImportConfigModel<TParams, TResult = undefined> = Promise<{
  _config: TResult extends undefined ? undefined : TResult;
  config: TParams;
}>;
