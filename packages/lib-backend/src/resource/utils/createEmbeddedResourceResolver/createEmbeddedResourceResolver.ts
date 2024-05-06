import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import {
  type CreateEmbeddedResourceResolverModel,
  type CreateEmbeddedResourceResolverParamsModel,
} from '@lib/backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver.models';
import { createResourceResolver } from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver';
import { type EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export const createEmbeddedResourceResolver = <
  TType extends EmbeddedResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
>(
  params: CreateEmbeddedResourceResolverParamsModel<TType, TForm, TRoot>,
): CreateEmbeddedResourceResolverModel<TType, TForm, TRoot> => {
  const ResourceResolver = createResourceResolver<TType, TForm, TRoot>(params);
  @withResolver()
  class EmbeddedResourceResolver extends ResourceResolver {}
  return EmbeddedResourceResolver as CreateEmbeddedResourceResolverModel<TType, TForm, TRoot>;
};
