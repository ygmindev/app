import { type WorkflowPagePropsModel } from '@lib/frontend/orchestrator/pages/WorkflowPage/WorkflowPage.models';

export type WorkflowTitlePropsModel = Pick<
  WorkflowPagePropsModel,
  'status' | 'workflow' | 'onStatusChange'
>;
