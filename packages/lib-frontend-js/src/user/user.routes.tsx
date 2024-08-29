import { SignInPage } from '@lib/frontend/auth/pages/SignInPage/SignInPage';
import { BILLING } from '@lib/frontend/billing/billing.constants';
import { billingRoutes } from '@lib/frontend/billing/billing.routes';
import { ROUTE_NAVIGATION } from '@lib/frontend/route/route.constants';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { SETTINGS } from '@lib/frontend/settings/settings.constants';
import { settingsRoutes } from '@lib/frontend/settings/settings.routes';
import { NameFormPage } from '@lib/frontend/user/pages/NameFormPage/NameFormPage';
import { EMAIL, NAME, PERSONAL, PHONE } from '@lib/frontend/user/user.constants';
import { SIGN_IN_METHOD } from '@lib/shared/auth/auth.constants';
import { FORM_MODE } from '@lib/shared/data/data.constants';
import { ACCOUNT } from '@lib/shared/user/user.constants';

export const userRoutes: Array<RouteModel> = [
  {
    isProtectable: true,
    navigation: ROUTE_NAVIGATION.LIST,
    pathname: ACCOUNT,
    routes: [
      {
        icon: 'person',
        navigation: ROUTE_NAVIGATION.LIST,
        pathname: PERSONAL,
        routes: [
          {
            element: <NameFormPage />,
            icon: 'id',
            pathname: NAME,
            title: ({ t }) => t('user:name'),
          },
          {
            element: (
              <SignInPage
                method={SIGN_IN_METHOD.EMAIL}
                mode={FORM_MODE.UPDATE}
              />
            ),
            icon: 'email',
            pathname: EMAIL,
            title: ({ t }) => t('user:email'),
          },
          {
            element: (
              <SignInPage
                method={SIGN_IN_METHOD.PHONE}
                mode={FORM_MODE.UPDATE}
              />
            ),
            icon: 'phone',
            pathname: PHONE,
            title: ({ t }) => t('user:phone'),
          },
        ],
        title: ({ t }) => t('user:personal'),
      },

      {
        icon: 'dollar',
        namespaces: [BILLING],
        navigation: ROUTE_NAVIGATION.LIST,
        pathname: BILLING,
        routes: billingRoutes,
        title: ({ t }) => t('billing:billing'),
      },

      {
        icon: 'settings',
        navigation: ROUTE_NAVIGATION.LIST,
        pathname: SETTINGS,
        routes: settingsRoutes,
        title: ({ t }) => t('settings:settings'),
      },
    ],
    title: ({ t }) => t('user:account'),
  },
];
