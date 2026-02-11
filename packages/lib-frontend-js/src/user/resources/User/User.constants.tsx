import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { ACCESS_RESOURCE_NAME } from '@lib/model/auth/Access/Access.constants';
import { ROLE_RESOURCE_NAME } from '@lib/model/auth/Role/Role.constants';
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
    { fields: [{ id: ROLE_RESOURCE_NAME }], id: ACCESS_RESOURCE_NAME },
  ],
  name: USER_RESOURCE_NAME,
} satisfies ResourceParamsModel<UserModel>;
