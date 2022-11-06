import type { LocaleStateModel } from '@lib/frontend/locale/stores/reducer/reducer.models';
import type { NotificationStateModel } from '@lib/frontend/notification/stores/reducer/reducer.models';
import type { RoutingStateModel } from '@lib/frontend/routing/stores/reducer/reducer.models';
import type { StylingStateModel } from '@lib/frontend/styling/stores/reducer/reducer.models';
import type { UserStateModel } from '@lib/frontend/user/stores/reducer/reducer.models';
import type { LOCALE } from '@lib/shared/locale/locale.constants';
import type { NOTIFICATION } from '@lib/shared/notification/notification.constants';
import type { ROUTING } from '@lib/shared/routing/routing.constants';
import type { STYLING } from '@lib/shared/styling/styling.constants';
import type { USER } from '@lib/shared/user/user.constants';

export interface RootStateModel {
  [LOCALE]: LocaleStateModel;
  [NOTIFICATION]: NotificationStateModel;
  [ROUTING]: RoutingStateModel;
  [STYLING]: StylingStateModel;
  [USER]: UserStateModel;
}
