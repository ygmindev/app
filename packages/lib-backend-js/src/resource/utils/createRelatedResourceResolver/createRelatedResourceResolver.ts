import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import {
  type CreateRelatedResourceResolverModel,
  type CreateRelatedResourceResolverParamsModel,
} from '@lib/backend/resource/utils/createRelatedResourceResolver/createRelatedResourceResolver.models';
import { createResourceResolver } from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver';
import { ClassModel } from '@lib/shared/core/core.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export const createRelatedResourceResolver = <
  TType extends EntityResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
>(
  params: CreateRelatedResourceResolverParamsModel<TType, TForm, TRoot>,
): CreateRelatedResourceResolverModel<TType, TForm, TRoot> => {
  @withResolver()
  class RelatedResourceResolver extends (createResourceResolver<TType, TForm, TRoot>(
    params,
  ) as ClassModel) {}
  return RelatedResourceResolver as CreateRelatedResourceResolverModel<TType, TForm, TRoot>;
};
