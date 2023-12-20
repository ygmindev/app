import { STORAGE_BACKEND } from '#lib-frontend/state/utils/Storage/Storage.constants';
import { type StyleReducerModel } from '#lib-frontend/style/stores/styleStore/styleStore.models';
import { STYLE_BRIGHTNESS } from '#lib-frontend/style/style.constants';

export const STYLE_REDUCER: StyleReducerModel = {
  actions: {},

  initialState: {
    brightness: STYLE_BRIGHTNESS.LIGHT,
  },

  storage: [STORAGE_BACKEND.ASYNC],
};
