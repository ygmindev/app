import { ping as params } from '@tool/task/dev/workflows/ping/ping';
import { buildWorkflow } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow';

export const ping = buildWorkflow(params);
