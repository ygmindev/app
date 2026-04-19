import { routesConfig as configBase } from '@lib/config/routes/routes.base';
import { ORCHESTRATOR, WORKFLOW } from '@lib/frontend/orchestrator/orchestrator.constants';
import { OrchestratorPage } from '@lib/frontend/orchestrator/pages/OrchestratorPage/OrchestratorPage';
import { WorkflowPage } from '@lib/frontend/orchestrator/pages/WorkflowPage/WorkflowPage';
import { ROUTE_TRANSITION } from '@lib/frontend/route/route.constants';

// import { resourceRoute } from '@lib/frontend/admin/pages/ResourcePage/ResourcePage.route';
// resourceRoute,

export const routesConfig = configBase.extend(() => ({
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
}));
