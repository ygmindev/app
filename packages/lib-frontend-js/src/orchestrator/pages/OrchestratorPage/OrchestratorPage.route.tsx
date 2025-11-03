import { ORCHESTRATOR } from '@lib/frontend/orchestrator/orchestrator.constants';
import { OrchestratorPage } from '@lib/frontend/orchestrator/pages/OrchestratorPage/OrchestratorPage';
import { type RouteModel } from '@lib/frontend/route/route.models';

export const orchestratorRoute: RouteModel = {
  element: <OrchestratorPage />,
  pathname: ORCHESTRATOR,
};
