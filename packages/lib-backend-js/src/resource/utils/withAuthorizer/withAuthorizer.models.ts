import { type ResourceResolverAuthorizerModel } from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export type WithAuthorizerParamsModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType extends EntityResourceModel,
  TRoot = undefined,
> = {
  authorizer?: ResourceResolverAuthorizerModel<TMethod, TType>;
};

export type WithAuthorizerModel = MethodDecorator;
