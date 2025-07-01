import { type ResourceResolverAuthorizerParamsModel } from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver.models';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export type SelfAuthorizerParamsModel<
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
> = ResourceResolverAuthorizerParamsModel<TMethod, TType>;

export type SelfAuthorizerModel = boolean;
