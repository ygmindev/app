// COMPLETE
import {
  type CallableModel,
  type OptionalCallableModel,
  type PartialDeepModel,
} from '#lib-shared/core/core.models';
import { type MergeStrategyModel } from '#lib-shared/core/utils/merge/merge.models';

export type DefineConfigParamsModel<
  TParams,
  TParamsConfig extends TParams | OptionalCallableModel<TParams>,
  TResult = undefined,
> = {
  _config?: TResult extends undefined ? never : CallableModel<TResult, TParams>;
  config: TParamsConfig;
  overrides?: TParamsConfig extends OptionalCallableModel<TParams>
    ? OptionalCallableModel<Array<PartialDeepModel<TParams>>>
    : Array<PartialDeepModel<TParams>>;
  strategy?: MergeStrategyModel;
};

export type DefineConfigModel<
  TParams,
  TParamsConfig extends TParams | OptionalCallableModel<TParams>,
  TResult = undefined,
> = {
  _config: TResult extends undefined
    ? never
    : TParamsConfig extends OptionalCallableModel<TParams>
    ? OptionalCallableModel<TResult, PartialDeepModel<TParams>>
    : TResult;
  config: TParamsConfig;
};
