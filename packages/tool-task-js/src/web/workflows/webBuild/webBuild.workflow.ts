import { webBuild as params } from '@tool/task/node/workflows/webBuild/webBuild';
import { buildWorkflow } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow';

export const webBuild = buildWorkflow(params);
