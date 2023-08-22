import { TABS_TYPE } from '#lib-frontend/core/components/Tabs/Tabs.constants';
import { BORROW, ISSUER, LENDERS, QUOTES } from '#lib-frontend/issuer/issuer.constants';
import { QuotesPage } from '#lib-frontend/issuer/pages/QuotesPage/QuotesPage';
import { TabNavigator } from '#lib-frontend/route/components/TabNavigator/TabNavigator';
import { HOME, SUMMARY } from '#lib-frontend/route/route.constants';
import { type RouteModel } from '#lib-frontend/route/route.models';
import { getRoutes } from '#lib-frontend/route/utils/getRoutes/getRoutes';

export const routes: Array<RouteModel> = getRoutes({
  appRoutes: [
    {
      layoutProps: { p: true },
      navigator: <TabNavigator type={TABS_TYPE.BUTTON} />,
      ns: [ISSUER],
      pathname: ISSUER,
      routes: [
        {
          pathname: HOME,
          title: ({ t }) => t('route:home'),
        },
        {
          navigator: <TabNavigator type={TABS_TYPE.UNDERLINE} />,
          pathname: BORROW,
          routes: [
            {
              element: <QuotesPage />,
              pathname: SUMMARY,
              title: ({ t }) => t('route:summary'),
            },

            {
              element: <QuotesPage />,
              pathname: QUOTES,
              title: ({ t }) => t('issuer:quote_plural'),
            },

            {
              element: <QuotesPage />,
              pathname: LENDERS,
              title: ({ t }) => t('issuer:lender_plural'),
            },
          ],
          title: ({ t }) => t('issuer:borrow'),
        },
      ],
    },
  ],
});
