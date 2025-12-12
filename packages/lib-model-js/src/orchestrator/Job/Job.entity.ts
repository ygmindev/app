import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { ExecutionContext } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext';
import { ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import { JOB_RESOURCE_NAME } from '@lib/model/orchestrator/Job/Job.constants';
import { type JobModel } from '@lib/model/orchestrator/Job/Job.models';
import { WORKFLOW_STEP_TYPE } from '@lib/model/orchestrator/WorkflowStep/WorkflowStep.constants';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withDatabaseEntity({
  name: JOB_RESOURCE_NAME,
})
export class Job<TParams extends unknown = unknown>
  extends EntityResource
  implements JobModel<TParams>
{
  @withDatabaseField({ Resource: () => ExecutionContext, isOptional: true })
  context?: ExecutionContextModel;

  @withDatabaseField({ isOptional: true, type: DATA_TYPE.JSON })
  params?: TParams;

  @withDatabaseField({ isOptional: true })
  type?: WORKFLOW_STEP_TYPE;

  @withDatabaseField()
  workflow!: string;
}
