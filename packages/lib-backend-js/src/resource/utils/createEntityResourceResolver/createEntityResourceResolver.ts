import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import {
  type CreateEntityResourceResolverModel,
  type CreateEntityResourceResolverParamsModel,
} from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver.models';
import { createResourceResolver } from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver';
import { EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';

export const createEntityResourceResolver = <TType extends EntityResourceModel>(
  params: CreateEntityResourceResolverParamsModel<TType>,
): CreateEntityResourceResolverModel<TType> => {
  @withResolver()
  class EntityResourceResolver extends createResourceResolver<TType>(params) {}
  return EntityResourceResolver as CreateEntityResourceResolverModel<TType>;
};
