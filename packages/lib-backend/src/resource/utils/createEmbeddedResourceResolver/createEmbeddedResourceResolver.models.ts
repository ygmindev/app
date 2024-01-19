import {
  type CreateResourceResolverModel,
  type CreateResourceResolverParamsModel,
} from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver.models';
import { type EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type CreateEmbeddedResourceResolverParamsModel<
  TType extends EmbeddedResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
> = CreateResourceResolverParamsModel<TType, TForm, TRoot>;

export type CreateEmbeddedResourceResolverModel<
  TType extends EmbeddedResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
> = CreateResourceResolverModel<TType, TForm, TRoot>;
