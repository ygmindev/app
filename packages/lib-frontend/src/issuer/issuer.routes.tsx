import { BILLING } from '#lib-frontend/billing/billing.constants';
import { TABS_TYPE } from '#lib-frontend/core/components/Tabs/Tabs.constants';
import { ANALYTICS, COMPLETED, IN_PROGRESS } from '#lib-frontend/core/core.constants';
import { FORM } from '#lib-frontend/data/data.constants';
import { FUNDING, QUOTES } from '#lib-frontend/funding/funding.constants';
import { QuotesPage } from '#lib-frontend/funding/pages/QuotesPage/QuotesPage';
import { GroupFormPage } from '#lib-frontend/group/pages/GroupFormPage/GroupFormPage';
import { AnalyticsPage } from '#lib-frontend/issuer/pages/AnalyticsPage/AnalyticsPage';
import { FundingFormPage } from '#lib-frontend/issuer/pages/FundingFormPage/FundingFormPage';
import { FundingInProgressPage } from '#lib-frontend/issuer/pages/FundingInProgressPage/FundingInProgressPage';
import { FundingPage } from '#lib-frontend/issuer/pages/FundingPage/FundingPage';
import { IssuerPage } from '#lib-frontend/issuer/pages/IssuerPage/IssuerPage';
import { TabNavigator } from '#lib-frontend/route/components/TabNavigator/TabNavigator';
import { type RouteModel } from '#lib-frontend/route/route.models';
import { getRouteList } from '#lib-frontend/route/utils/getRouteList/getRouteList';
import { SETTINGS } from '#lib-frontend/settings/settings.constants';
import { GROUP_TYPE } from '#lib-shared/group/resources/Group/Group.constants';

export const issuerRoutes: Array<RouteModel> = [
  {
    element: <IssuerPage />,
    navigator: <TabNavigator type={TABS_TYPE.UNDERLINE} />,
    pathname: GROUP_TYPE.ISSUER,
    routes: [
      {
        element: <AnalyticsPage />,
        icon: 'analytics',
        pathname: ANALYTICS,
        title: ({ t }) => t('core:analytics'),
      },

      {
        element: <FundingPage />,
        icon: 'dollar',
        navigator: <TabNavigator type={TABS_TYPE.CONTAINED} />,
        pathname: FUNDING,
        routes: [
          getRouteList({
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
              {
                element: <FundingFormPage />,
                isFullScreen: true,
                pathname: FORM,
                title: ({ t }) => t('core:form'),
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

        title: ({ t }) => t('funding:funding'),
      },

      {
        element: <GroupFormPage />,
        icon: 'document',
        pathname: BILLING,
        title: ({ t }) => t('billing:billing'),
      },

      {
        element: <GroupFormPage />,
        icon: 'apps',
        pathname: 'apps',
        title: ({ t }) => t('apps:apps'),
      },

      {
        element: <GroupFormPage />,
        icon: 'preferences',
        pathname: SETTINGS,
        title: ({ t }) => t('settings:preferences'),
      },
    ],
    title: ({ t }) => t('funding:issuer'),
  },
];
