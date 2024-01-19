import { type ResourceClassModel } from '@lib/backend/resource/resource.models';

export type _WithResolverParamsModel<TType> = {
  Resource?(): ResourceClassModel<TType>;
};

export type _WithResolverModel = ClassDecorator;
