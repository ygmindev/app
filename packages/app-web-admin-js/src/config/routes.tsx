import { ORCHESTRATOR } from '@lib/frontend/orchestrator/orchestrator.constants';
import { OrchestratorPage } from '@lib/frontend/orchestrator/pages/OrchestratorPage/OrchestratorPage';
import { getRoutes } from '@lib/frontend/route/utils/getRoutes/getRoutes';

export const routes = getRoutes([
  {
    element: <OrchestratorPage />,
    pathname: ORCHESTRATOR,
  },
]);
