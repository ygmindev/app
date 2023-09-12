import { type GraphQlFieldModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type EntityResourcePartialModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';
import { type UserModel } from '#lib-shared/user/resources/User/User.models';

export const USER_FIELDS: Array<GraphQlFieldModel<EntityResourcePartialModel<UserModel>>> = [
  '_id',
  'callingCode',
  'email',
  'first',
  'last',
  'paymentMethodPrimary',
  'phone',
];
