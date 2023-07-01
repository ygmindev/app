import { withContainer } from '#lib-backend/core/decorators/withContainer/withContainer';
import { withResolver } from '#lib-backend/http/decorators/withResolver/withResolver';
import {
  type EntityResourceResolverModel,
  type EntityResourceResolverParamsModel,
} from '#lib-backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver.models';
import { ResourceResolver } from '#lib-backend/resource/utils/Resource/ResourceResolver/ResourceResolver';
import { type ClassModel } from '#lib-shared/core/core.models';

export const EntityResourceResolver = <TType, TForm>(
  params: EntityResourceResolverParamsModel<TType, TForm>,
): ClassModel<EntityResourceResolverModel<TType, TForm>> => {
  const ResourceResolverF = ResourceResolver<TType, TForm>(params);

  @withContainer()
  @withResolver({ isAbstract: true })
  class EntityResourceResolverF
    extends ResourceResolverF
    implements EntityResourceResolverModel<TType, TForm> {}

  return EntityResourceResolverF;
};
