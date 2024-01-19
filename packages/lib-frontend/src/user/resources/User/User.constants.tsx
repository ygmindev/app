import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export const USER_RESOURCE_PARAMS = {
  fields: [
    { id: '_id' },
    { id: 'callingCode' },
    { id: 'email' },
    { id: 'first' },
    { id: 'last' },
    { id: 'paymentMethodPrimary' },
    { id: 'phone' },
  ],
  name: USER_RESOURCE_NAME,
} satisfies ResourceParamsModel<UserModel>;
