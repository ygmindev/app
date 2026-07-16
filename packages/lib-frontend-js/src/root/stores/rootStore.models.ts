import { type AppSliceModel } from '@lib/frontend/app/stores/appStore/appStore.models';
import { type AuthReducerModel as AuthSliceModel } from '@lib/frontend/auth/stores/authStore/authStore.models';
import { type BILLING } from '@lib/frontend/billing/billing.constants';
import { type BillingReducerModel as BillingSliceModel } from '@lib/frontend/billing/stores/billingStore/billingStore.models';
import { type ChatReducerModel as ChatSliceModel } from '@lib/frontend/chat/stores/chatStore/chatStore.models';
import { type CommerceReducerModel as CommerceSliceModel } from '@lib/frontend/commerce/stores/commerceStore/commerceStore.models';
import { type GROUP } from '@lib/frontend/group/group.constants';
import { type GroupReducerModel as GroupSliceModel } from '@lib/frontend/group/stores/groupStore/groupStore.models';
import { type LocaleReducerModel as LocaleSliceModel } from '@lib/frontend/locale/stores/localeStore/localeStore.models';
import { type NotificationReducerModel as NotificationSliceModel } from '@lib/frontend/notification/stores/notificationStore/notificationStore.models';
import { type RouteReducerModel as RouteSliceModel } from '@lib/frontend/route/stores/routeStore/routeStore.models';
import {
  type NestedActionsModel,
  type NestedDefaultStateModel,
  type StoreReducersModel,
  type StoreStateModel,
} from '@lib/frontend/state/state.models';
import { type StoreParamsModel } from '@lib/frontend/state/utils/Store/Store.models';
import { type StyleReducerModel as StyleSliceModel } from '@lib/frontend/style/stores/styleStore/styleStore.models';
import { type UserReducerModel as UserSliceModel } from '@lib/frontend/user/stores/userStore/userStore.models';
import { type APP } from '@lib/shared/app/app.constants';
import { type AUTH } from '@lib/shared/auth/auth.constants';
import { type CHAT } from '@lib/shared/chat/chat.constants';
import { type COMMERCE } from '@lib/shared/commerce/commerce.constants';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type LOCALE } from '@lib/shared/locale/locale.constants';
import { type NOTIFICATION } from '@lib/shared/notification/notification.constants';
import { type ROUTE } from '@lib/shared/route/route.constants';
import { type STYLE } from '@lib/shared/style/style.constants';
import { type USER } from '@lib/shared/user/user.constants';

export type RootSliceModel = {
  [APP]: AppSliceModel;
  [AUTH]: AuthSliceModel;
  [BILLING]: BillingSliceModel;
  [CHAT]: ChatSliceModel;
  [COMMERCE]: CommerceSliceModel;
  [GROUP]: GroupSliceModel;
  [LOCALE]: LocaleSliceModel;
  [NOTIFICATION]: NotificationSliceModel;
  [ROUTE]: RouteSliceModel;
  [STYLE]: StyleSliceModel;
  [USER]: UserSliceModel;
};

export type RootStateModel = {
  [TKey in StringKeyModel<RootSliceModel>]: StoreStateModel<RootSliceModel[TKey]>;
};

export type RootReducersModel = {
  [TKey in StringKeyModel<RootSliceModel>]: StoreReducersModel<RootSliceModel[TKey]>;
};

export type RootActionsModel = NestedActionsModel<RootStateModel, RootReducersModel>;

export type RootDefaultStateModel = NestedDefaultStateModel<RootStateModel>;

export type RootStateContextModel = Omit<
  StoreParamsModel<RootStateModel, RootReducersModel>,
  'reducers'
>;
