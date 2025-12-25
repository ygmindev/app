import { type JOB_STATUS } from '@lib/model/orchestrator/Job/Job.constants';
import { type WorkflowModel } from '@lib/model/orchestrator/Workflow/Workflow.models';

export type WorkflowControlPropsModel = {
  status?: JOB_STATUS;

  workflow: Partial<WorkflowModel>;

  onStatusChange?(status: JOB_STATUS): void;
};
