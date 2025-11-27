import { type UseWorkflowResourceModel } from '@lib/frontend/orchestrator/hooks/useWorkflowResource/useWorkflowResource.models';
import { WORKFLOW_RESOURCE_PARAMS } from '@lib/frontend/orchestrator/resources/Workflow/Workflow.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { type WorkflowModel } from '@lib/model/orchestrator/Workflow/Workflow.models';

export const useWorkflowResource = (): UseWorkflowResourceModel =>
  useResource<WorkflowModel>({
    ...WORKFLOW_RESOURCE_PARAMS,
  });
