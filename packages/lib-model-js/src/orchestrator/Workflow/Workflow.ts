import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { WORKFLOW_RESOURCE_NAME } from '@lib/model/orchestrator/Workflow/Workflow.constants';
import { type WorkflowModel } from '@lib/model/orchestrator/Workflow/Workflow.models';
import { Resource } from '@lib/model/resource/Resource/Resource';

@withEntity({
  name: WORKFLOW_RESOURCE_NAME,
})
export class Workflow extends Resource() implements WorkflowModel {
  @withField()
  description?: string;

  @withField()
  name!: string;
}
