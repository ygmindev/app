import { withResolver } from '@lib/backend/graphql/decorators/withResolver/withResolver';
import type {
  EmbeddedResourceResolverModel,
  EmbeddedResourceResolverParamsModel,
} from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResourceResolver/EmbeddedResourceResolver.models';
import { ResourceResolver } from '@lib/backend/resource/utils/Resource/ResourceResolver/ResourceResolver';
import type { ConstructorModel } from '@lib/shared/core/core.models';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import type { EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export const EmbeddedResourceResolver = <
  TType extends EmbeddedResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
>(
  params: EmbeddedResourceResolverParamsModel<TType, TForm, TRoot>,
): ConstructorModel<EmbeddedResourceResolverModel<TType, TForm, TRoot>> => {
  @withContainer()
  @withResolver({ isAbstract: true })
  class _EmbeddedResourceResolver
    extends ResourceResolver<TType, TForm, TRoot>(params)
    implements EmbeddedResourceResolverModel<TType, TForm, TRoot> {}
  return _EmbeddedResourceResolver;
};
