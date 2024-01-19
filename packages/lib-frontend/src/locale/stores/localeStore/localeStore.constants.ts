import { type LocaleReducerModel } from '@lib/frontend/locale/stores/localeStore/localeStore.models';
import { currentTimezone } from '@lib/frontend/locale/utils/currentTimezone/currentTimezone';

export const LOCALE_REDUCER: LocaleReducerModel = {
  actions: {},

  defaultState: {
    countryCode: 'US',
    language: undefined,
    timezone: currentTimezone(),
  },
};
