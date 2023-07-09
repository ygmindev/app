import { STORAGE_BACKEND } from '#lib-frontend/state/utils/Storage/Storage.constants';
import { STYLE_REDUCER as STYLE_REDUCER_BASE } from '#lib-frontend/style/stores/styleStore/styleStore.constants.base';
import { type StyleReducerModel } from '#lib-frontend/style/stores/styleStore/styleStore.models';
import { merge } from '#lib-shared/core/utils/merge/merge';

export const STYLE_REDUCER: StyleReducerModel = merge([
  { storage: [STORAGE_BACKEND.COOKIES] },

  STYLE_REDUCER_BASE,
]);
