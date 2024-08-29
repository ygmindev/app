import {
  type CreateResourceResolverModel,
  type CreateResourceResolverParamsModel,
} from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type CreateEntityResourceResolverParamsModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
> = CreateResourceResolverParamsModel<TType, TForm>;

export type CreateEntityResourceResolverModel<
  TType,
  TForm = EntityResourceDataModel<TType>,
> = CreateResourceResolverModel<TType, TForm>;
