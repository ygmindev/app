import type { ResourceResolverAuthorizerParamsModel } from '@lib/backend/resource/utils/Resource/ResourceResolver/ResourceResolver.models';
import type { ResourceMethodTypeCrudModel } from '@lib/shared/resource/resource.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

export interface SelfAuthorizerParamsModel
  extends ResourceResolverAuthorizerParamsModel<
    ResourceMethodTypeCrudModel,
    unknown,
    unknown,
    UserModel
  > {}

export type SelfAuthorizerModel = boolean;
