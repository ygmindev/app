import { type WorkflowControlPropsModel } from '@lib/frontend/orchestrator/components/WorkflowControl/WorkflowControl.models';

export type WorkflowLogPropsModel = Pick<
  WorkflowControlPropsModel,
  'workflow' | 'status' | 'onStatusChange'
> & {
  id: string;
};
