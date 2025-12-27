import { type ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import { type WorkflowModel } from '@lib/model/orchestrator/Workflow/Workflow.models';
import { type WorkflowStepModel } from '@lib/model/orchestrator/WorkflowStep/WorkflowStep.models';
import { type ResourceModel } from '@lib/model/resource/Resource/Resource.models';

export type _BuildWorkflowParamsModel<
  TParams = void,
  TResult = void,
  TSteps extends Array<unknown> = Array<unknown>,
> = Omit<WorkflowModel<TParams, TResult>, keyof ResourceModel | 'steps'> & {
  steps(
    params: TParams,
    context?: ExecutionContextModel,
  ): Array<WorkflowStepModel<TSteps[number], unknown>>;
};

export type _BuildWorkflowModel<TParams = void, TResult = void> = (
  params: TParams,
  context?: ExecutionContextModel,
) => Promise<TResult>;
