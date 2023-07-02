import {
  type CreateResourceResolverModel,
  type CreateResourceResolverParamsModel,
} from '#lib-backend/resource/utils/createResourceResolver/createResourceResolver.models';

export type CreateEntityResourceResolverParamsModel<TType, TForm> =
  CreateResourceResolverParamsModel<TType, TForm>;

export type CreateEntityResourceResolverModel<TType, TForm> = CreateResourceResolverModel<
  TType,
  TForm
>;
