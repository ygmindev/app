import type { ConstructorModel } from '#lib-shared/core/core.models';

export interface _WithResolverParamsModel<TType> {
  Resource?: ConstructorModel<TType>;
  isAbstract?: boolean;
}

export interface _WithResolverMethodParamsModel<TType> {
  Resource?: ConstructorModel<TType>;
  isAbstract?: never;
}
