import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { JOB_RESOURCE_NAME } from '@lib/model/orchestrator/Job/Job.constants';
import { Job } from '@lib/model/orchestrator/Job/Job.entity';
import { type JobModel } from '@lib/model/orchestrator/Job/Job.models';
import { type JobImplementationModel } from '@lib/model/orchestrator/Job/JobImplementation/JobImplementation.models';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { getClient } from '@tool/task/orchestrator/utils/getClient/getClient';

@withContainer()
export class JobImplementation
  extends createEntityResourceImplementation<JobModel>({
    Resource: Job,
    beforeCreate: async (input, context) => {
      if (input.input?.form) {
        const client = await getClient();
        const { context, params, workflow } = input.input.form;
        if (!workflow) throw new InvalidArgumentError('Workflow is required');
        const { id } = await client.run(workflow, params, context);
        input.input.form._id = id;
      }
      return input.input;
    },
    name: JOB_RESOURCE_NAME,
  })
  implements JobImplementationModel {}
