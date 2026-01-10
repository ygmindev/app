import { containerBuild as params } from '@tool/task/container/workflows/containerBuild/containerBuild';
import { buildWorkflow } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow';

export const containerBuild = buildWorkflow(params);
