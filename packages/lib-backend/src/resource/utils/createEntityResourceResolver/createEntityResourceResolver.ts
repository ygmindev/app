import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import {
  type CreateEntityResourceResolverModel,
  type CreateEntityResourceResolverParamsModel,
} from '#lib-backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver.models';
import { createResourceResolver } from '#lib-backend/resource/utils/createResourceResolver/createResourceResolver';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export const createEntityResourceResolver = <TType, TForm = EntityResourceDataModel<TType>>(
  params: CreateEntityResourceResolverParamsModel<TType, TForm>,
): CreateEntityResourceResolverModel<TType, TForm> => {
  const ResourceResolver = createResourceResolver<TType, TForm>(params);
  @withResolver({ isAbstract: true })
  class EntityResourceResolver extends ResourceResolver {}
  return EntityResourceResolver as CreateEntityResourceResolverModel<TType, TForm>;
};
