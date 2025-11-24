import { type PartialDeepModel } from '@lib/shared/core/core.models';
import { type MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

export type ConfigParamsModel<TParams, TType = undefined> = {
  config?: TType extends undefined ? never : (params: TParams) => TType;

  params(): TParams;
};

export type ConfigModel<TParams, TType = undefined> = {
  config(params?: PartialDeepModel<TParams>, strategy?: MERGE_STRATEGY): TType;

  extend(v: () => PartialDeepModel<TParams>): ConfigModel<TParams, TType>;

  params(strategy?: MERGE_STRATEGY): TParams;
};
