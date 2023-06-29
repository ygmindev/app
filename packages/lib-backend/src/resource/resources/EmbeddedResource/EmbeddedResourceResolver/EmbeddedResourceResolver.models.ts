import {
  type ResourceResolverModel,
  type ResourceResolverParamsModel,
} from '#lib-backend/resource/utils/Resource/ResourceResolver/ResourceResolver.models';
import { type EmbeddedResourceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type EmbeddedResourceResolverParamsModel<
  TType extends EmbeddedResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
> = ResourceResolverParamsModel<TType, TForm, TRoot>;

export type EmbeddedResourceResolverModel<
  TType extends EmbeddedResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
> = ResourceResolverModel<TType, TForm, TRoot>;
