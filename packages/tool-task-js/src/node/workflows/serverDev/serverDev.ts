import { START } from '@tool/task/core/tasks/start/start.constants';
import { type StartParamsModel } from '@tool/task/core/tasks/start/start.models';
import { NODE_DEV } from '@tool/task/node/tasks/nodeDev/nodeDev.constants';
import { SERVER_DEV } from '@tool/task/node/workflows/serverDev/serverDev.constants';
import { type ServerDevParamsModel } from '@tool/task/node/workflows/serverDev/serverDev.models';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';

export const serverDev: BuildWorkflowParamsModel<ServerDevParamsModel, void, [StartParamsModel]> = {
  name: SERVER_DEV,

  steps: (params, context) => [
    {
      name: START,
      params: {
        command: `run ${NODE_DEV} --app=${context?.app}`,
      },
    },
  ],
};
