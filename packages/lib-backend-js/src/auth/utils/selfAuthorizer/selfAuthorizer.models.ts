import { type ResourceResolverAuthorizerParamsModel } from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver.models';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type SelfAuthorizerParamsModel<
  TMethod extends ResourceMethodTypeModel = ResourceMethodTypeModel,
  TType = unknown,
  TForm = EntityResourceDataModel<TType>,
> = ResourceResolverAuthorizerParamsModel<TMethod, TType, TForm>;

export type SelfAuthorizerModel = boolean;
