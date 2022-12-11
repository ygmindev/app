import { LOCALE_STATE_INITIAL } from '@lib/frontend/locale/stores/localeReducer/localeReducer.constants';
import { reducer } from '@lib/frontend/state/utils/reducer/reducer';

export const { actions, useStore } = reducer({
  actions: {},

  initialState: LOCALE_STATE_INITIAL,
});
