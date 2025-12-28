import { executeParallel as params } from '@tool/task/core/workflows/executeParallel/executeParallel';
import { buildWorkflow } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow';

export const executeParallel = buildWorkflow(params);
