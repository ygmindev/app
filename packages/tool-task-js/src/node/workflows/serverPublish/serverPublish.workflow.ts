import { serverPublish as params } from '@tool/task/node/workflows/serverPublish/serverPublish';
import { buildWorkflow } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow';

export const serverPublish = buildWorkflow(params);
