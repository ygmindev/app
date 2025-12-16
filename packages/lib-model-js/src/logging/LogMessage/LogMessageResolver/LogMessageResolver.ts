import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withContext } from '@lib/backend/http/utils/withContext/withContext';
import { withIdInput } from '@lib/backend/resource/utils/withIdInput/withIdInput';
import { withResourceOutput } from '@lib/backend/resource/utils/withResourceOutput/withResourceOutput';
import { RequestContextModel } from '@lib/config/api/api.models';
import { ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import { LOG_MESSAGE_RESOURCE_NAME } from '@lib/model/logging/LogMessage/LogMessage.constants';
import { LogMessage } from '@lib/model/logging/LogMessage/LogMessage.entity';
import { LogMessageModel } from '@lib/model/logging/LogMessage/LogMessage.models';
import { LogMessageImplementation } from '@lib/model/logging/LogMessage/LogMessageImplementation/LogMessageImplementation';
import { LogMessageResolverModel } from '@lib/model/logging/LogMessage/LogMessageResolver/LogMessageResolver.models';
import { IdInputModel } from '@lib/model/resource/IdInput/IdInput.models';
import { ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

@withContainer()
export class LogMessageResolver implements LogMessageResolverModel {
  @withResourceOutput<RESOURCE_METHOD_TYPE.SUBSCRIBE, LogMessageModel, IdInputModel>({
    Resource: () => LogMessage,
    access: ACCESS_LEVEL.PUBLIC,
    method: RESOURCE_METHOD_TYPE.SUBSCRIBE,
    name: LOG_MESSAGE_RESOURCE_NAME,
    topic: (params) => {
      const id = params.args?.id;
      if (id) {
        return `${LOG_MESSAGE_RESOURCE_NAME}.${id}`;
      }
      throw new NotFoundError('id');
    },
  })
  async subscribe(
    @withIdInput()
    input?: IdInputModel,
    @withContext()
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, LogMessageModel>> {
    return Container.get(LogMessageImplementation).subscribe(input, context);
  }
}
