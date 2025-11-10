import { workflow } from '@tool/task/core/utils/workflow/workflow';
import { NODE_DEV } from '@tool/task/node/tasks/nodeDev/nodeDev.constants';
import { type ServerDevParamsModel } from '@tool/task/node/workflows/serverDev/serverDev.models';

export const serverDev = workflow<ServerDevParamsModel>({
  steps: ({ app }) => [[NODE_DEV, { params: { entryFiles: `${app}/src/index` } }]],
});
