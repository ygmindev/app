import { containerRun as params } from '@tool/task/container/workflows/containerRun/containerRun';
import { buildWorkflow } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow';

export const containerRun = buildWorkflow(params);
