import { type CommerceReducerModel } from '@lib/frontend/commerce/stores/commerceStore/commerceStore.models';

export const COMMERCE_REDUCER: CommerceReducerModel = {
  defaultState: {
    items: [],
  },

  persist: true,
};
