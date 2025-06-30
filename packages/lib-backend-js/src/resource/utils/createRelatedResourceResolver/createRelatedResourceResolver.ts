import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import {
  type CreateRelatedResourceResolverModel,
  type CreateRelatedResourceResolverParamsModel,
} from '@lib/backend/resource/utils/createRelatedResourceResolver/createRelatedResourceResolver.models';
import { createResourceResolver } from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver';
import { ClassModel } from '@lib/shared/core/core.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export const createRelatedResourceResolver = <
  TType extends EntityResourceModel,
  TRoot extends EntityResourceModel,
>(
  params: CreateRelatedResourceResolverParamsModel<TType, TRoot>,
): CreateRelatedResourceResolverModel<TType, TRoot> => {
  @withResolver()
  class RelatedResourceResolver extends (createResourceResolver<TType, TRoot>(
    params,
  ) as ClassModel) {}
  return RelatedResourceResolver as CreateRelatedResourceResolverModel<TType, TRoot>;
};
