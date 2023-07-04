import { type OptionalCallablePromiseModel } from '#lib-shared/core/core.models';

export type ResolveFirstParamsModel<TType> = Array<OptionalCallablePromiseModel<TType>>;

export type ResolveFirstModel<TType> = Promise<TType>;
