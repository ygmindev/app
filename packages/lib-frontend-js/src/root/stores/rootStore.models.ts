import {
  type AppActionsParamsModel,
  type AppStateModel,
} from '@lib/frontend/app/stores/appStore/appStore.models';
import {
  type AuthActionsParamsModel,
  type AuthStateModel,
} from '@lib/frontend/auth/stores/authStore/authStore.models';
import { type BILLING } from '@lib/frontend/billing/billing.constants';
import {
  type BillingActionsParamsModel,
  type BillingStateModel,
} from '@lib/frontend/billing/stores/billingStore/billingStore.models';
import {
  type CommerceActionsParamsModel,
  type CommerceStateModel,
} from '@lib/frontend/commerce/stores/commerceStore/commerceStore.models';
import { type GROUP } from '@lib/frontend/group/group.constants';
import {
  type GroupActionsParamsModel,
  type GroupStateModel,
} from '@lib/frontend/group/stores/groupStore/groupStore.models';
import {
  type LocaleActionsParamsModel,
  type LocaleStateModel,
} from '@lib/frontend/locale/stores/localeStore/localeStore.models';
import {
  type NotificationActionsParamsModel,
  type NotificationStateModel,
} from '@lib/frontend/notification/stores/notificationStore/notificationStore.models';
import {
  type RouteActionsParamsModel,
  type RouteStateModel,
} from '@lib/frontend/route/stores/routeStore/routeStore.models';
import {
  type NestedActionsModel,
  type NestedDefaultStateModel,
} from '@lib/frontend/state/state.models';
import { type StoreParamsModel } from '@lib/frontend/state/utils/Store/Store.models';
import {
  type StyleActionsParamsModel,
  type StyleStateModel,
} from '@lib/frontend/style/stores/styleStore/styleStore.models';
import {
  type UserActionsParamsModel,
  type UserStateModel,
} from '@lib/frontend/user/stores/userStore/userStore.models';
import { type APP } from '@lib/shared/app/app.constants';
import { type AUTH } from '@lib/shared/auth/auth.constants';
import { type COMMERCE } from '@lib/shared/commerce/commerce.constants';
import { type LOCALE } from '@lib/shared/locale/locale.constants';
import { type NOTIFICATION } from '@lib/shared/notification/notification.constants';
import { type ROUTE } from '@lib/shared/route/route.constants';
import { type STYLE } from '@lib/shared/style/style.constants';
import { type USER } from '@lib/shared/user/user.constants';

export type RootStateModel = {
  [APP]: AppStateModel;
  [AUTH]: AuthStateModel;
  [BILLING]: BillingStateModel;
  [COMMERCE]: CommerceStateModel;
  [GROUP]: GroupStateModel;
  [LOCALE]: LocaleStateModel;
  [NOTIFICATION]: NotificationStateModel;
  [ROUTE]: RouteStateModel;
  [STYLE]: StyleStateModel;
  [USER]: UserStateModel;
};

export type RootActionsParamsModel = {
  [APP]: AppActionsParamsModel;
  [AUTH]: AuthActionsParamsModel;
  [BILLING]: BillingActionsParamsModel;
  [COMMERCE]: CommerceActionsParamsModel;
  [GROUP]: GroupActionsParamsModel;
  [LOCALE]: LocaleActionsParamsModel;
  [NOTIFICATION]: NotificationActionsParamsModel;
  [ROUTE]: RouteActionsParamsModel;
  [STYLE]: StyleActionsParamsModel;
  [USER]: UserActionsParamsModel;
};

export type RootActionsModel = NestedActionsModel<
  Array<keyof RootStateModel>,
  RootStateModel,
  RootActionsParamsModel
>;

export type RootDefaultStateModel = NestedDefaultStateModel<
  Array<keyof RootStateModel>,
  RootStateModel
>;

export type RootStateContextModel = Omit<
  StoreParamsModel<Array<keyof RootStateModel>, RootStateModel, RootActionsParamsModel>,
  'reducers'
>;
