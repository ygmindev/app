import { TABS_TYPE } from '#lib-frontend/core/components/Tabs/Tabs.constants';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { COMPLETED, HOME, IN_PROGRESS, SUMMARY } from '#lib-frontend/core/core.constants';
import { FORM } from '#lib-frontend/data/data.constants';
import { BORROW, FUNDING, QUOTES } from '#lib-frontend/funding/funding.constants';
import { BorrowInProgressPage } from '#lib-frontend/funding/pages/BorrowInProgressPage/BorrowInProgressPage';
import { BorrowPage } from '#lib-frontend/funding/pages/BorrowPage/BorrowPage';
import { FundingFormPage } from '#lib-frontend/funding/pages/FundingFormPage/FundingFormPage';
import { FundingSummaryPage } from '#lib-frontend/funding/pages/FundingSummaryPage/FundingSummaryPage';
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
      pathname: '/',
      routes: [
        {
          element: <Wrapper />,
          icon: 'home',
          pathname: HOME,
          title: ({ t }) => t('core:home'),
        },
        {
          icon: 'dollar',
          navigator: <TabNavigator type={TABS_TYPE.UNDERLINE} />,
          pathname: FUNDING,
          routes: [
            {
              element: <FundingSummaryPage />,
              icon: 'document',
              pathname: SUMMARY,
              title: ({ t }) => t('core:summary'),
            },
            {
              element: <BorrowPage />,
              icon: 'card',
              navigator: <TabNavigator type={TABS_TYPE.CONTAINED} />,
              pathname: BORROW,
              routes: [
                getRouteGroup({
                  element: <BorrowInProgressPage />,
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
                  icon: 'checkCircle',
                  pathname: COMPLETED,
                  title: ({ t }) => t('core:completed'),
                },
              ],
              title: ({ t }) => t('funding:borrow'),
            },
            {
              element: <FundingFormPage />,
              isFullScreen: true,
              isNavigatable: false,
              pathname: FORM,
              title: ({ t }) => t('core:form'),
            },
          ],
          title: ({ t }) => t('funding:funding'),
        },
      ],
    },
  ],
});
