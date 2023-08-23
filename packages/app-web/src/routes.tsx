import { TABS_TYPE } from '#lib-frontend/core/components/Tabs/Tabs.constants';
import { COMPLETED, HOME, IN_PROGRESS, SUMMARY } from '#lib-frontend/core/core.constants';
import { BORROW, FUNDING } from '#lib-frontend/funding/funding.constants';
import { FundingInProgressPage } from '#lib-frontend/funding/pages/FundingInProgressPage/FundingInProgressPage';
import { QuotesPage } from '#lib-frontend/funding/pages/QuotesPage/QuotesPage';
import { TabNavigator } from '#lib-frontend/route/components/TabNavigator/TabNavigator';
import { type RouteModel } from '#lib-frontend/route/route.models';
import { getRoutes } from '#lib-frontend/route/utils/getRoutes/getRoutes';

export const routes: Array<RouteModel> = getRoutes({
  appRoutes: [
    {
      layoutProps: { p: true },
      navigator: <TabNavigator type={TABS_TYPE.BUTTON} />,
      ns: [FUNDING],
      pathname: FUNDING,
      routes: [
        {
          icon: 'home',
          pathname: HOME,
          title: ({ t }) => t('core:home'),
        },
        {
          icon: 'borrow',
          navigator: <TabNavigator type={TABS_TYPE.UNDERLINE} />,
          pathname: BORROW,
          routes: [
            {
              element: <QuotesPage />,
              pathname: SUMMARY,
              title: ({ t }) => t('core:summary'),
            },
            {
              navigator: <TabNavigator type={TABS_TYPE.CONTAINED} />,
              pathname: FUNDING,
              routes: [
                {
                  element: <FundingInProgressPage />,
                  icon: 'dotsCircle',
                  pathname: IN_PROGRESS,
                  title: ({ t }) => t('core:inProgress'),
                },

                {
                  element: <FundingInProgressPage />,
                  icon: 'checkCircle',
                  pathname: COMPLETED,
                  title: ({ t }) => t('core:completed'),
                },
              ],
              title: ({ t }) => t('funding:funding'),
            },
            // {
            //   element: <QuotesPage />,
            //   pathname: QUOTES,
            //   title: ({ t }) => t('funding:quote_plural'),
            // },

            // {
            //   element: <QuotesPage />,
            //   pathname: LENDERS,
            //   title: ({ t }) => t('funding:lender_plural'),
            // },
          ],
          title: ({ t }) => t('funding:borrow'),
        },
      ],
    },
  ],
});
