import { localeReducer } from '@lib/frontend/locale/stores/localeReducer';
import { notificationReducer } from '@lib/frontend/notification/stores/reducer/reducer';
import type { RootStateModel } from '@lib/frontend/root/stores/reducer/reducer.models';
import { stylingReducer } from '@lib/frontend/styling/stores/reducer/reducer';
import { userReducer } from '@lib/frontend/user/stores/reducer/reducer';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { NOTIFICATION } from '@lib/shared/notification/notification.constants';
import { STYLING } from '@lib/shared/styling/styling.constants';
import { USER } from '@lib/shared/user/user.constants';
import type { EnhancedStore, PreloadedState } from '@reduxjs/toolkit';
import { configureStore as _configureStore } from '@reduxjs/toolkit';

export const configureStore = (
  initialState?: PreloadedState<RootStateModel>,
): EnhancedStore<RootStateModel> =>
  _configureStore({
    preloadedState: initialState,
    reducer: {
      [LOCALE]: localeReducer,
      [NOTIFICATION]: notificationReducer,
      [STYLING]: stylingReducer,
      [USER]: userReducer,
    },
  });
