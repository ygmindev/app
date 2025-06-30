import {
  type CreateResourceResolverModel,
  type CreateResourceResolverParamsModel,
} from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type CreateRelatedResourceResolverParamsModel<
  TType extends EntityResourceModel,
  TRoot extends EntityResourceModel,
> = CreateResourceResolverParamsModel<TType, TRoot>;

export type CreateRelatedResourceResolverModel<
  TType extends EntityResourceModel,
  TRoot extends EntityResourceModel,
> = CreateResourceResolverModel<TType, TRoot>;
