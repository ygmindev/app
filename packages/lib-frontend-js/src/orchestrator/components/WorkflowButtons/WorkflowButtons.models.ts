import { type WorkflowControlPropsModel } from '@lib/frontend/orchestrator/components/WorkflowControl/WorkflowControl.models';

export type WorkflowButtonsPropsModel = Pick<
  WorkflowControlPropsModel,
  'workflow' | 'status' | 'onStatusChange'
>;
