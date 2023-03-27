import type { GraphQlQueryParamsFieldsModel } from '@lib/frontend/http/utils/graphQlQuery/graphQlQuery.models';
import type { UseResourceMethodParamsFieldsModel } from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import type { ResourceMethodTypeCrudModel } from '@lib/shared/resource/resource.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

export const USER_FIELDS: GraphQlQueryParamsFieldsModel<UserModel> = [
  '_id',
  'first',
  'last',
  'email',
  'paymentMethodPrimary',
];

export const USER_OUTPUT_FIELDS: UseResourceMethodParamsFieldsModel<
  ResourceMethodTypeCrudModel,
  UserModel
> = [{ result: USER_FIELDS }];
