import type {
  AppActionsParamsModel,
  AppStateModel,
} from '@lib/frontend/app/stores/appStore/appStore.models';
import type {
  LocaleActionsParamsModel,
  LocaleStateModel,
} from '@lib/frontend/locale/stores/localeStore/localeStore.models';
import type {
  NotificationActionsParamsModel,
  NotificationStateModel,
} from '@lib/frontend/notification/stores/notificationStore/notificationStore.models';
import type {
  RouteActionsParamsModel,
  RouteStateModel,
} from '@lib/frontend/route/stores/routeStore/routeStore.models';
import type { ActionsModel } from '@lib/frontend/state/state.models';
import type {
  StyleActionsParamsModel,
  StyleStateModel,
} from '@lib/frontend/style/stores/styleStore/styleStore.models';
import type {
  UserActionsParamsModel,
  UserStateModel,
} from '@lib/frontend/user/stores/userStore/userStore.models';
import type { APP } from '@lib/shared/app/app.constants';
import type { LOCALE } from '@lib/shared/locale/locale.constants';
import type { NOTIFICATION } from '@lib/shared/notification/notification.constants';
import type { ROUTE } from '@lib/shared/route/route.constants';
import type { STYLE } from '@lib/shared/style/style.constants';
import type { USER } from '@lib/shared/user/user.constants';

export type RootStateModel = {
  [APP]: AppStateModel;
  [LOCALE]: LocaleStateModel;
  [NOTIFICATION]: NotificationStateModel;
  [ROUTE]: RouteStateModel;
  [STYLE]: StyleStateModel;
  [USER]: UserStateModel;
};

export type RootActionsParamsModel = {
  [APP]: AppActionsParamsModel;
  [LOCALE]: LocaleActionsParamsModel;
  [NOTIFICATION]: NotificationActionsParamsModel;
  [ROUTE]: RouteActionsParamsModel;
  [STYLE]: StyleActionsParamsModel;
  [USER]: UserActionsParamsModel;
};

export type RootActionsModel = {
  [TKey in keyof RootActionsParamsModel]: ActionsModel<RootActionsParamsModel[TKey]>;
};
