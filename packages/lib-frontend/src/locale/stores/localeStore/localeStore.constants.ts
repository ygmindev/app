import type { LocaleReducerModel } from '@lib/frontend/locale/stores/localeStore/localeStore.models';

export const LOCALE_REDUCER: LocaleReducerModel = {
  actions: {
    timezoneIsAutomaticSet: (store, value) => {
      store.set('timezoneIsAutomatic', value);
    },

    timezoneSet: (store, value) => {
      store.set('timezone', value);
    },
  },

  initialState: {
    timezoneIsAutomatic: true,
  },
};
