import { type ClassModel } from '@lib/shared/core/core.models';

export type _WithResolverParamsModel<TType extends unknown> = {
  Resource?(): ClassModel<TType>;
};

export type _WithResolverModel = ClassDecorator;
