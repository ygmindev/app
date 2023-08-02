import { type ResourceResolverAuthorizerModel } from '#lib-backend/resource/utils/createResourceResolver/createResourceResolver.models';
import { type ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';

export type WithAuthorizerParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm = undefined,
  TRoot = undefined,
> = {
  authorizer?: ResourceResolverAuthorizerModel<TMethod, TType, TForm, TRoot>;
};

export type WithAuthorizerModel = MethodDecorator;
