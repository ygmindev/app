import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { PIPELINE_RESOURCE_NAME } from '@lib/model/orchestrator/Pipeline/Pipeline.constants';
import { type PipelineModel } from '@lib/model/orchestrator/Pipeline/Pipeline.models';
import { Workflow } from '@lib/model/orchestrator/Workflow/Workflow';
import { WorkflowModel } from '@lib/model/orchestrator/Workflow/Workflow.models';
import { Resource } from '@lib/model/resource/Resource/Resource';

@withEntity({ name: PIPELINE_RESOURCE_NAME })
export class Pipeline extends Resource() implements PipelineModel {
  @withField({ isOptional: true })
  app?: string;

  @withField()
  name!: string;

  @withField({ Resource: () => Workflow, isArray: true, isOptional: true })
  workflows?: Array<WorkflowModel>;
}
