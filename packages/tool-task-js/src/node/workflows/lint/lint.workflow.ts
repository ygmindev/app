import { lint as params } from '@tool/task/node/workflows/lint/lint';
import { buildWorkflow } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow';

export const lint = buildWorkflow(params);
