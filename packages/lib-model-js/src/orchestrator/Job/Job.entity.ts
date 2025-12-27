import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { JOB_RESOURCE_NAME } from '@lib/model/orchestrator/Job/Job.constants';
import { type JobModel } from '@lib/model/orchestrator/Job/Job.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';

@withDatabaseEntity({
  name: JOB_RESOURCE_NAME,
})
export class Job<TParams extends unknown = unknown>
  extends EntityResource
  implements JobModel<TParams>
{
  @withDatabaseField()
  workflow!: string;
}
