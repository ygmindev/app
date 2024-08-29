import { type ResourceClassModel } from '@lib/backend/resource/resource.models';

export type _WithFieldResolverParamsModel<TType extends unknown> = {
  Resource(): ResourceClassModel<TType>;
};

export type _WithFieldResolverModel = MethodDecorator;
