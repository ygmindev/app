import { NODE_DEV } from '@tool/task/node/tasks/nodeDev/nodeDev.constants';
import { type NodeDevParamsModel } from '@tool/task/node/tasks/nodeDev/nodeDev.models';
import { SERVER_DEV } from '@tool/task/node/workflows/serverDev/serverDev.constants';
import { type ServerDevParamsModel } from '@tool/task/node/workflows/serverDev/serverDev.models';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';

export const serverDev: BuildWorkflowParamsModel<ServerDevParamsModel, void, [NodeDevParamsModel]> =
  {
    name: SERVER_DEV,

    steps: ({ pathname }, context) => [
      {
        context,
        name: NODE_DEV,
        params: { pathname },
      },
    ],
  };
