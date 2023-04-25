import type { LocaleReducerModel } from '@lib/frontend/locale/stores/localeStore/localeStore.models';

export const LOCALE_REDUCER: LocaleReducerModel = {
  actions: {
    countryCodeSet: (store, value) => {
      store.set('countryCode', value);
    },
  },

  initialState: {},
};
