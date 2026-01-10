import { containerPublish as params } from '@tool/task/container/workflows/containerPublish/containerPublish';
import { buildWorkflow } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow';

export const containerPublish = buildWorkflow(params);
