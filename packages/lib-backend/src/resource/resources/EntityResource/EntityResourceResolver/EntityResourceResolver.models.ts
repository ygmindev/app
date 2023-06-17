import type {
  ResourceResolverModel,
  ResourceResolverParamsModel,
} from '#lib-backend/resource/utils/Resource/ResourceResolver/ResourceResolver.models';

export type EntityResourceResolverParamsModel<TType, TForm> = ResourceResolverParamsModel<
  TType,
  TForm
>;

export type EntityResourceResolverModel<TType, TForm> = ResourceResolverModel<TType, TForm>;
