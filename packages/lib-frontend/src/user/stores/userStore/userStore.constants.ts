import { type UserReducerModel } from '#lib-frontend/user/stores/userStore/userStore.models';
import { merge } from '#lib-shared/core/utils/merge/merge';

export const USER_REDUCER: UserReducerModel = {
  actions: {
    currentUserSet: (store, value) => {
      store.set('currentUser', value);
    },

    currentUserUpdate: (store, value) => {
      const currentUser = store.get('currentUser');
      store.set('currentUser', currentUser ? merge([value, currentUser]) : currentUser);
    },
  },

  initialState: {
    currentUser: undefined,
  },
};
