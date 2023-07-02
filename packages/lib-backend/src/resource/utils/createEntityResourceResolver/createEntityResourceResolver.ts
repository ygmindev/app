import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import {
  type CreateEntityResourceResolverModel,
  type CreateEntityResourceResolverParamsModel,
} from '#lib-backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver.models';
import { createResourceResolver } from '#lib-backend/resource/utils/createResourceResolver/createResourceResolver';

export const createEntityResourceResolver = <TType, TForm>(
  params: CreateEntityResourceResolverParamsModel<TType, TForm>,
): CreateEntityResourceResolverModel<TType, TForm> => {
  const ResourceResolver = createResourceResolver<TType, TForm>(params);
  @withResolver({ isAbstract: true })
  abstract class EntityResourceResolver extends ResourceResolver {}
  return EntityResourceResolver as CreateEntityResourceResolverModel<TType, TForm>;
};
