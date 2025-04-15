import { type ResourceResolverAuthorizerParamsModel } from '@lib/backend/resource/utils/createResourceResolver/createResourceResolver.models';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';

export type SelfAuthorizerParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
> = ResourceResolverAuthorizerParamsModel<TMethod, TType>;

export type SelfAuthorizerModel = boolean;
