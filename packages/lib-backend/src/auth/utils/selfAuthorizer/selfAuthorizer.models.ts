import type { ResourceResolverAuthorizerParamsModel } from '@lib/backend/resource/utils/Resource/ResourceResolver/ResourceResolver.models';
import type { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

export interface SelfAuthorizerParamsModel
  extends ResourceResolverAuthorizerParamsModel<
    | RESOURCE_METHOD_TYPE.CREATE
    | RESOURCE_METHOD_TYPE.GET
    | RESOURCE_METHOD_TYPE.GET_CONNECTION
    | RESOURCE_METHOD_TYPE.GET_MANY
    | RESOURCE_METHOD_TYPE.REMOVE
    | RESOURCE_METHOD_TYPE.UPDATE,
    unknown,
    unknown,
    UserModel
  > {}

export type SelfAuthorizerModel = boolean;
