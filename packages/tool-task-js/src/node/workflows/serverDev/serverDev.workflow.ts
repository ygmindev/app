import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { START } from '@tool/task/core/tasks/start/start.constants';
import { type StartParamsModel } from '@tool/task/core/tasks/start/start.models';
import { workflow } from '@tool/task/core/utils/workflow/workflow';
import { type WorkflowParamsModel } from '@tool/task/core/utils/workflow/workflow.models';
import { NODE_DEV } from '@tool/task/node/tasks/nodeDev/nodeDev.constants';
import { type ServerDevParamsModel } from '@tool/task/node/workflows/serverDev/serverDev.models';

export const params: WorkflowParamsModel<ServerDevParamsModel, void, [StartParamsModel]> = {
  steps: (params, context) => [
    {
      name: START,
      params: {
        command: `run ${NODE_DEV} --app=${context?.app} --pathname=${fromPackages(context?.app, 'src/index.ts')}`,
      },
    },
  ],
};

export const serverDev = workflow(params);
