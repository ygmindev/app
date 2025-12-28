import { pubSubRun as params } from '@tool/task/core/workflows/pubSubRun/pubSubRun';
import { buildWorkflow } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow';

export const pubSubRun = buildWorkflow(params);
