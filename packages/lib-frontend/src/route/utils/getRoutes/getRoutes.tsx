import { AppLayout } from '#lib-frontend/app/layouts/AppLayout/AppLayout';
import { SIGN_IN } from '#lib-frontend/auth/auth.constants';
import { OAuthRedirectPage } from '#lib-frontend/auth/pages/OAuthRedirectPage/OAuthRedirectPage';
import { SignInPage } from '#lib-frontend/auth/pages/SignInPage/SignInPage';
import { BILLING, PAYMENT, PAYMENT_METHOD } from '#lib-frontend/billing/billing.constants';
import { PaymentMethodFormPage } from '#lib-frontend/billing/pages/PaymentMethodFormPage/PaymentMethodFormPage';
import { PaymentPage } from '#lib-frontend/billing/pages/PaymentPage/PaymentPage';
import { REDIRECT } from '#lib-frontend/core/core.constants';
import { DEV } from '#lib-frontend/dev/dev.constants';
import { DevPage } from '#lib-frontend/dev/pages/DevPage/DevPage';
import { PingPage } from '#lib-frontend/http/pages/PingPage/PingPage';
import { TIMEZONE } from '#lib-frontend/locale/locale.constants';
import { TimezoneFormPage } from '#lib-frontend/locale/pages/TimezoneFormPage/TimezoneFormPage';
import { NotFoundPage } from '#lib-frontend/route/pages/NotFoundPage/NotFoundPage';
import { ROUTE_TRANSITION } from '#lib-frontend/route/route.constants';
import { type RouteModel } from '#lib-frontend/route/route.models';
import { getRouteGroup } from '#lib-frontend/route/utils/getRouteGroup/getRouteGroup';
import {
  type GetRoutesModel,
  type GetRoutesParamsModel,
} from '#lib-frontend/route/utils/getRoutes/getRoutes.models';
import { SettingsPage } from '#lib-frontend/settings/pages/SettingsPage/SettingsPage';
import { SETTINGS } from '#lib-frontend/settings/settings.constants';
import { BrightnessFormPage } from '#lib-frontend/style/pages/BrightnessFormPage/BrightnessFormPage';
import { ReportPage } from '#lib-frontend/test/pages/ReportPage/ReportPage';
import { SnapshotPage } from '#lib-frontend/test/pages/SnapshotPage/SnapshotPage';
import { REPORT } from '#lib-frontend/test/test.constants';
import { AccountPage } from '#lib-frontend/user/pages/AccountPage/AccountPage';
import { NameFormPage } from '#lib-frontend/user/pages/NameFormPage/NameFormPage';
import { PersonalPage } from '#lib-frontend/user/pages/PersonalPage/PersonalPage';
import { EMAIL, NAME, PERSONAL, PHONE } from '#lib-frontend/user/user.constants';
import { AUTH, SIGN_IN_METHOD } from '#lib-shared/auth/auth.constants';
import { CORE } from '#lib-shared/core/core.constants';
import { FORM_MODE } from '#lib-shared/form/form.constants';
import { PING } from '#lib-shared/http/http.constants';
import { LOCALE } from '#lib-shared/locale/locale.constants';
import { BRIGHTNESS, STYLE } from '#lib-shared/style/style.constants';
import { TEST } from '#lib-shared/test/test.constants';
import { ACCOUNT, USER } from '#lib-shared/user/user.constants';

export const getRoutes = ({ appRoutes = [] }: GetRoutesParamsModel): GetRoutesModel =>
  [
    {
      element: <PingPage />,
      pathname: PING,
    },

    {
      element: <AppLayout />,
      isRoot: true,
      ns: [AUTH, CORE, STYLE, USER],
      pathname: '/',
      routes: [
        ...appRoutes,

        getRouteGroup({
          element: <AccountPage />,
          header: { previous: '/' },
          isProtectable: true,
          ns: [AUTH, BILLING, SETTINGS, USER, LOCALE],
          pathname: ACCOUNT,
          routes: [
            getRouteGroup({
              element: <PersonalPage />,
              ns: [AUTH, USER],
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
              ns: [BILLING],
              pathname: PAYMENT,
              routes: [
                {
                  element: <PaymentMethodFormPage />,
                  pathname: PAYMENT_METHOD,
                  title: ({ t }) => t('core:add', { value: t('billing:paymentMethod') }),
                },
              ],
              title: ({ t }) => t('billing:payment'),
            }),

            getRouteGroup({
              element: <SettingsPage />,
              ns: [SETTINGS, LOCALE],
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
              title: ({ t }) => t('settings:settings'),
            }),
          ],
          title: ({ t }) => t('user:account'),
        }),

        {
          element: <SignInPage mode={FORM_MODE.NEW} />,
          ns: [AUTH],
          pathname: SIGN_IN,
        },

        {
          element: <OAuthRedirectPage />,
          ns: [AUTH],
          pathname: REDIRECT,
        },

        {
          element: <DevPage />,
          pathname: DEV,
        },

        {
          pathname: TEST,
          routes: [
            {
              pathname: REPORT,
              routes: [
                {
                  element: <ReportPage />,
                  pathname: '/',
                },
                {
                  element: <SnapshotPage />,
                  header: { previous: true },
                  pathname: ':id',
                  prerender: ['sign-in-works'],
                },
              ],
              transition: ROUTE_TRANSITION.SLIDE,
            },
          ],
        },

        {
          element: <NotFoundPage />,
          pathname: '*',
        },
      ],
    },
  ] as Array<RouteModel>;
