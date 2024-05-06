import { type ResourceResolverAuthorizerModel } from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver.models';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type WithAuthorizerParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
> = {
  authorizer?: ResourceResolverAuthorizerModel<TMethod, TType, TForm>;
};

export type WithAuthorizerModel = MethodDecorator;
