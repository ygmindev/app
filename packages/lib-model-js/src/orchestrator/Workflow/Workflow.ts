import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import {
  WORKFLOW_EXECUTION,
  WORKFLOW_RESOURCE_NAME,
} from '@lib/model/orchestrator/Workflow/Workflow.constants';
import { type WorkflowModel } from '@lib/model/orchestrator/Workflow/Workflow.models';
import { WorkflowStep } from '@lib/model/orchestrator/WorkflowStep/WorkflowStep';
import { WorkflowStepModel } from '@lib/model/orchestrator/WorkflowStep/WorkflowStep.models';
import { Resource } from '@lib/model/resource/Resource/Resource';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ name: WORKFLOW_RESOURCE_NAME })
export class Workflow extends Resource() implements WorkflowModel {
  @withField({ isOptional: true })
  description?: string;

  @withField({ isOptional: true })
  execution?: WORKFLOW_EXECUTION;

  @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
  interval?: number;

  @withField()
  name!: string;

  @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
  retry?: number;

  @withField({ Resource: () => WorkflowStep, isArray: true, isOptional: true })
  steps?: Array<WorkflowStepModel>;

  @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
  timeout?: number;
}
