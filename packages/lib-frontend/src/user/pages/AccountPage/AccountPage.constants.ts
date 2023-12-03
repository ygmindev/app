import { PAYMENT } from '#lib-frontend/billing/billing.constants';
import { type RouteListPropsModel } from '#lib-frontend/route/components/RouteList/RouteList.models';
import { SETTINGS } from '#lib-frontend/settings/settings.constants';
import { PERSONAL } from '#lib-frontend/user/user.constants';
import { withId } from '#lib-shared/core/utils/withId/withId';
import { type WithIdResultModel } from '#lib-shared/core/utils/withId/withId.models';
import { ACCOUNT } from '#lib-shared/user/user.constants';

export const ACCOUNT_GROUPS = withId([
  {
    id: ACCOUNT,
    root: ACCOUNT,
    routes: [
      {
        icon: 'person',
        pathname: PERSONAL,
        title: ({ t }) => t('user:personal'),
      },

      {
        icon: 'dollar',
        pathname: PAYMENT,
        title: ({ t }) => t('billing:payment'),
      },

      {
        icon: 'settings',
        pathname: SETTINGS,
        title: ({ t }) => t('settings:preferences'),
      },
    ],
    title: ({ t }) => t('user:account'),
  },
]) satisfies WithIdResultModel<Array<RouteListPropsModel>>;
