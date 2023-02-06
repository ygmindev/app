import type { RouteModel } from '@lib/frontend/route/route.models';
import { getRoutes } from '@lib/frontend/route/utils/getRoutes/getRoutes';
import { LibraryPage } from '@lib/library/core/pages/LibraryPage/LibraryPage';

export const routes: Array<RouteModel> = getRoutes({
  appRoutes: [
    {
      element: <LibraryPage />,
      isIndex: true,
      pathname: '/:id',
    },
  ],
});