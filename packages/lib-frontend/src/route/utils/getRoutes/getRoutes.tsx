import { AppLayout } from '@lib/frontend/app/layouts/AppLayout/AppLayout';
import { SIGN_IN } from '@lib/frontend/auth/auth.constants';
import { SIGN_IN_FORM_MODE } from '@lib/frontend/auth/containers/SignInForm/SignInForm.constants';
import { SignInPage } from '@lib/frontend/auth/pages/SignInPage/SignInPage';
import { BILLING, PAYMENT, PAYMENT_METHOD } from '@lib/frontend/billing/billing.constants';
import { PaymentMethodFormPage } from '@lib/frontend/billing/pages/PaymentMethodFormPage/PaymentMethodFormPage';
import { PaymentPage } from '@lib/frontend/billing/pages/PaymentPage/PaymentPage';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { REDIRECT } from '@lib/frontend/core/core.constants';
import { DEV } from '@lib/frontend/dev/dev.constants';
import { DevPage } from '@lib/frontend/dev/pages/DevPage/DevPage';
import { FORM } from '@lib/frontend/form/form.constants';
import { NotFoundPage } from '@lib/frontend/route/pages/NotFoundPage/NotFoundPage';
import type { RouteModel } from '@lib/frontend/route/route.models';
import type {
  GetRoutesModel,
  GetRoutesParamsModel,
} from '@lib/frontend/route/utils/getRoutes/getRoutes.models';
import { AccountPage } from '@lib/frontend/user/pages/AccountPage/AccountPage';
import { NameFormPage } from '@lib/frontend/user/pages/NameFormPage/NameFormPage';
import { PersonalPage } from '@lib/frontend/user/pages/PersonalPage/PersonalPage';
import { EMAIL, NAME, PERSONAL } from '@lib/frontend/user/user.constants';
import { AUTH } from '@lib/shared/auth/auth.constants';
import { CORE } from '@lib/shared/core/core.constants';
import { ROUTE } from '@lib/shared/route/route.constants';
import { STYLE } from '@lib/shared/style/style.constants';
import { ACCOUNT, USER } from '@lib/shared/user/user.constants';

export const getRoutes = ({ appRoutes = [] }: GetRoutesParamsModel): GetRoutesModel =>
  [
    {
      element: <AppLayout />,
      ns: [AUTH, CORE, STYLE],
      pathname: '/',
      routes: [
        ...appRoutes,

        {
          element: <AccountPage />,
          isProtectable: true,
          ns: [ACCOUNT, BILLING, USER],
          pathname: ACCOUNT,
          routes: [
            {
              element: <PersonalPage />,
              pathname: PERSONAL,
            },
            {
              element: <PaymentPage />,
              pathname: PAYMENT,
            },
          ],
        },

        {
          isProtectable: true,
          pathname: FORM,
          routes: [
            {
              header: { previous: `/${ACCOUNT}/${PERSONAL}` },
              ns: [USER],
              pathname: PERSONAL,
              routes: [
                {
                  element: <NameFormPage />,
                  ns: [USER],
                  pathname: NAME,
                  title: ({ t }) => t('user:labels.name'),
                },

                {
                  element: <SignInPage mode={SIGN_IN_FORM_MODE.UPDATE} />,
                  ns: [AUTH, USER],
                  pathname: EMAIL,
                  title: ({ t }) => t('user:labels.email'),
                },
              ],
            },

            {
              element: <PaymentMethodFormPage />,
              header: { previous: `/${ACCOUNT}/${PAYMENT_METHOD}` },
              ns: [BILLING],
              pathname: PAYMENT_METHOD,
            },
          ],
        },

        {
          element: <SignInPage mode={SIGN_IN_FORM_MODE.CREATE} />,
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
