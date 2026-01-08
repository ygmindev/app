import { serverBuild as params } from '@tool/task/node/workflows/serverBuild/serverBuild';
import { buildWorkflow } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow';

export const serverBuild = buildWorkflow(params);
