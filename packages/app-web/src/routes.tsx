import { TABS_TYPE } from '#lib-frontend/core/components/Tabs/Tabs.constants';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { COMPLETED, HOME, IN_PROGRESS, SUMMARY } from '#lib-frontend/core/core.constants';
import { BORROW, FUNDING, QUOTES } from '#lib-frontend/funding/funding.constants';
import { FundingInProgressPage } from '#lib-frontend/funding/pages/FundingInProgressPage/FundingInProgressPage';
import { QuotesPage } from '#lib-frontend/funding/pages/QuotesPage/QuotesPage';
import { TabNavigator } from '#lib-frontend/route/components/TabNavigator/TabNavigator';
import { type RouteModel } from '#lib-frontend/route/route.models';
import { getRouteGroup } from '#lib-frontend/route/utils/getRouteGroup/getRouteGroup';
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
          icon: 'card',
          navigator: <TabNavigator type={TABS_TYPE.UNDERLINE} />,
          pathname: BORROW,
          routes: [
            {
              element: <Wrapper />,
              pathname: SUMMARY,
              title: ({ t }) => t('core:summary'),
            },
            {
              navigator: <TabNavigator type={TABS_TYPE.CONTAINED} />,
              pathname: FUNDING,
              routes: [
                getRouteGroup({
                  element: <FundingInProgressPage />,
                  icon: 'dotsCircle',
                  pathname: IN_PROGRESS,
                  routes: [
                    {
                      element: <QuotesPage />,
                      isFullScreen: true,
                      pathname: QUOTES,
                      title: ({ t }) => t('core:quotes'),
                    },
                  ],
                  title: ({ t }) => t('core:inProgress'),
                }),
                {
                  element: <Wrapper />,
                  icon: 'checkCircle',
                  pathname: COMPLETED,
                  title: ({ t }) => t('core:completed'),
                },
              ],
              title: ({ t }) => t('funding:funding'),
            },
          ],
          title: ({ t }) => t('funding:borrow'),
        },
      ],
    },
  ],
});
