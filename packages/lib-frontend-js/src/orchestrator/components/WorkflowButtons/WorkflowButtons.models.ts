import { type WorkflowTitlePropsModel } from '@lib/frontend/orchestrator/components/WorkflowTitle/WorkflowTitle.models';

export type WorkflowButtonsPropsModel = Pick<
  WorkflowTitlePropsModel,
  'workflow' | 'status' | 'onStatusChange'
>;
