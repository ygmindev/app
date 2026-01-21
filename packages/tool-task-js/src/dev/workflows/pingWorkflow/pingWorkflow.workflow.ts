import { pingWorkflow as params } from '@tool/task/dev/workflows/pingWorkflow/pingWorkflow';
import { buildWorkflow } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow';

export const pingWorkflow = buildWorkflow(params);
