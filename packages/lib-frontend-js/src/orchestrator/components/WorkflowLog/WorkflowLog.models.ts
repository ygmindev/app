import { type WorkflowPagePropsModel } from '@lib/frontend/orchestrator/pages/WorkflowPage/WorkflowPage.models';

export type WorkflowLogPropsModel = Pick<
  WorkflowPagePropsModel,
  'status' | 'workflow' | 'onStatusChange'
> & {
  id: string;
};
