import {
  type CreateResourceResolverModel,
  type CreateResourceResolverParamsModel,
} from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type CreateEntityResourceResolverParamsModel<TType extends EntityResourceModel> =
  CreateResourceResolverParamsModel<TType>;

export type CreateEntityResourceResolverModel<TType extends EntityResourceModel> =
  CreateResourceResolverModel<TType> & {
    entity: string;
  };
