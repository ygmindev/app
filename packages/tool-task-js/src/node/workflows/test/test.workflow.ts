import { test as params } from '@tool/task/node/workflows/test/test';
import { buildWorkflow } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow';

export const test = buildWorkflow(params);
