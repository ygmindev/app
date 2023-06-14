import type {
  ResourceResolverModel,
  ResourceResolverParamsModel,
} from '#lib-backend/resource/utils/Resource/ResourceResolver/ResourceResolver.models';

export type EntityResourceResolverParamsModel<TType, TForm> = ResourceResolverParamsModel<
  TType,
  TForm
>;

export interface EntityResourceResolverModel<TType, TForm>
  extends ResourceResolverModel<TType, TForm> {}
