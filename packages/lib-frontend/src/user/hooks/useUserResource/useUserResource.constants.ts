import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export const USER_FIELDS = [
  '_id',
  'callingCode',
  'email',
  'first',
  'last',
  'paymentMethodPrimary',
  'phone',
] satisfies GraphQlQueryParamsFieldsModel<UserModel>;
