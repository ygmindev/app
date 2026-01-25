import { ADMIN } from '@lib/shared/admin/admin.constants';
import { HOME } from '@lib/frontend/core/core.constants';
import { RESOURCE } from '@lib/frontend/resource/resource.constants';
import { EVENTS, MEMBERS } from '@lib/frontend/kfn/constants';
import { KfnFooter } from '@lib/frontend/kfn/containers/KfnFooter/KfnFooter';
import { KfnHomePage } from '@lib/frontend/kfn/pages/KfnHomePage/KfnHomePage';
import { KfnMembersPage } from '@lib/frontend/kfn/pages/KfnMembersPage/KfnMembersPage';
import { KfnEventsPage } from '@lib/frontend/kfn/pages/KfnEventsPage/KfnEventsPage';

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
