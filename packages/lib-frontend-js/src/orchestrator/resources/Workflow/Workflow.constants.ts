import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { WORKFLOW_RESOURCE_NAME } from '@lib/model/orchestrator/Workflow/Workflow.constants';
import { type WorkflowModel } from '@lib/model/orchestrator/Workflow/Workflow.models';

export const WORKFLOW_RESOURCE_PARAMS = {
  fields: [{ id: 'name' }, { id: 'description' }],
  name: WORKFLOW_RESOURCE_NAME,
} satisfies ResourceParamsModel<WorkflowModel>;
