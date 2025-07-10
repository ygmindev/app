import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { USER_RESOURCE_NAME } from '@lib/model/user/User/User.constants';
import { type UserModel } from '@lib/model/user/User/User.models';

export const USER_RESOURCE_PARAMS = {
  fields: [
    { id: '_id', isHidden: true },
    { id: 'email', width: 300 },
    { id: 'first', width: 300 },
    { id: 'last' },
    { id: 'callingCode', isHidden: true },
    {
      formatter: ({ row, value }) => row.callingCode && value && `+${row.callingCode} ${value}`,
      id: 'phone',
    },
    { fields: [{ id: '_id' }], id: 'paymentMethodPrimary' },
  ],
  name: USER_RESOURCE_NAME,
} satisfies ResourceParamsModel<UserModel>;
