import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createResourceImplementation } from '@lib/backend/resource/utils/createResourceImplementation/createResourceImplementation';
import { Job } from '@lib/model/orchestrator/Job/Job';
import { JOB_RESOURCE_NAME } from '@lib/model/orchestrator/Job/Job.constants';
import { type JobModel } from '@lib/model/orchestrator/Job/Job.models';
import { type JobImplementationModel } from '@lib/model/orchestrator/Job/JobImplementation/JobImplementation.models';

const getMany: JobImplementationModel['getMany'] = async (input, context) => {
  const values = [] as Array<unknown>;
  return {
    result: { items: [] },
    // result: filterArray(values, input?.filter, input?.options?.skip, input?.options?.take),
  };
};

@withContainer()
export class JobImplementation
  extends createResourceImplementation<JobModel>({
    Resource: Job,
    count: async () => 100,
    getMany,
    name: JOB_RESOURCE_NAME,
  })
  implements JobImplementationModel {}
