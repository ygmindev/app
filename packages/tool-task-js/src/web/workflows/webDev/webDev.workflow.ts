import { buildWorkflow } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow';
import { webDev as params } from '@tool/task/web/workflows/webDev/webDev';

export const webDev = buildWorkflow(params);
