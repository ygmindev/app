import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export const USER_RESOURCE_PARAMS = {
  fields: [
    { id: 'email', width: 300 },
    { id: 'first', width: 300 },
    { id: 'last' },
    { id: 'callingCode', isHidden: true },
    {
      formatter: ({ row, value }) => row.callingCode && value && `+${row.callingCode} ${value}`,
      id: 'phone',
    },
    // { id: 'paymentMethodPrimary' },
  ],
  name: USER_RESOURCE_NAME,
} satisfies ResourceParamsModel<UserModel>;
