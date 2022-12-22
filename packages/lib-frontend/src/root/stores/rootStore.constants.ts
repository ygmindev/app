import { USER_REDUCER } from '@lib/frontend/user/stores/userStore/userStore.constants';
import { USER } from '@lib/shared/user/user.constants';

export const ROOT_REDUCERS = {
  [USER]: USER_REDUCER,
};
