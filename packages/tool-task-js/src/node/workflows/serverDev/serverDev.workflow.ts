import { serverDev as params } from '@tool/task/node/workflows/serverDev/serverDev';
import { buildWorkflow } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow';

export const serverDev = buildWorkflow(params);
