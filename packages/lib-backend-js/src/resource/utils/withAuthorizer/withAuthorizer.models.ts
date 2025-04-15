import { type ResourceResolverAuthorizerModel } from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver.models';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type WithAuthorizerParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType extends EntityResourceModel,
  TRoot = undefined,
> = {
  authorizer?: ResourceResolverAuthorizerModel<TMethod, TType>;
};

export type WithAuthorizerModel = MethodDecorator;
