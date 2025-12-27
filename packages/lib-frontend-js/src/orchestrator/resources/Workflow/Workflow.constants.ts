import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { WORKFLOW_RESOURCE_NAME } from '@lib/model/orchestrator/Workflow/Workflow.constants';
import { type WorkflowModel } from '@lib/model/orchestrator/Workflow/Workflow.models';

export const WORKFLOW_RESOURCE_PARAMS = {
  fields: [
    { id: '_id' },
    { id: 'name' },
    { id: 'description' },
    { fields: [{ id: 'environment' }, { id: 'app' }, { id: 'overrrides' }], id: 'context' },
    { id: 'params' },
    {
      fields: [
        { id: 'name' },
        { id: 'params' },
        { id: 'type' },
        { fields: [{ id: 'environment' }, { id: 'app' }, { id: 'overrrides' }], id: 'context' },
      ],
      id: 'steps',
    },
    {
      fields: [{ id: 'key' }, { id: 'isOptional' }],
      id: 'prompts',
    },
  ],
  name: WORKFLOW_RESOURCE_NAME,
} satisfies ResourceParamsModel<WorkflowModel>;
