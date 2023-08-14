import { ISSUER } from '#lib-frontend/issuer/issuer.constants';
import { ComparablesPage } from '#lib-frontend/issuer/pages/ComparablesPage/ComparablesPage';
import { IssuerPage } from '#lib-frontend/issuer/pages/IssuerPage/IssuerPage';
import { OffersPage } from '#lib-frontend/issuer/pages/OffersPage/OffersPage';
import { type RouteModel } from '#lib-frontend/route/route.models';
import { getRoutes } from '#lib-frontend/route/utils/getRoutes/getRoutes';

export const routes: Array<RouteModel> = getRoutes({
  appRoutes: [
    {
      element: <IssuerPage />,
      pathname: ISSUER,

      routes: [
        {
          element: <OffersPage />,
          pathname: 'offers',
        },

        {
          element: <ComparablesPage />,
          pathname: 'comparables',
        },
      ],
    },
  ],
});
