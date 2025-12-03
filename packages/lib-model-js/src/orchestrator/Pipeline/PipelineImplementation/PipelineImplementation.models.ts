import { type PipelineModel } from '@lib/model/orchestrator/Pipeline/Pipeline.models';
import { type ResourceImplementationModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';

export type PipelineImplementationModel = ResourceImplementationModel<PipelineModel>;
