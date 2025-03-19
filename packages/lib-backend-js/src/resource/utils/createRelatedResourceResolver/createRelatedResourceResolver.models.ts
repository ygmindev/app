import {
  type CreateResourceResolverModel,
  type CreateResourceResolverParamsModel,
} from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type CreateRelatedResourceResolverParamsModel<
  TType extends EntityResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
> = CreateResourceResolverParamsModel<TType, TForm, TRoot>;

export type CreateRelatedResourceResolverModel<
  TType extends EntityResourceModel,
  TForm,
  TRoot extends EntityResourceModel,
> = CreateResourceResolverModel<TType, TForm, TRoot>;
