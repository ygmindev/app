import { withContainer } from '#lib-backend/core/decorators/withContainer/withContainer';
import { withResolver } from '#lib-backend/http/decorators/withResolver/withResolver';
import type {
  EntityResourceResolverModel,
  EntityResourceResolverParamsModel,
} from '#lib-backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver.models';
import { ResourceResolver } from '#lib-backend/resource/utils/Resource/ResourceResolver/ResourceResolver';
import type { ClassModel } from '#lib-shared/core/core.models';

export const EntityResourceResolver = <TType, TForm>(
  params: EntityResourceResolverParamsModel<TType, TForm>,
): ClassModel<EntityResourceResolverModel<TType, TForm>> => {
  @withContainer()
  @withResolver({ isAbstract: true })
  class _EntityResourceResolver
    extends ResourceResolver<TType, TForm>(params)
    implements EntityResourceResolverModel<TType, TForm> {}
  return _EntityResourceResolver;
};
