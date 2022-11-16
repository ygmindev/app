import { configureStore } from '@lib/frontend/root/stores/configureStore/configureStore';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { NOTIFICATION } from '@lib/shared/notification/notification.constants';
import { ROUTING } from '@lib/shared/routing/routing.constants';
import { STYLING } from '@lib/shared/styling/styling.constants';
import { USER_FIXTURE } from '@lib/shared/user/resources/User/User.fixtures';
import { USER } from '@lib/shared/user/user.constants';

export const STORE_FIXTURE = configureStore({
  [LOCALE]: {},
  [NOTIFICATION]: {
    alerts: [],
  },
  [ROUTING]: {},
  [STYLING]: {
    theme: 'light',
  },
  [USER]: {
    currentUser: USER_FIXTURE,
  },
});
