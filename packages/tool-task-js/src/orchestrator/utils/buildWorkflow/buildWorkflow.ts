import { _buildWorkflow } from '@tool/task/orchestrator/utils/buildWorkflow/_buildWorkflow';
import {
  type BuildWorkflowModel,
  type BuildWorkflowParamsModel,
} from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';

export const buildWorkflow = <
  TParams = void,
  TResult = void,
  TSteps extends Array<unknown> = Array<unknown>,
>(
  params: BuildWorkflowParamsModel<TParams, TResult, TSteps>,
): BuildWorkflowModel<TParams, TResult> => _buildWorkflow(params);
