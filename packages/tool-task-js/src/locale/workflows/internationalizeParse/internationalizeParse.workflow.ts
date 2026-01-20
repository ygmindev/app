import { internationalizeParse as params } from '@tool/task/locale/workflows/internationalizeParse/internationalizeParse';
import { buildWorkflow } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow';

export const internationalizeParse = buildWorkflow(params);
