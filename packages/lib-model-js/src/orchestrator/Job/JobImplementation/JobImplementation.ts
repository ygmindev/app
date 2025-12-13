import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { RequestContextModel } from '@lib/config/api/api.models';
import { LogMessageModel } from '@lib/model/logging/LogMessage/LogMessage.models';
import { JOB_RESOURCE_NAME } from '@lib/model/orchestrator/Job/Job.constants';
import { Job } from '@lib/model/orchestrator/Job/Job.entity';
import { type JobModel } from '@lib/model/orchestrator/Job/Job.models';
import { type JobImplementationModel } from '@lib/model/orchestrator/Job/JobImplementation/JobImplementation.models';
import { IdInputModel } from '@lib/model/resource/IdInput/IdInput.models';
import { ResourceInputParamsModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { InvalidArgumentError } from '@lib/shared/core/errors/InvalidArgumentError/InvalidArgumentError';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
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
  implements JobImplementationModel
{
  async logSubscribe(
    input?: ResourceInputParamsModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, IdInputModel>,
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, LogMessageModel>> {
    return {};
  }
}
