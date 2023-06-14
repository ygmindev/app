import type { GraphQlQueryParamsFieldsModel } from '#lib-frontend/http/utils/graphQlQuery/graphQlQuery.models';
import type { UseResourceMethodParamsFieldsModel } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import type { ResourceMethodTypeCrudModel } from '#lib-shared/resource/resource.models';
import type { LinkedUserModel } from '#lib-shared/user/resources/LinkedUser/LinkedUser.models';
import type { UserModel } from '#lib-shared/user/resources/User/User.models';

export const LINKED_USER_FIELDS: GraphQlQueryParamsFieldsModel<LinkedUserModel> = ['_id'];

export const LINKED_USER_OUTPUT_FIELDS: UseResourceMethodParamsFieldsModel<
  ResourceMethodTypeCrudModel,
  LinkedUserModel,
  UserModel
> = [{ result: LINKED_USER_FIELDS }];
