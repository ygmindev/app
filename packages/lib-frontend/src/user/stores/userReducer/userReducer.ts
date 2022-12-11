import { reducer } from '@lib/frontend/state/utils/reducer/reducer';
import { USER_STATE_INITIAL } from '@lib/frontend/user/stores/userReducer/userReducer.constants';
import { merge } from '@lib/shared/core/utils/merge/merge';
import type {
  EntityResourceDataModel,
  EntityResourcePartialModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { UserModel } from '@lib/shared/user/resources/User/User.models';

export const { actions, useStore } = reducer({
  actions: {
    currentUserSet: (store, value: EntityResourcePartialModel<UserModel> | null) => {
      store.set('currentUser', value);
    },

    currentUserUpdate: (store, value: EntityResourceDataModel<UserModel>) => {
      const currentUser = store.get('currentUser');
      store.set('currentUser', currentUser ? merge({ values: [currentUser, value] }) : currentUser);
    },
  },

  initialState: USER_STATE_INITIAL,
});
