import { AppHomePage } from '#lib-frontend/app/pages/AppHomePage/AppHomePage';
import { BILLING } from '#lib-frontend/billing/billing.constants';
import { TABS_TYPE } from '#lib-frontend/core/components/Tabs/Tabs.constants';
import { ANALYTICS, COMPLETED, IN_PROGRESS } from '#lib-frontend/core/core.constants';
import { FORM } from '#lib-frontend/data/data.constants';
import { FUNDING, QUOTES } from '#lib-frontend/funding/funding.constants';
import { QuotesPage } from '#lib-frontend/funding/pages/QuotesPage/QuotesPage';
import { GROUP } from '#lib-frontend/group/group.constants';
import { GroupFormPage } from '#lib-frontend/group/pages/GroupFormPage/GroupFormPage';
import { GroupPage } from '#lib-frontend/group/pages/GroupPage/GroupPage';
import { IssuerAnalyticsPage } from '#lib-frontend/issuer/pages/IssuerAnalyticsPage/IssuerAnalyticsPage';
import { IssuerFundingFormPage } from '#lib-frontend/issuer/pages/IssuerFundingFormPage/IssuerFundingFormPage';
import { IssuerFundingInProgressPage } from '#lib-frontend/issuer/pages/IssuerFundingInProgressPage/IssuerFundingInProgressPage';
import { IssuerFundingPage } from '#lib-frontend/issuer/pages/IssuerFundingPage/IssuerFundingPage';
import { IssuerPage } from '#lib-frontend/issuer/pages/IssuerPage/IssuerPage';
import { TabNavigator } from '#lib-frontend/route/components/TabNavigator/TabNavigator';
import { type RouteModel } from '#lib-frontend/route/route.models';
import { getRouteGroup } from '#lib-frontend/route/utils/getRouteGroup/getRouteGroup';
import { getRoutes } from '#lib-frontend/route/utils/getRoutes/getRoutes';
import { SETTINGS } from '#lib-frontend/settings/settings.constants';
import { GROUP_TYPE } from '#lib-shared/group/resources/Group/Group.constants';

export const routes: Array<RouteModel> = getRoutes({
  appRoutes: [
    {
      element: <AppHomePage />,
      isProtectable: true,
      pathname: '/',
    },

    {
      isProtectable: true,
      pathname: GROUP,
      routes: [
        {
          element: <GroupFormPage />,
          pathname: FORM,
        },

        {
          element: <GroupPage />,
          pathname: ':id',
          routes: [
            {
              element: <IssuerPage />,
              navigator: <TabNavigator type={TABS_TYPE.UNDERLINE} />,
              pathname: GROUP_TYPE.ISSUER,
              routes: [
                {
                  element: <IssuerAnalyticsPage />,
                  icon: 'analytics',
                  pathname: ANALYTICS,
                  title: ({ t }) => t('core:analytics'),
                },
                {
                  element: <IssuerFundingPage />,
                  icon: 'dollar',
                  navigator: <TabNavigator type={TABS_TYPE.CONTAINED} />,
                  pathname: FUNDING,
                  routes: [
                    getRouteGroup({
                      element: <IssuerFundingInProgressPage />,
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
                      element: <IssuerFundingFormPage />,
                      isFullScreen: true,
                      isNavigatable: false,
                      pathname: FORM,
                      title: ({ t }) => t('core:form'),
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
          ],
        },
      ],
    },
  ],
});
