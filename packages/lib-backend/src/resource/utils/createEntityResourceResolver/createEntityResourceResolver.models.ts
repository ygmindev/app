import {
  type CreateResourceResolverModel,
  type CreateResourceResolverParamsModel,
} from '#lib-backend/resource/utils/createResourceResolver/createResourceResolver.models';

export type CreateEntityResourceResolverParamsModel<
  TType,
  TForm = undefined,
> = CreateResourceResolverParamsModel<TType, TForm>;

export type CreateEntityResourceResolverModel<
  TType,
  TForm = undefined,
> = CreateResourceResolverModel<TType, TForm>;
