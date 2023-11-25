import { SignInPage } from '#lib-frontend/auth/pages/SignInPage/SignInPage';
import { PAYMENT, PAYMENT_METHOD } from '#lib-frontend/billing/billing.constants';
import { PaymentMethodFormPage } from '#lib-frontend/billing/pages/PaymentMethodFormPage/PaymentMethodFormPage';
import { PaymentPage } from '#lib-frontend/billing/pages/PaymentPage/PaymentPage';
import { TIMEZONE } from '#lib-frontend/locale/locale.constants';
import { TimezoneFormPage } from '#lib-frontend/locale/pages/TimezoneFormPage/TimezoneFormPage';
import { type RouteModel } from '#lib-frontend/route/route.models';
import { getRouteGroup } from '#lib-frontend/route/utils/getRouteGroup/getRouteGroup';
import { SettingsPage } from '#lib-frontend/settings/pages/SettingsPage/SettingsPage';
import { SETTINGS } from '#lib-frontend/settings/settings.constants';
import { BrightnessFormPage } from '#lib-frontend/style/pages/BrightnessFormPage/BrightnessFormPage';
import { AccountPage } from '#lib-frontend/user/pages/AccountPage/AccountPage';
import { NameFormPage } from '#lib-frontend/user/pages/NameFormPage/NameFormPage';
import { PersonalPage } from '#lib-frontend/user/pages/PersonalPage/PersonalPage';
import { EMAIL, NAME, PERSONAL, PHONE } from '#lib-frontend/user/user.constants';
import { SIGN_IN_METHOD } from '#lib-shared/auth/auth.constants';
import { FORM_MODE } from '#lib-shared/data/data.constants';
import { BRIGHTNESS } from '#lib-shared/style/style.constants';
import { ACCOUNT } from '#lib-shared/user/user.constants';

export const userRoutes: Array<RouteModel> = [
  getRouteGroup({
    element: <AccountPage />,
    header: { previous: '/' },
    isProtectable: true,
    pathname: ACCOUNT,
    routes: [
      getRouteGroup({
        element: <PersonalPage />,
        pathname: PERSONAL,
        routes: [
          {
            element: <NameFormPage />,
            pathname: NAME,
            title: ({ t }) => t('core:edit', { value: t('user:name') }),
          },
          {
            element: (
              <SignInPage
                method={SIGN_IN_METHOD.EMAIL}
                mode={FORM_MODE.UPDATE}
              />
            ),
            pathname: EMAIL,
            title: ({ t }) => t('core:edit', { value: t('user:email') }),
          },
          {
            element: (
              <SignInPage
                method={SIGN_IN_METHOD.PHONE}
                mode={FORM_MODE.UPDATE}
              />
            ),
            pathname: PHONE,
            title: ({ t }) => t('core:edit', { value: t('user:phone') }),
          },
        ],
        title: ({ t }) => t('user:personal'),
      }),

      getRouteGroup({
        element: <PaymentPage />,
        pathname: PAYMENT,
        routes: [
          {
            element: <PaymentMethodFormPage />,
            pathname: PAYMENT_METHOD,
            title: ({ t }) => t('core:new', { value: t('billing:paymentMethod') }),
          },
        ],
        title: ({ t }) => t('billing:payment'),
      }),

      getRouteGroup({
        element: <SettingsPage />,
        pathname: SETTINGS,
        routes: [
          {
            element: <BrightnessFormPage />,
            pathname: BRIGHTNESS,
            title: ({ t }) => t('settings:brightness'),
          },
          {
            element: <TimezoneFormPage />,
            pathname: TIMEZONE,
            title: ({ t }) => t('locale:timezone'),
          },
        ],
        title: ({ t }) => t('settings:preferences'),
      }),
    ],
    title: ({ t }) => t('user:account'),
  }),
];
