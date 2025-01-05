import { CARD_RESOURCE_PARAMS } from '@lib/frontend/billing/resources/Card/Card.constants';
import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { CARD_RESOURCE_NAME } from '@lib/shared/billing/resources/Card/Card.constants';
import { USER_RESOURCE_NAME } from '@lib/shared/user/resources/User/User.constants';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export const USER_RESOURCE_PARAMS = {
  fields: [
    { id: 'email' },
    { id: 'first' },
    { id: 'last' },
    {
      fields: CARD_RESOURCE_PARAMS.fields,
      formatter: ({ value }) => value?.map(({ last4 }) => last4).join(', '),
      id: CARD_RESOURCE_NAME,
    },
    { id: 'callingCode', isHidden: true },
    {
      formatter: ({ row, value }) => row.callingCode && value && `+${row.callingCode} ${value}`,
      id: 'phone',
    },
  ],
  name: USER_RESOURCE_NAME,
} satisfies ResourceParamsModel<UserModel>;
