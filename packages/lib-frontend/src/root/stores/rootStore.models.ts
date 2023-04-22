import type {
  AppActionsParamsModel,
  AppStateModel,
} from '@lib/frontend/app/stores/appStore/appStore.models';
import type { BILLING } from '@lib/frontend/billing/billing.constants';
import type {
  BillingActionsParamsModel,
  BillingStateModel,
} from '@lib/frontend/billing/stores/billingStore/billingStore.models';
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
import type { NestedActionsModel } from '@lib/frontend/state/state.models';
import type { StoreParamsModel } from '@lib/frontend/state/utils/Store/Store.models';
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

export interface RootStateModel {
  [APP]: AppStateModel;
  [BILLING]: BillingStateModel;
  [LOCALE]: LocaleStateModel;
  [NOTIFICATION]: NotificationStateModel;
  [ROUTE]: RouteStateModel;
  [STYLE]: StyleStateModel;
  [USER]: UserStateModel;
}

export interface RootActionsParamsModel {
  [APP]: AppActionsParamsModel;
  [BILLING]: BillingActionsParamsModel;
  [LOCALE]: LocaleActionsParamsModel;
  [NOTIFICATION]: NotificationActionsParamsModel;
  [ROUTE]: RouteActionsParamsModel;
  [STYLE]: StyleActionsParamsModel;
  [USER]: UserActionsParamsModel;
}

export interface RootActionsModel
  extends NestedActionsModel<Array<keyof RootActionsParamsModel>, RootActionsParamsModel> {}

export interface RootStateContextModel
  extends Omit<
    StoreParamsModel<Array<keyof RootStateModel>, RootStateModel, RootActionsParamsModel>,
    'reducers'
  > {}
