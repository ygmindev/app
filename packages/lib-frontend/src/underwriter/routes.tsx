import { BILLING } from '#lib-frontend/billing/billing.constants';
import { TABS_TYPE } from '#lib-frontend/core/components/Tabs/Tabs.constants';
import { ANALYTICS } from '#lib-frontend/core/core.constants';
import { QUOTE } from '#lib-frontend/funding/funding.constants';
import { TabNavigator } from '#lib-frontend/route/components/TabNavigator/TabNavigator';
import { type RouteModel } from '#lib-frontend/route/route.models';
import { getRouteGroup } from '#lib-frontend/route/utils/getRouteGroup/getRouteGroup';
import { SETTINGS } from '#lib-frontend/settings/settings.constants';
import { UnderwriterAnalyticsPage } from '#lib-frontend/underwriter/pages/UnderwriterAnalyticsPage/UnderwriterAnalyticsPage';
import { UnderwriterDealsPage } from '#lib-frontend/underwriter/pages/UnderwriterDealsPage/UnderwriterDealsPage';
import { UnderwriterPage } from '#lib-frontend/underwriter/pages/UnderwriterPage/UnderwriterPage';
import { UnderwriterQuoteFormPage } from '#lib-frontend/underwriter/pages/UnderwriterQuoteFormPage/UnderwriterQuoteFormPage';
import { DEALS } from '#lib-frontend/underwriter/underwriter.constants';
import { GROUP_TYPE } from '#lib-shared/group/resources/Group/Group.constants';

export const underwriterRoutes: Array<RouteModel> = [
  {
    element: <UnderwriterPage />,
    navigator: <TabNavigator type={TABS_TYPE.UNDERLINE} />,
    pathname: GROUP_TYPE.UNDERWRITER,
    routes: [
      {
        element: <UnderwriterAnalyticsPage />,
        icon: 'analytics',
        pathname: ANALYTICS,
        title: ({ t }) => t('core:analytics'),
      },
      getRouteGroup({
        element: <UnderwriterDealsPage />,
        icon: 'dollar',
        pathname: DEALS,
        routes: [
          {
            element: <UnderwriterQuoteFormPage />,
            pathname: QUOTE,
            title: ({ t }) => t('funding:sendPricingQuote'),
          },
        ],
        title: ({ t }) => t('funding:deal_plural'),
      }),
      {
        element: <UnderwriterDealsPage />,
        icon: 'document',
        pathname: BILLING,
        title: ({ t }) => t('billing:billing'),
      },
      {
        element: <UnderwriterDealsPage />,
        icon: 'apps',
        pathname: 'apps',
        title: ({ t }) => t('apps:apps'),
      },

      {
        element: <UnderwriterDealsPage />,
        icon: 'preferences',
        pathname: SETTINGS,
        title: ({ t }) => t('settings:preferences'),
      },
    ],
  },
];
