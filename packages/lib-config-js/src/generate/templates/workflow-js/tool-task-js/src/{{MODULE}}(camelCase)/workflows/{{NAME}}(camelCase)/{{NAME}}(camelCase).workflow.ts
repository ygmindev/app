import { {{NAME}}(camelCase) as params } from '@tool/task/{{MODULE}}(camelCase)/workflows/{{NAME}}(camelCase)/{{NAME}}(camelCase)';
import { buildWorkflow } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow';

export const {{NAME}}(camelCase) = buildWorkflow(params);
