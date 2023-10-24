import { type ClassModel } from '#lib-shared/core/core.models';

export type _WithResolverParamsModel<TType> = {
  Resource?(): ClassModel<TType>;
};

export type _WithResolverModel = ClassDecorator;
