import { type UsePipelineResourceModel } from '@lib/frontend/orchestrator/hooks/usePipelineResource/usePipelineResource.models';
import { PIPELINE_RESOURCE_PARAMS } from '@lib/frontend/orchestrator/resources/Pipeline/Pipeline.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { type PipelineModel } from '@lib/model/orchestrator/Pipeline/Pipeline.models';

export const usePipelineResource = (): UsePipelineResourceModel =>
  useResource<PipelineModel>({
    ...PIPELINE_RESOURCE_PARAMS,
  });
