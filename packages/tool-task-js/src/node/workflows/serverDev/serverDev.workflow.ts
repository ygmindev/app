import { START } from '@tool/task/core/tasks/start/start.constants';
import { type StartParamsModel } from '@tool/task/core/tasks/start/start.models';
import { workflow } from '@tool/task/core/utils/workflow/workflow';
import { NODE_DEV } from '@tool/task/node/tasks/nodeDev/nodeDev.constants';
import { type ServerDevParamsModel } from '@tool/task/node/workflows/serverDev/serverDev.models';

export const serverDev = workflow<ServerDevParamsModel, void, [StartParamsModel]>({
  steps: (params, context) => [
    [START, { command: `run ${NODE_DEV} --pathname="packages/${context?.app}/src/index.ts"` }],
  ],
});
