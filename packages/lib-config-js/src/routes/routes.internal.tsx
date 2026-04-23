import { routesConfig as configBase } from '@lib/config/routes/routes.base';
import { ADMIN } from '@lib/frontend/admin/admin.constants';
import { AppLayout } from '@lib/frontend/app/layouts/AppLayout/AppLayout';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ORCHESTRATOR, WORKFLOW } from '@lib/frontend/orchestrator/orchestrator.constants';
import { OrchestratorPage } from '@lib/frontend/orchestrator/pages/OrchestratorPage/OrchestratorPage';
import { WorkflowPage } from '@lib/frontend/orchestrator/pages/WorkflowPage/WorkflowPage';
import { ROUTE_TRANSITION } from '@lib/frontend/route/route.constants';
import { APP } from '@lib/shared/app/app.constants';

export const routesConfig = configBase.extend(() => ({
  routes: [
    {
      element: <AppLayout />,
      pathname: APP,
      routes: [
        {
          element: <Wrapper />,
          pathname: '/',
        },
        {
          pathname: ADMIN,
          routes: [
            {
              pathname: ORCHESTRATOR,
              routes: [
                {
                  element: <OrchestratorPage />,
                  pathname: '/',
                },
                {
                  element: <WorkflowPage />,
                  header: true,
                  pathname: `/${WORKFLOW}/:name`,
                  previous: ORCHESTRATOR,
                },
              ],
              transition: ROUTE_TRANSITION.SLIDE,
            },
          ],
        },
      ],
    },
  ],
}));

// import { resourceRoute } from '@lib/frontend/admin/pages/ResourcePage/ResourcePage.route';
// resourceRoute,

// import { getComponentDisplayName } from '@lib/frontend/core/utils/getComponentDisplayName/getComponentDisplayName';
// import { GETTING_STARTED } from '@lib/frontend/documentation/documentation.constants';
// import { GettingStartedPage } from '@lib/frontend/documentation/pages/GettingStartedPage/GettingStartedPage';
// import { Library } from '@lib/frontend/library/components/Library/Library';
// import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
// import { LIBRARY, LIBRARY_PROPS } from '@lib/frontend/library/library.constants';
// import { ROUTE_NAVIGATION } from '@lib/frontend/route/route.constants';
// import { getRoutes } from '@lib/frontend/route/utils/getRoutes/getRoutes';
// import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
// import { type ComponentType } from 'react';

// export const routes = getRoutes({
//   routes: [
//     {
//       icon: 'book',
//       isNavigatable: true,
//       navigation: ROUTE_NAVIGATION.TAB,
//       pathname: LIBRARY,
//       routes: LIBRARY_PROPS.map((props) => {
//         const id = (props.title =
//           props.title ?? getComponentDisplayName(props.Component as ComponentType));
//         return {
//           category: props.category,
//           element: <Library<unknown> {...(props as LibraryPropsModel<unknown>)} />,
//           isNavigatable: true,
//           pathname: trimPathname(id),
//           prerender: true,
//           title: id,
//         };
//       }),
//       title: ({ t }) => t('developer:library'),
//     },
//   ],
// });
