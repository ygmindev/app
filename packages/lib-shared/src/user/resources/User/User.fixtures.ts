import type { UserModel } from '@lib/shared/user/resources/User/User.models';

export const USER_FIXTURE: Required<UserModel> = {
  LinkedUser: [],
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
