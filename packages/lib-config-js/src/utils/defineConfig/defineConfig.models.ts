import { type PartialDeepModel } from '@lib/shared/core/core.models';
import { type MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';

export type DefineConfigParamsModel<TParams, TType = undefined> = [
  params: {
    config?: TType extends undefined ? never : (params: TParams) => TType;
    strategy?: MERGE_STRATEGY;
    params(): TParams;
  },
  ...overrides: Array<() => PartialDeepModel<TParams>>,
];

export type DefineConfigModel<TParams, TType = undefined> = {
  config: TType extends undefined ? never : (params?: PartialDeepModel<TParams>) => TType;
  params(): TParams;
};
