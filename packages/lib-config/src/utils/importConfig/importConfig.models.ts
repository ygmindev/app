import { type PartialDeepModel } from '@lib/shared/core/core.models';

export type ImportConfigParamsModel<TParams> = [
  name: string,
  overrides?: Array<PartialDeepModel<TParams>>,
];

export type ImportConfigModel<TParams, TResult = undefined> = {
  config: TResult extends undefined ? undefined : TResult;
  params: TParams;
};
