import type { LocaleStateModel } from '@lib/frontend/locale/stores/localeReducer.models';
import type { NotificationStateModel } from '@lib/frontend/notification/stores/reducer/reducer.models';
import type { StylingStateModel } from '@lib/frontend/styling/stores/reducer/reducer.models';
import type { UserStateModel } from '@lib/frontend/user/stores/reducer/reducer.models';
import type { LOCALE } from '@lib/shared/locale/locale.constants';
import type { NOTIFICATION } from '@lib/shared/notification/notification.constants';
import type { STYLING } from '@lib/shared/styling/styling.constants';
import type { USER } from '@lib/shared/user/user.constants';

export interface RootStateModel {
  [LOCALE]: LocaleStateModel;
  [NOTIFICATION]: NotificationStateModel;
  [STYLING]: StylingStateModel;
  [USER]: UserStateModel;
}
