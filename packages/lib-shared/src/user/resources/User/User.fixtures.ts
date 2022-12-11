import { CARD_RESOURCE_NAME } from '@lib/shared/billing/resources/Card/Card.constants';
import { LINKED_USER_RESOURCE_NAME } from '@lib/shared/user/resources/LinkedUser/LinkedUser.constants';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

export const USER_FIXTURE: Required<UserModel> = {
  [CARD_RESOURCE_NAME]: [],
  [LINKED_USER_RESOURCE_NAME]: [],
  _id: 'uid',
  beforeCreate: async (): Promise<void> => {
    return;
  },
  created: new Date(2000, 1, 1),
  email: 'user@email.com',
  first: 'fist',
  last: 'last',
  phone: '',
};
