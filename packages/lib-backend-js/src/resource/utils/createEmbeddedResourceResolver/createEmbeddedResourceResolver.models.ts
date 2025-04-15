import {
  type CreateResourceResolverModel,
  type CreateResourceResolverParamsModel,
} from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type CreateEmbeddedResourceResolverParamsModel<
  TType extends EntityResourceModel,
  TRoot extends EntityResourceModel,
> = CreateResourceResolverParamsModel<TType, TRoot>;

export type CreateEmbeddedResourceResolverModel<
  TType extends EntityResourceModel,
  TRoot extends EntityResourceModel,
> = CreateResourceResolverModel<TType, TRoot>;
