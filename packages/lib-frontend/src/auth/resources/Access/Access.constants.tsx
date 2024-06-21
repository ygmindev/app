import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { UserInput } from '@lib/frontend/user/components/UserInput/UserInput';
import {
  ACCESS_RESOURCE_NAME,
  ACCESS_ROLE_MORE,
} from '@lib/shared/auth/resources/Access/Access.constants';
import { type AccessModel } from '@lib/shared/auth/resources/Access/Access.models';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';

export const ACCESS_RESOURCE_PARAMS = {
  fields: [
    { id: '_id' },
    {
      id: 'role',
      isArray: true,
      options: Object.values(ACCESS_ROLE_MORE).map((v) => ({ id: v })),
    },
    {
      field: () => <UserInput />,
      fields: [{ id: '_id' }, { id: 'first' }, { id: 'last' }, { id: 'email' }, { id: 'phone' }],
      id: USER_RESOURCE_NAME,
    },
  ],
  name: ACCESS_RESOURCE_NAME,
} satisfies ResourceParamsModel<AccessModel>;
