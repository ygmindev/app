import type { LocaleReducerModel } from '#lib-frontend/locale/stores/localeStore/localeStore.models';

export const LOCALE_REDUCER: LocaleReducerModel = {
  actions: {
    isTimezoneAutomaticSet: (store, value) => {
      store.set('isTimezoneAutomatic', value);
    },

    timezoneSet: (store, value) => {
      store.set('timezone', value);
    },
  },

  initialState: {
    isTimezoneAutomatic: true,
  },
};
