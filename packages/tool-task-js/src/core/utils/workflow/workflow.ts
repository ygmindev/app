import { _workflow } from '@tool/task/core/utils/workflow/_workflow';
import {
  type WorkflowModel,
  type WorkflowParamsModel,
} from '@tool/task/core/utils/workflow/workflow.models';

export const workflow = <TResult = void, TParams = void>(
  params: WorkflowParamsModel<TResult, TParams>,
): WorkflowModel<TResult, TParams> => _workflow(params);
