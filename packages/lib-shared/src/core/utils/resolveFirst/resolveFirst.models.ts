import type { CallablePromiseModel } from '#lib-shared/core/core.models';

export type ResolveFirstParamsModel<TType> = Array<CallablePromiseModel<TType>>;

export type ResolveFirstModel<TType> = Promise<TType>;
