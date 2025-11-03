import { type RoutesConfigModel } from '@lib/config/routes/routes.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { ORCHESTRATOR } from '@lib/frontend/orchestrator/orchestrator.constants';
import { OrchestratorPage } from '@lib/frontend/orchestrator/pages/OrchestratorPage/OrchestratorPage';
import { getRoutes } from '@lib/frontend/route/utils/getRoutes/getRoutes';

export const config = defineConfig<RoutesConfigModel>({
  params: () => ({
    routes: getRoutes([
      {
        element: <OrchestratorPage />,
        pathname: ORCHESTRATOR,
      },
    ]),
  }),
});

export default config;
