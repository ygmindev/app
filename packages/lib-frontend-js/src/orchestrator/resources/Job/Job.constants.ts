import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { JOB_RESOURCE_NAME } from '@lib/model/orchestrator/Job/Job.constants';
import { type JobModel } from '@lib/model/orchestrator/Job/Job.models';

export const JOB_RESOURCE_PARAMS = {
  fields: [{ id: 'workflow' }, { id: 'created' }],
  name: JOB_RESOURCE_NAME,
} satisfies ResourceParamsModel<JobModel>;
