import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { RequestContextModel } from '@lib/config/api/api.models';
import { LogMessageModel } from '@lib/model/logging/LogMessage/LogMessage.models';
import { type LogMessageImplementationModel } from '@lib/model/logging/LogMessage/LogMessageImplementation/LogMessageImplementation.models';
import { ResourceInputModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

@withContainer()
export class LogMessageImplementation implements LogMessageImplementationModel {
  async subscribe(
    input: ResourceInputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, LogMessageModel>,
    payload?: LogMessageModel,
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, LogMessageModel>> {
    return { result: payload };
  }
}
