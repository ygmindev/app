import { type GroupReducerModel } from '#lib-frontend/group/stores/groupStore/groupStore.models';
import { merge } from '#lib-shared/core/utils/merge/merge';

export const GROUP_REDUCER: GroupReducerModel = {
  actions: {
    currentGroupSet: (store, value) => {
      store.set('currentGroup', value);
    },

    currentGroupUpdate: (store, value) => {
      const currentGroup = store.get('currentGroup');
      store.set('currentGroup', merge([value, currentGroup ?? {}]));
    },
  },

  initialState: {
    currentGroup: undefined,
  },
};
