import { HOME } from '@lib/frontend/core/core.constants';
import { EVENTS, MEMBERS } from '@lib/frontend/kfn/constants';
import { KfnFooter } from '@lib/frontend/kfn/containers/KfnFooter/KfnFooter';
import { KfnEventsPage } from '@lib/frontend/kfn/pages/KfnEventsPage/KfnEventsPage';
import { KfnHomePage } from '@lib/frontend/kfn/pages/KfnHomePage/KfnHomePage';
import { KfnMembersPage } from '@lib/frontend/kfn/pages/KfnMembersPage/KfnMembersPage';
import { getRoutes } from '@lib/frontend/route/utils/getRoutes/getRoutes';

export const routes = getRoutes({
  footerElement: <KfnFooter />,

  routes: [
    {
      element: <KfnHomePage />,
      pathname: HOME,
    },

    {
      element: <KfnMembersPage />,
      icon: 'people',
      isNavigatable: true,
      pathname: MEMBERS,
    },

    {
      element: <KfnEventsPage />,
      icon: 'calendar',
      isNavigatable: true,
      pathname: EVENTS,
    },
  ],
});
