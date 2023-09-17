import { TABS_TYPE } from '#lib-frontend/core/components/Tabs/Tabs.constants';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { COMPLETED, IN_PROGRESS, SUMMARY } from '#lib-frontend/core/core.constants';
import { FORM } from '#lib-frontend/data/data.constants';
import { FUNDING, QUOTES } from '#lib-frontend/funding/funding.constants';
import { FundingFormPage } from '#lib-frontend/funding/pages/FundingFormPage/FundingFormPage';
import { FundingInProgressPage } from '#lib-frontend/funding/pages/FundingInProgressPage/FundingInProgressPage';
import { FundingPage } from '#lib-frontend/funding/pages/FundingPage/FundingPage';
import { QuotesPage } from '#lib-frontend/funding/pages/QuotesPage/QuotesPage';
import { TabNavigator } from '#lib-frontend/route/components/TabNavigator/TabNavigator';
import { type RouteModel } from '#lib-frontend/route/route.models';
import { getRouteGroup } from '#lib-frontend/route/utils/getRouteGroup/getRouteGroup';
import { getRoutes } from '#lib-frontend/route/utils/getRoutes/getRoutes';

export const routes: Array<RouteModel> = getRoutes({
  appRoutes: [
    {
      isProtectable: true,
      layoutProps: { p: true },
      navigator: <TabNavigator type={TABS_TYPE.UNDERLINE} />,
      pathname: '/',
      routes: [
        {
          element: <Wrapper />,
          icon: 'document',
          pathname: SUMMARY,
          title: ({ t }) => t('core:summary'),
        },
        {
          element: <FundingPage />,
          icon: 'dollar',
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
              icon: 'checkCircle',
              pathname: COMPLETED,
              title: ({ t }) => t('core:completed'),
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
