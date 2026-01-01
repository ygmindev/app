import { type WorkflowPagePropsModel } from '@lib/frontend/orchestrator/pages/WorkflowPage/WorkflowPage.models';

export type WorkflowButtonsPropsModel = Pick<
  WorkflowPagePropsModel,
  'status' | 'workflow' | 'onStatusChange'
>;
