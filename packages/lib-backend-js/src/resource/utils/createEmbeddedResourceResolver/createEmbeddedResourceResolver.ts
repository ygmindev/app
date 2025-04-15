import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import {
  type CreateEmbeddedResourceResolverModel,
  type CreateEmbeddedResourceResolverParamsModel,
} from '@lib/backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver.models';
import { createResourceResolver } from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver';
import { ClassModel } from '@lib/shared/core/core.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export const createEmbeddedResourceResolver = <
  TType extends EntityResourceModel,
  TRoot extends EntityResourceModel,
>(
  params: CreateEmbeddedResourceResolverParamsModel<TType, TRoot>,
): CreateEmbeddedResourceResolverModel<TType, TRoot> => {
  @withResolver()
  class EmbeddedResourceResolver extends (createResourceResolver<TType, TRoot>(
    params,
  ) as ClassModel) {}
  return EmbeddedResourceResolver as CreateEmbeddedResourceResolverModel<TType, TRoot>;
};
