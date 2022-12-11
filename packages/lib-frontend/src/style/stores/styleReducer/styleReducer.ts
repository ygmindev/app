import { reducer } from '@lib/frontend/state/utils/reducer/reducer';
import { STYLE_STATE_INITIAL } from '@lib/frontend/style/stores/styleReducer/styleReducer.constants';

export const { actions, useStore } = reducer({
  actions: {
    themeSet: (store, value: string) => {
      store.set('theme', value);
    },
  },

  initialState: STYLE_STATE_INITIAL,
});
