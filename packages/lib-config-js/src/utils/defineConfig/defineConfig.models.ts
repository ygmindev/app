import { type PartialDeepModel } from '@lib/shared/core/core.models';
import { type MergeStrategyModel } from '@lib/shared/core/utils/merge/merge.models';

export type DefineConfigParamsModel<TParams, TType = undefined> = {
  config?: TType extends undefined ? never : (params: TParams) => TType;
  strategy?: MergeStrategyModel;
  overrides?(): Array<PartialDeepModel<TParams>>;
  params(): TParams;
};

export type DefineConfigModel<TParams, TType = undefined> = {
  config: TType extends undefined ? never : (params?: PartialDeepModel<TParams>) => TType;
  params(): TParams;
};
