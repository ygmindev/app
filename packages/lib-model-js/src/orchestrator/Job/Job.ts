import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { JOB_RESOURCE_NAME } from '@lib/model/orchestrator/Job/Job.constants';
import { type JobModel } from '@lib/model/orchestrator/Job/Job.models';
import { Resource } from '@lib/model/resource/Resource/Resource';

@withDatabaseEntity({
  name: JOB_RESOURCE_NAME,
})
export class Job extends Resource() implements JobModel {
  @withDatabaseField()
  workflow!: string;
}
