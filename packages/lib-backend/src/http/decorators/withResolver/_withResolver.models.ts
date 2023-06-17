import type { ConstructorModel } from '#lib-shared/core/core.models';

export type _WithResolverParamsModel<TType> = {
  Resource?: ConstructorModel<TType>;
  isAbstract?: boolean;
};

export type _WithResolverMethodParamsModel<TType> = {
  Resource?: ConstructorModel<TType>;
  isAbstract?: never;
};
