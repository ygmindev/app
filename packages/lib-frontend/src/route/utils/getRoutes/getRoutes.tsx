import { AppLayout } from '@lib/frontend/app/layouts/AppLayout/AppLayout';
import { SIGN_IN } from '@lib/frontend/auth/auth.constants';
import { SignInPage } from '@lib/frontend/auth/pages/SignInPage/SignInPage';
import { CenterLayout } from '@lib/frontend/core/layouts/CenterLayout/CenterLayout';
import { DEV } from '@lib/frontend/dev/dev.constants';
import { DevPage } from '@lib/frontend/dev/pages/DevPage/DevPage';
import { FORM } from '@lib/frontend/form/form.constants';
import { NotFoundPage } from '@lib/frontend/route/pages/NotFoundPage/NotFoundPage';
import type { RouteModel } from '@lib/frontend/route/route.models';
import type {
  GetRoutesModel,
  GetRoutesParamsModel,
} from '@lib/frontend/route/utils/getRoutes/getRoutes.models';
import { SettingsPage } from '@lib/frontend/settings/pages/SettingsPage/SettingsPage';
import { AccountPage } from '@lib/frontend/user/pages/AccountPage/AccountPage';
import { NameFormPage } from '@lib/frontend/user/pages/NameFormPage/NameFormPage';
import { ACCOUNT, NAME } from '@lib/frontend/user/user.constants';
import { AUTH } from '@lib/shared/auth/auth.constants';
import { CORE } from '@lib/shared/core/core.constants';
import { ROUTE } from '@lib/shared/route/route.constants';
import { SETTINGS } from '@lib/shared/settings/settings.constants';
import { USER } from '@lib/shared/user/user.constants';

export const getRoutes = ({ appRoutes = [] }: GetRoutesParamsModel): GetRoutesModel =>
  [
    {
      element: <AppLayout />,
      ns: [CORE],
      pathname: '/',
      routes: [
        ...appRoutes,

        {
          element: <SettingsPage />,
          isProtectable: true,
          ns: [SETTINGS],
          pathname: SETTINGS,
          routes: [
            {
              element: <AccountPage />,
              ns: [USER],
              pathname: ACCOUNT,
            },
          ],
        },

        {
          isProtectable: true,
          pathname: FORM,
          routes: [
            {
              header: { previous: `/${SETTINGS}/${ACCOUNT}` },
              ns: [USER],
              pathname: ACCOUNT,
              routes: [
                {
                  element: <NameFormPage />,
                  layout: <CenterLayout />,
                  ns: [USER],
                  pathname: NAME,
                  title: ({ t }) => t('user:labels.name'),
                },
              ],
            },
          ],
        },

        {
          element: <SignInPage />,
          ns: [AUTH],
          pathname: SIGN_IN,
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
