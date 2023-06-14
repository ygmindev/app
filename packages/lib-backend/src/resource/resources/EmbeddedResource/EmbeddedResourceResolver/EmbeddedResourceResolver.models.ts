import type {
  ResourceResolverModel,
  ResourceResolverParamsModel,
} from '#lib-backend/resource/utils/Resource/ResourceResolver/ResourceResolver.models';
import type { EmbeddedResourceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import type { EntityResourceModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export interface EmbeddedResourceResolverParamsModel<
  TType extends EmbeddedResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
> extends ResourceResolverParamsModel<TType, TForm, TRoot> {}

export interface EmbeddedResourceResolverModel<
  TType extends EmbeddedResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
> extends ResourceResolverModel<TType, TForm, TRoot> {}
