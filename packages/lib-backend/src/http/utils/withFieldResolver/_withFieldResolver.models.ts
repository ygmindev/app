import { type ResourceClassModel } from '@lib/backend/resource/resource.models';

export type _WithFieldResolverParamsModel<TType> = {
  Resource?(): ResourceClassModel<TType>;
};

export type _WithFieldResolverModel = MethodDecorator;
