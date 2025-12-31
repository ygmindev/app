import { type WorkflowTitlePropsModel } from '@lib/frontend/orchestrator/components/WorkflowTitle/WorkflowTitle.models';

export type WorkflowLogPropsModel = Pick<
  WorkflowTitlePropsModel,
  'workflow' | 'status' | 'onStatusChange'
> & {
  id: string;
};
