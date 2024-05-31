import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import {
  type CreateEmbeddedResourceResolverModel,
  type CreateEmbeddedResourceResolverParamsModel,
} from '@lib/backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver.models';
import { createResourceResolver } from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver';
import { ClassModel } from '@lib/shared/core/core.models';
import { type EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export const createEmbeddedResourceResolver = <
  TType extends EmbeddedResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
>(
  params: CreateEmbeddedResourceResolverParamsModel<TType, TForm, TRoot>,
): CreateEmbeddedResourceResolverModel<TType, TForm, TRoot> => {
  @withResolver()
  class EmbeddedResourceResolver extends (createResourceResolver<TType, TForm, TRoot>(
    params,
  ) as ClassModel) {}
  return EmbeddedResourceResolver as CreateEmbeddedResourceResolverModel<TType, TForm, TRoot>;
};
