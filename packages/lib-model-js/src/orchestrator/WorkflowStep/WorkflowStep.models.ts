import { type ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import { type WORKFLOW_STEP_TYPE } from '@lib/model/orchestrator/WorkflowStep/WorkflowStep.constants';

export type WorkflowStepModel<TParams = unknown, TResult = unknown> = {
  context?: ExecutionContextModel;

  description?: string;

  name: string;

  params?: TParams;

  type?: WORKFLOW_STEP_TYPE;
};
