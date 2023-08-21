import { BORROW, FINANCERS, ISSUER, QUOTES } from '#lib-frontend/issuer/issuer.constants';
import { QuotesPage } from '#lib-frontend/issuer/pages/QuotesPage/QuotesPage';
import { ROUTE_NAVIGATION } from '#lib-frontend/route/route.constants';
import { type RouteModel } from '#lib-frontend/route/route.models';
import { getRoutes } from '#lib-frontend/route/utils/getRoutes/getRoutes';

export const routes: Array<RouteModel> = getRoutes({
  appRoutes: [
    {
      layoutProps: { p: true },
      navigation: ROUTE_NAVIGATION.TAB,
      ns: [ISSUER],
      pathname: ISSUER,
      routes: [
        {
          navigation: ROUTE_NAVIGATION.TAB,
          pathname: BORROW,
          routes: [
            {
              element: <QuotesPage />,
              pathname: QUOTES,
              title: ({ t }) => t('issuer:quote_plural'),
            },

            {
              element: <QuotesPage />,
              pathname: FINANCERS,
              title: ({ t }) => t('issuer:financer_plural'),
            },
          ],
          title: ({ t }) => t('issuer:borrow'),
        },
      ],
    },
  ],
});
