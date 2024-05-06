// COMPLETE
import { type PartialDeepModel } from '@lib/shared/core/core.models';
import { type MergeStrategyModel } from '@lib/shared/core/utils/merge/merge.models';

export type DefineConfigParamsModel<
  TParams,
  TParamsConfig extends TParams | (() => TParams),
  TResult = undefined,
> = {
  _config?: TResult extends undefined ? never : (params: TParams) => TResult;
  config: TParamsConfig;
  overrides?: TParamsConfig extends () => TParams
    ? () => Array<PartialDeepModel<TParams>>
    : Array<PartialDeepModel<TParams>>;
  strategy?: MergeStrategyModel;
};

export type DefineConfigModel<
  TParams,
  TParamsConfig extends TParams | (() => TParams),
  TResult = undefined,
> = {
  _config: TResult extends undefined
    ? never
    : TParamsConfig extends () => TParams
    ? (params?: PartialDeepModel<TParams>) => TResult
    : TResult;
  config: TParamsConfig;
};
