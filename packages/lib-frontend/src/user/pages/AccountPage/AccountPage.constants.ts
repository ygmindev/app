import { PAYMENT } from '#lib-frontend/billing/billing.constants';
import { type RouteGroupPropsModel } from '#lib-frontend/route/components/RouteGroup/RouteGroup.models';
import { SETTINGS } from '#lib-frontend/settings/settings.constants';
import { PERSONAL } from '#lib-frontend/user/user.constants';
import { withId } from '#lib-shared/core/utils/withId/withId';
import { type WithIdResultModel } from '#lib-shared/core/utils/withId/withId.models';
import { ACCOUNT } from '#lib-shared/user/user.constants';

export const ACCOUNT_GROUPS = withId([
  {
    _id: ACCOUNT,
    label: ({ t }) => t('user:account'),
    root: ACCOUNT,
    routes: [
      {
        _id: PERSONAL,
        icon: 'person',
        label: ({ t }) => t('user:personal'),
      },

      {
        _id: PAYMENT,
        icon: 'dollar',
        label: ({ t }) => t('billing:payment'),
      },

      {
        _id: SETTINGS,
        icon: 'settings',
        label: ({ t }) => t('settings:settings'),
      },
    ],
  },
]) satisfies WithIdResultModel<Array<RouteGroupPropsModel>>;
