import { appDev as params } from '@tool/task/dev/workflows/appDev/appDev';
import { buildWorkflow } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow';

export const appDev = buildWorkflow(params);
