import { BILLING } from '#lib-frontend/billing/billing.constants';
import { TABS_TYPE } from '#lib-frontend/core/components/Tabs/Tabs.constants';
import { ANALYTICS } from '#lib-frontend/core/core.constants';
import { FUNDING, QUOTE } from '#lib-frontend/funding/funding.constants';
import { TabNavigator } from '#lib-frontend/route/components/TabNavigator/TabNavigator';
import { type RouteModel } from '#lib-frontend/route/route.models';
import { getRouteGroup } from '#lib-frontend/route/utils/getRouteGroup/getRouteGroup';
import { SETTINGS } from '#lib-frontend/settings/settings.constants';
import { AnalyticsPage } from '#lib-frontend/underwriter/pages/AnalyticsPage/AnalyticsPage';
import { FundingDetailPage } from '#lib-frontend/underwriter/pages/FundingDetailPage/FundingDetailPage';
import { FundingPage } from '#lib-frontend/underwriter/pages/FundingPage/FundingPage';
import { QuoteFormPage } from '#lib-frontend/underwriter/pages/QuoteFormPage/QuoteFormPage';
import { UnderwriterPage } from '#lib-frontend/underwriter/pages/UnderwriterPage/UnderwriterPage';
import { GROUP_TYPE } from '#lib-shared/group/resources/Group/Group.constants';

export const underwriterRoutes: Array<RouteModel> = [
  {
    element: <UnderwriterPage />,
    navigator: <TabNavigator type={TABS_TYPE.UNDERLINE} />,
    pathname: GROUP_TYPE.UNDERWRITER,
    routes: [
      {
        element: <AnalyticsPage />,
        icon: 'analytics',
        pathname: ANALYTICS,
        title: ({ t }) => t('core:analytics'),
      },
      getRouteGroup({
        element: <FundingPage />,
        icon: 'dollar',
        pathname: FUNDING,
        routes: [
          {
            element: <FundingDetailPage />,
            pathname: ':fundingid',
            title: ({ t }) => t('funding:sendPricingQuote'),
          },
          {
            element: <QuoteFormPage />,
            pathname: QUOTE,
            title: ({ t }) => t('funding:sendPricingQuote'),
          },
        ],
        title: ({ t }) => t('funding:deal_plural'),
      }),
      {
        element: <FundingPage />,
        icon: 'document',
        pathname: BILLING,
        title: ({ t }) => t('billing:billing'),
      },
      {
        element: <FundingPage />,
        icon: 'apps',
        pathname: 'apps',
        title: ({ t }) => t('apps:apps'),
      },

      {
        element: <FundingPage />,
        icon: 'preferences',
        pathname: SETTINGS,
        title: ({ t }) => t('settings:preferences'),
      },
    ],
  },
];
