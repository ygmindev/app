import { AppLayout } from '@lib/frontend/app/layouts/AppLayout/AppLayout';
import { SIGN_IN } from '@lib/frontend/auth/auth.constants';
import { SignInPage } from '@lib/frontend/auth/pages/SignInPage/SignInPage';
import { NotFound } from '@lib/frontend/route/containers/NotFound/NotFound';
import type {
  GetRoutesModel,
  GetRoutesParamsModel,
} from '@lib/frontend/route/utils/getRoutes/getRoutes.models';
import { SettingsPage } from '@lib/frontend/settings/pages/SettingsPage/SettingsPage';
import { SETTINGS } from '@lib/shared/settings/settings.constants';

export const getRoutes = ({ appRoutes = [] }: GetRoutesParamsModel): GetRoutesModel => [
  {
    layout: <AppLayout />,
    pathname: '/',
    routes: [
      ...appRoutes,

      {
        element: <SettingsPage />,
        isProtected: true,
        pathname: SETTINGS,
      },

      {
        element: <NotFound />,
        pathname: '*',
      },
    ],
  },

  {
    element: <SignInPage />,
    pathname: SIGN_IN,
  },
];
