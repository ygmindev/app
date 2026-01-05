import { HOME } from '@lib/frontend/core/core.constants';
import { ORCHESTRATOR, WORKFLOW } from '@lib/frontend/orchestrator/orchestrator.constants';
import { OrchestratorPage } from '@lib/frontend/orchestrator/pages/OrchestratorPage/OrchestratorPage';
import { WorkflowPage } from '@lib/frontend/orchestrator/pages/WorkflowPage/WorkflowPage';
import { ROUTE_TRANSITION } from '@lib/frontend/route/route.constants';
import { getRoutes } from '@lib/frontend/route/utils/getRoutes/getRoutes';
import { APP } from '@lib/shared/app/app.constants';

export const routes = getRoutes([
  {
    pathname: ORCHESTRATOR,
    routes: [
      {
        element: <OrchestratorPage />,
        pathname: HOME,
      },
      {
        element: <WorkflowPage />,
        header: true,
        pathname: `/${WORKFLOW}/:name`,
        previous: `/${APP}/${ORCHESTRATOR}/${HOME}`,
      },
    ],
    transition: ROUTE_TRANSITION.SLIDE,
  },
]);
