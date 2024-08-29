import { type ResourceResolverAuthorizerParamsModel } from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver.models';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';

export type SelfAuthorizerParamsModel<
  TMethod extends ResourceMethodTypeModel = ResourceMethodTypeModel,
  TType = unknown,
  TForm = EntityResourceDataModel<TType>,
> = (input?: InputModel<TMethod, TType, TForm>) => string | undefined;

export type SelfAuthorizerModel<
  TMethod extends ResourceMethodTypeModel = ResourceMethodTypeModel,
  TType = unknown,
  TForm = EntityResourceDataModel<TType>,
> = (params: ResourceResolverAuthorizerParamsModel<TMethod, TType, TForm>) => boolean;
