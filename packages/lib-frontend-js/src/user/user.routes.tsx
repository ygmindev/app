import { SignInPage } from '@lib/frontend/auth/pages/SignInPage/SignInPage';
import { BILLING } from '@lib/frontend/billing/billing.constants';
import { billingRoutes } from '@lib/frontend/billing/billing.routes';
import { LocaleSettingsPage } from '@lib/frontend/locale/pages/LocaleSettingsPage/LocaleSettingsPage';
import { ROUTE_NAVIGATION, ROUTE_TRANSITION } from '@lib/frontend/route/route.constants';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { AppearanceSettingsPage } from '@lib/frontend/settings/pages/AppearanceSettingsPage/AppearanceSettingsPage';
import { APPEARANCE, SETTINGS } from '@lib/frontend/settings/settings.constants';
import { NameFormPage } from '@lib/frontend/user/pages/NameFormPage/NameFormPage';
import { EMAIL, NAME, PHONE, PROFILE } from '@lib/frontend/user/user.constants';
import { SIGN_IN_METHOD } from '@lib/shared/auth/auth.constants';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { FORM_MODE } from '@lib/shared/data/data.constants';
import { LOCALE } from '@lib/shared/locale/locale.constants';
import { phoneNumber } from '@lib/shared/locale/utils/phoneNumber/phoneNumber';

export const userRoutes: Array<RouteModel> = [
  {
    icon: 'settings',
    isProtectable: true,
    // navigation: ROUTE_NAVIGATION.TAB,
    pathname: SETTINGS,
    previous: '/',
    routes: [
      {
        icon: 'person',
        // navigation: ROUTE_NAVIGATION.TAB,
        pathname: PROFILE,
        routes: [
          {
            description: ({ currentUser, t }) =>
              filterNil([currentUser?.first, currentUser?.last]).join(' ') || t('core:notSet'),
            element: <NameFormPage />,
            icon: 'id',
            pathname: NAME,
            title: ({ t }) => t('user:name'),
          },
          {
            description: ({ currentUser }) => currentUser?.email ?? '',
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
            description: ({ currentUser, t }) =>
              currentUser?.phone
                ? phoneNumber.format({
                    callingCode: currentUser.callingCode,
                    phone: currentUser.phone,
                  })
                : t('core:notSet'),
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
    transition: ROUTE_TRANSITION.MODAL,
  },
];
