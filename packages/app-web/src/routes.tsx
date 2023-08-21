import { BORROW, FINANCERS, ISSUER, QUOTES } from '#lib-frontend/issuer/issuer.constants';
import { QuotesPage } from '#lib-frontend/issuer/pages/QuotesPage/QuotesPage';
import { TabNavigator } from '#lib-frontend/route/components/TabNavigator/TabNavigator';
import { HOME } from '#lib-frontend/route/route.constants';
import { type RouteModel } from '#lib-frontend/route/route.models';
import { getRoutes } from '#lib-frontend/route/utils/getRoutes/getRoutes';

export const routes: Array<RouteModel> = getRoutes({
  appRoutes: [
    {
      layoutProps: { p: true },
      navigator: <TabNavigator />,
      ns: [ISSUER],
      pathname: ISSUER,
      routes: [
        {
          pathname: HOME,
          title: ({ t }) => t('route:home'),
        },
        {
          navigator: <TabNavigator />,
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
