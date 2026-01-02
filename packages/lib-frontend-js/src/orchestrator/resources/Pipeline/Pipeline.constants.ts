import { WORKFLOW_RESOURCE_PARAMS } from '@lib/frontend/orchestrator/resources/Workflow/Workflow.constants';
import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { PIPELINE_RESOURCE_NAME } from '@lib/model/orchestrator/Pipeline/Pipeline.constants';
import { type PipelineModel } from '@lib/model/orchestrator/Pipeline/Pipeline.models';

export const PIPELINE_RESOURCE_PARAMS = {
  fields: [
    { id: 'app' },
    { id: 'name' },
    {
      fields: WORKFLOW_RESOURCE_PARAMS.fields,
      id: 'workflows',
    },
  ],
  name: PIPELINE_RESOURCE_NAME,
} satisfies ResourceParamsModel<PipelineModel>;
