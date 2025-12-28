import { buildWorkflow } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow';
import { orchestratorRun as params } from '@tool/task/orchestrator/workflows/orchestratorRun/orchestratorRun';

export const orchestratorRun = buildWorkflow(params);
