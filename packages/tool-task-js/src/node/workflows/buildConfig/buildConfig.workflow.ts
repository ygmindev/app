import { buildConfig as params } from '@tool/task/node/workflows/buildConfig/buildConfig';
import { buildWorkflow } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow';

export const buildConfig = buildWorkflow(params);
