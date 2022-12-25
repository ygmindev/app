import { LOCALE_REDUCER } from '@lib/frontend/locale/stores/localeStore/localeStore.constants';
import { NOTIFICATION_REDUCER } from '@lib/frontend/notification/stores/notificationStore/notificationStore.constants';
import type { RootStateModel } from '@lib/frontend/root/stores/rootStore.models';
import { ROUTE_REDUCER } from '@lib/frontend/route/stores/routeStore/routeStore.constants';
import type { ReducerModel } from '@lib/frontend/state/state.models';
import { STYLE_REDUCER } from '@lib/frontend/style/stores/styleStore/styleStore.constants';
import { USER_REDUCER } from '@lib/frontend/user/stores/userStore/userStore.constants';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { NOTIFICATION } from '@lib/shared/notification/notification.constants';
import { ROUTE } from '@lib/shared/route/route.constants';
import { STYLE } from '@lib/shared/style/style.constants';
import { USER } from '@lib/shared/user/user.constants';

export const ROOT_REDUCERS: Record<keyof RootStateModel, ReducerModel<object, object>> = {
  [LOCALE]: LOCALE_REDUCER,
  [NOTIFICATION]: NOTIFICATION_REDUCER,
  [ROUTE]: ROUTE_REDUCER,
  [STYLE]: STYLE_REDUCER,
  [USER]: USER_REDUCER,
};