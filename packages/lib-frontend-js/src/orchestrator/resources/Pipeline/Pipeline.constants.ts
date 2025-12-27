import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { PIPELINE_RESOURCE_NAME } from '@lib/model/orchestrator/Pipeline/Pipeline.constants';
import { type PipelineModel } from '@lib/model/orchestrator/Pipeline/Pipeline.models';

export const PIPELINE_RESOURCE_PARAMS = {
  fields: [
    { id: 'app' },
    { id: 'name' },
    {
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
      id: 'workflows',
    },
  ],
  name: PIPELINE_RESOURCE_NAME,
} satisfies ResourceParamsModel<PipelineModel>;
