import { PAYMENT } from '#lib-frontend/billing/billing.constants';
import { type RouteGroupModel } from '#lib-frontend/route/components/RouteGroup/RouteGroup.models';
import { SETTINGS } from '#lib-frontend/settings/settings.constants';
import { PERSONAL } from '#lib-frontend/user/user.constants';
import { withId } from '#lib-shared/core/utils/withId/withId';
import { ACCOUNT } from '#lib-shared/user/user.constants';

export const ACCOUNT_GROUPS: Array<RouteGroupModel> = withId([
  {
    id: ACCOUNT,
    label: ({ t }) => t('user:account'),
    options: [
      {
        icon: 'person',
        id: PERSONAL,
        label: ({ t }) => t('user:personal'),
      },

      {
        icon: 'dollar',
        id: PAYMENT,
        label: ({ t }) => t('billing:payment'),
      },

      {
        icon: 'settings',
        id: SETTINGS,
        label: ({ t }) => t('settings:settings'),
      },
    ],
  },
]);
