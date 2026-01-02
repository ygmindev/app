import { type WorkflowTitlePropsModel } from '@lib/frontend/orchestrator/components/WorkflowTitle/WorkflowTitle.models';
import { type ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import { type JobModel } from '@lib/model/orchestrator/Job/Job.models';

export type WorkflowButtonsPropsModel = Pick<WorkflowTitlePropsModel, 'status' | 'workflow'> & {
  onWorkflowStart?(params: Partial<JobModel>): void;
};

export type WorkflowButtonsRefModel = {
  start(params?: { context?: ExecutionContextModel; params?: unknown }): Promise<void>;
  stop(jobId: string): Promise<void>;
};
