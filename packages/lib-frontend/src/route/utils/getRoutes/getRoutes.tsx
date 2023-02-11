import { AppLayout } from '@lib/frontend/app/layouts/AppLayout/AppLayout';
import { SIGN_IN } from '@lib/frontend/auth/auth.constants';
import { SignInPage } from '@lib/frontend/auth/pages/SignInPage/SignInPage';
import { DEV } from '@lib/frontend/dev/dev.constants';
import { DevPage } from '@lib/frontend/dev/pages/DevPage/DevPage';
import { NotFound } from '@lib/frontend/route/containers/NotFound/NotFound';
import type {
  GetRoutesModel,
  GetRoutesParamsModel,
} from '@lib/frontend/route/utils/getRoutes/getRoutes.models';
import { SettingsPage } from '@lib/frontend/settings/pages/SettingsPage/SettingsPage';
import { SETTINGS } from '@lib/shared/settings/settings.constants';

export const getRoutes = ({ appRoutes = [] }: GetRoutesParamsModel): GetRoutesModel =>
  [
    {
      layout: <AppLayout />,
      pathname: '/',
      routes: [
        ...appRoutes,

        {
          element: <SettingsPage />,
          isProtectable: true,
          pathname: SETTINGS,
        },

        {
          // TODO: to
          element: <NotFound />,
          pathname: '*',
        },
      ],
    },

    {
      element: <SignInPage />,
      pathname: SIGN_IN,
    },

    process.env.NODE_ENV === 'development' && {
      element: <DevPage />,
      pathname: DEV,
    },
  ].filter(Boolean) as GetRoutesModel;
