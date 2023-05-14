import { CallableModel } from "@lib/shared/core/core.models";
import { CallablePromiseModel } from "@lib/shared/core/core.models";

export type _SynchronizeParamsModel<TResult = void, TParams = void> = CallablePromiseModel<TResult, TParams>;

export type _SynchronizeModel<TResult = void, TParams = void> = CallableModel<TResult, TParams>;
