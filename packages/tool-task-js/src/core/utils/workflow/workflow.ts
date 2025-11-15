import { _workflow } from '@tool/task/core/utils/workflow/_workflow';
import {
  type WorkflowModel,
  type WorkflowParamsModel,
} from '@tool/task/core/utils/workflow/workflow.models';

export const workflow = <
  TParams = void,
  TResult = void,
  TSteps extends Array<unknown> = Array<unknown>,
>(
  params: WorkflowParamsModel<TParams, TResult, TSteps>,
): WorkflowModel<TParams, TResult> => _workflow(params);
