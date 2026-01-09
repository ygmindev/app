import { buildWorkflow } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow';
import { webBuild as params } from '@tool/task/web/workflows/webBuild/webBuild';

export const webBuild = buildWorkflow(params);
