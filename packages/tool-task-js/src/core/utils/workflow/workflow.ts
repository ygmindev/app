import { _workflow } from '@tool/task/core/utils/workflow/_workflow';
import {
  type WorkflowModel,
  type WorkflowParamsModel,
} from '@tool/task/core/utils/workflow/workflow.models';

export const workflow = <TParams = void, TResult = void>(
  params: WorkflowParamsModel<TParams, TResult>,
): WorkflowModel<TParams, TResult> => _workflow(params);
