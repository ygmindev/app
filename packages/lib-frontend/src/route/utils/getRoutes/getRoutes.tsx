import { AppLayout } from '#lib-frontend/app/layouts/AppLayout/AppLayout';
import { SIGN_IN } from '#lib-frontend/auth/auth.constants';
import { SignInPage } from '#lib-frontend/auth/pages/SignInPage/SignInPage';
import { BILLING, PAYMENT, PAYMENT_METHOD } from '#lib-frontend/billing/billing.constants';
import { PaymentMethodFormPage } from '#lib-frontend/billing/pages/PaymentMethodFormPage/PaymentMethodFormPage';
import { PaymentPage } from '#lib-frontend/billing/pages/PaymentPage/PaymentPage';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { REDIRECT } from '#lib-frontend/core/core.constants';
import { DEV } from '#lib-frontend/dev/dev.constants';
import { DevPage } from '#lib-frontend/dev/pages/DevPage/DevPage';
import { FORM } from '#lib-frontend/form/form.constants';
import { TIMEZONE } from '#lib-frontend/locale/locale.constants';
import { TimezoneFormPage } from '#lib-frontend/locale/pages/TimezoneFormPage/TimezoneFormPage';
import { NotFoundPage } from '#lib-frontend/route/pages/NotFoundPage/NotFoundPage';
import { ROUTE_TRANSITION } from '#lib-frontend/route/route.constants';
import type { RouteModel } from '#lib-frontend/route/route.models';
import type {
  GetRoutesModel,
  GetRoutesParamsModel,
} from '#lib-frontend/route/utils/getRoutes/getRoutes.models';
import { SettingsPage } from '#lib-frontend/settings/pages/SettingsPage/SettingsPage';
import { SETTINGS } from '#lib-frontend/settings/settings.constants';
import { BrightnessFormPage } from '#lib-frontend/style/pages/BrightnessFormPage/BrightnessFormPage';
import { AccountPage } from '#lib-frontend/user/pages/AccountPage/AccountPage';
import { NameFormPage } from '#lib-frontend/user/pages/NameFormPage/NameFormPage';
import { PersonalPage } from '#lib-frontend/user/pages/PersonalPage/PersonalPage';
import { EMAIL, NAME, PERSONAL, PHONE } from '#lib-frontend/user/user.constants';
import { AUTH, SIGN_IN_METHOD, SIGN_IN_MODE } from '#lib-shared/auth/auth.constants';
import { CORE } from '#lib-shared/core/core.constants';
import { LOCALE } from '#lib-shared/locale/locale.constants';
import { ROUTE } from '#lib-shared/route/route.constants';
import { BRIGHTNESS, STYLE } from '#lib-shared/style/style.constants';
import { ACCOUNT, USER } from '#lib-shared/user/user.constants';

export const getRoutes = ({ appRoutes = [] }: GetRoutesParamsModel): GetRoutesModel =>
  [
    {
      element: <AppLayout />,
      ns: [AUTH, CORE, STYLE, USER],
      pathname: '/',
      routes: [
        ...appRoutes,

        {
          isProtectable: true,
          ns: [ACCOUNT, BILLING, SETTINGS, USER],
          pathname: ACCOUNT,
          routes: [
            {
              element: <AccountPage />,
              pathname: '/',
            },
            {
              element: <PersonalPage />,
              header: { previous: ACCOUNT },
              isRootsVisible: true,
              pathname: PERSONAL,
              title: ({ t }) => t('user:labels.personal'),
            },
            {
              element: <PaymentPage />,
              header: { previous: ACCOUNT },
              pathname: PAYMENT,
              title: ({ t }) => t('billing:labels.payment'),
            },
            {
              element: <SettingsPage />,
              header: { previous: ACCOUNT },
              ns: [SETTINGS, LOCALE],
              pathname: SETTINGS,
              title: ({ t }) => t('settings:labels.settings'),
            },
          ],
          title: ({ t }) => t('user:labels.account'),
          transition: ROUTE_TRANSITION.SLIDE,
        },

        {
          isProtectable: true,
          pathname: FORM,
          routes: [
            {
              header: { previous: `/${ACCOUNT}/${PERSONAL}` },
              ns: [USER],
              pathname: `/${ACCOUNT}/${PERSONAL}`,
              routes: [
                {
                  element: <NameFormPage />,
                  pathname: NAME,
                  title: ({ t }) => t('core:labels.edit', { value: t('user:labels.name') }),
                },

                {
                  element: (
                    <SignInPage
                      method={SIGN_IN_METHOD.EMAIL}
                      mode={SIGN_IN_MODE.UPDATE}
                    />
                  ),
                  ns: [AUTH],
                  pathname: EMAIL,
                  title: ({ t }) => t('core:labels.edit', { value: t('user:labels.email') }),
                },

                {
                  element: (
                    <SignInPage
                      method={SIGN_IN_METHOD.PHONE}
                      mode={SIGN_IN_MODE.UPDATE}
                    />
                  ),
                  ns: [AUTH, USER],
                  pathname: PHONE,
                  title: ({ t }) => t('core:labels.edit', { value: t('user:labels.phone') }),
                },
              ],
            },

            {
              header: { previous: `/${ACCOUNT}/${SETTINGS}` },
              ns: [USER, SETTINGS],
              pathname: `/${ACCOUNT}/${SETTINGS}`,
              routes: [
                {
                  element: <BrightnessFormPage />,
                  pathname: BRIGHTNESS,
                  title: ({ t }) => t('settings:labels.brightness'),
                },
                {
                  element: <TimezoneFormPage />,
                  pathname: TIMEZONE,
                  title: ({ t }) => t('locale:labels.timezone'),
                },
              ],
            },

            {
              element: <PaymentMethodFormPage />,
              header: { previous: `/${ACCOUNT}/${PAYMENT}` },
              ns: [BILLING],
              pathname: PAYMENT_METHOD,
              title: ({ t }) => t('core:labels.add', { value: t('billing:labels.paymentMethod') }),
            },
          ],
        },

        {
          element: <SignInPage mode={SIGN_IN_MODE.SIGN_IN} />,
          ns: [AUTH],
          pathname: SIGN_IN,
        },

        {
          element: (
            <Wrapper>
              <Text>redirect</Text>
            </Wrapper>
          ),
          pathname: REDIRECT,
        },

        {
          element: <NotFoundPage />,
          ns: [ROUTE],
          pathname: '*',
        },
      ],
    },

    process.env.NODE_ENV === 'development' && {
      element: <DevPage />,
      pathname: DEV,
    },
  ] as Array<RouteModel>;
