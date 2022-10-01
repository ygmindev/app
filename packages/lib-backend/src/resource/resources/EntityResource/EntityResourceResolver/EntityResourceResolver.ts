import { withResolver } from '@lib/backend/graphql/decorators/withResolver/withResolver';
import type {
  EntityResourceResolverModel,
  EntityResourceResolverParamsModel,
} from '@lib/backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver.models';
import { ResourceResolver } from '@lib/backend/resource/utils/Resource/ResourceResolver/ResourceResolver';
import type { ConstructorModel } from '@lib/shared/core/core.models';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';

export const EntityResourceResolver = <TType, TForm>(
  params: EntityResourceResolverParamsModel<TType, TForm>,
): ConstructorModel<EntityResourceResolverModel<TType, TForm>> => {
  @withContainer()
  @withResolver({ isAbstract: true })
  class _EntityResourceResolver
    extends ResourceResolver<TType, TForm>(params)
    implements EntityResourceResolverModel<TType, TForm> {}
  return _EntityResourceResolver;
};
