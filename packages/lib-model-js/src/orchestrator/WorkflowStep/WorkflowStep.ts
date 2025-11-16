import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { ExecutionContext } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext';
import { ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import {
  WORKFLOW_STEP_RESOURCE_NAME,
  WORKFLOW_STEP_TYPE,
} from '@lib/model/orchestrator/WorkflowStep/WorkflowStep.constants';
import { WorkflowStepModel } from '@lib/model/orchestrator/WorkflowStep/WorkflowStep.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ name: WORKFLOW_STEP_RESOURCE_NAME })
export class WorkflowStep<TParams = unknown, TResult = unknown>
  implements WorkflowStepModel<TParams, TResult>
{
  @withField({ Resource: () => ExecutionContext, isOptional: true })
  context?: ExecutionContextModel;

  @withField()
  name!: string;

  @withField({ isOptional: true, type: DATA_TYPE.JSON })
  params?: TParams;

  @withField({ isOptional: true })
  type?: WORKFLOW_STEP_TYPE;
}
