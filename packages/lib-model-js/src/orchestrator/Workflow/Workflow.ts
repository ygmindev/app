import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { ExecutionContext } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext';
import { ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import { Prompt } from '@lib/model/orchestrator/Prompt/Prompt';
import { PromptArrayModel } from '@lib/model/orchestrator/Prompt/Prompt.models';
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
export class Workflow<TParams = unknown, TResult = unknown>
  extends Resource()
  implements WorkflowModel<TParams, TResult>
{
  @withField({ Resource: () => ExecutionContext, isOptional: true })
  context?: ExecutionContextModel;

  @withField({ isOptional: true })
  description?: string;

  @withField({ isOptional: true })
  execution?: WORKFLOW_EXECUTION;

  @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
  interval?: number;

  @withField()
  name!: string;

  @withField({ isOptional: true, type: DATA_TYPE.JSON })
  params?: TParams;

  @withField({ Resource: () => Prompt, isArray: true, isOptional: true })
  prompts?: PromptArrayModel<TParams>;

  @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
  retry?: number;

  @withField({ Resource: () => WorkflowStep, isArray: true, isOptional: true })
  steps?: Array<WorkflowStepModel>;

  @withField({ isOptional: true, type: DATA_TYPE.NUMBER })
  timeout?: number;
}
