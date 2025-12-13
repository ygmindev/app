import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withContext } from '@lib/backend/http/utils/withContext/withContext';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { withResourceInput } from '@lib/backend/resource/utils/withResourceInput/withResourceInput';
import { withResourceOutput } from '@lib/backend/resource/utils/withResourceOutput/withResourceOutput';
import { RequestContextModel } from '@lib/config/api/api.models';
import { ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import { LOG_MESSAGE_RESOURCE_NAME } from '@lib/model/logging/LogMessage/LogMessage.constants';
import { LogMessage } from '@lib/model/logging/LogMessage/LogMessage.entity';
import { LogMessageModel } from '@lib/model/logging/LogMessage/LogMessage.models';
import { JOB_RESOURCE_NAME } from '@lib/model/orchestrator/Job/Job.constants';
import { Job } from '@lib/model/orchestrator/Job/Job.entity';
import { JobImplementation } from '@lib/model/orchestrator/Job/JobImplementation/JobImplementation';
import { type JobResolverModel } from '@lib/model/orchestrator/Job/JobResolver/JobResolver.models';
import { IdInput } from '@lib/model/resource/IdInput/IdInput';
import { IdInputModel } from '@lib/model/resource/IdInput/IdInput.models';
import { ResourceInputParamsModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

@withContainer()
@withResolver({ Resource: () => Job })
export class JobResolver
  extends createEntityResourceResolver({
    Resource: () => Job,
    ResourceImplementation: JobImplementation,
    access: { default: ACCESS_LEVEL.PUBLIC },
    name: JOB_RESOURCE_NAME,
  })
  implements JobResolverModel
{
  @withResourceOutput({
    Resource: () => LogMessage,
    method: RESOURCE_METHOD_TYPE.SUBSCRIBE,
    name: LOG_MESSAGE_RESOURCE_NAME,
    topics: ['message'],
  })
  async logSubscribe(
    @withResourceInput({
      Resource: () => IdInput,
      method: RESOURCE_METHOD_TYPE.SUBSCRIBE,
      name: LOG_MESSAGE_RESOURCE_NAME,
    })
    input?: ResourceInputParamsModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, IdInputModel>,
    @withContext()
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, LogMessageModel>> {
    return Container.get(JobImplementation).logSubscribe(input, context);
  }
}
