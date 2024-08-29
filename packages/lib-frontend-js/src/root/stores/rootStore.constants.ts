import { APP_REDUCER } from '@lib/frontend/app/stores/appStore/appStore.constants';
import { AUTH_REDUCER } from '@lib/frontend/auth/stores/authStore/authStore.constants';
import { BILLING } from '@lib/frontend/billing/billing.constants';
import { BILLING_REDUCER } from '@lib/frontend/billing/stores/billingStore/billingStore.constants';
import { COMMERCE_REDUCER } from '@lib/frontend/commerce/stores/commerceStore/commerceStore.constants';
import { GROUP } from '@lib/frontend/group/group.constants';
import { GROUP_REDUCER } from '@lib/frontend/group/stores/groupStore/groupStore.constants';
import { LOCALE_REDUCER } from '@lib/frontend/locale/stores/localeStore/localeStore.constants';
import { NOTIFICATION_REDUCER } from '@lib/frontend/notification/stores/notificationStore/notificationStore.constants';
import {
  type RootActionsParamsModel,
  type RootStateModel,
} from '@lib/frontend/root/stores/rootStore.models';
import { ROUTE_REDUCER } from '@lib/frontend/route/stores/routeStore/routeStore.constants';
import { type ReducerModel } from '@lib/frontend/state/state.models';
import { STYLE_REDUCER } from '@lib/frontend/style/stores/styleStore/styleStore.constants';
import { USER_REDUCER } from '@lib/frontend/user/stores/userStore/userStore.constants';
import { APP } from '@lib/shared/app/app.constants';
import { AUTH } from '@lib/shared/auth/auth.constants';
import { COMMERCE } from '@lib/shared/commerce/commerce.constants';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { NOTIFICATION } from '@lib/shared/notification/notification.constants';
import { ROUTE } from '@lib/shared/route/route.constants';
import { STYLE } from '@lib/shared/style/style.constants';
import { USER } from '@lib/shared/user/user.constants';

export const ROOT_REDUCERS = {
  [APP]: APP_REDUCER,
  [AUTH]: AUTH_REDUCER,
  [BILLING]: BILLING_REDUCER,
  [COMMERCE]: COMMERCE_REDUCER,
  [GROUP]: GROUP_REDUCER,
  [LOCALE]: LOCALE_REDUCER,
  [NOTIFICATION]: NOTIFICATION_REDUCER,
  [ROUTE]: ROUTE_REDUCER,
  [STYLE]: STYLE_REDUCER,
  [USER]: USER_REDUCER,
} satisfies {
  [TKey in keyof RootStateModel]: ReducerModel<RootStateModel[TKey], RootActionsParamsModel[TKey]>;
};
