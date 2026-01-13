import { BILLING } from '@lib/frontend/billing/billing.constants';
import { billingRoutes } from '@lib/frontend/billing/billing.routes';
import { LocaleSettingsPage } from '@lib/frontend/locale/pages/LocaleSettingsPage/LocaleSettingsPage';
import { ROUTE_NAVIGATION } from '@lib/frontend/route/route.constants';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { AppearanceSettingsPage } from '@lib/frontend/settings/pages/AppearanceSettingsPage/AppearanceSettingsPage';
import { APPEARANCE, SETTINGS } from '@lib/frontend/settings/settings.constants';
import { NameFormPage } from '@lib/frontend/user/pages/NameFormPage/NameFormPage';
import { PROFILE } from '@lib/frontend/user/user.constants';
import { LOCALE } from '@lib/shared/locale/locale.constants';

export const settingRoutes: Array<RouteModel> = [
  {
    icon: 'settings',

    isProtectable: true,

    navigation: ROUTE_NAVIGATION.TAB,

    pathname: `#${SETTINGS}`,

    routes: [
      {
        element: <NameFormPage />,
        icon: 'person',
        pathname: PROFILE,
        title: ({ t }) => t('user:profile'),
      },

      {
        element: <AppearanceSettingsPage />,
        icon: 'eye',
        pathname: APPEARANCE,
        title: ({ t }) => t('settings:appearance'),
      },

      {
        element: <LocaleSettingsPage />,
        icon: 'globe',
        pathname: LOCALE,
        title: ({ t }) => t('locale:location'),
      },
      {
        icon: 'dollar',
        namespaces: [BILLING],
        navigation: ROUTE_NAVIGATION.TAB,
        pathname: BILLING,
        routes: billingRoutes,
        title: ({ t }) => t('billing:billing'),
      },
    ],

    title: ({ t }) => t('settings:settings'),
  },
];
