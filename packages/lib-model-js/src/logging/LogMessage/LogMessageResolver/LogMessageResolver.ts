import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { RequestContextModel } from '@lib/config/api/api.models';
import { LogMessageModel } from '@lib/model/logging/LogMessage/LogMessage.models';
import { LogMessageResolverModel } from '@lib/model/logging/LogMessage/LogMessageResolver/LogMessageResolver.models';
import { ResourceInputModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

@withContainer()
export class LogMessageResolver implements LogMessageResolverModel {
  async subscribe(
    input?: ResourceInputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, LogMessageModel>,
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, LogMessageModel>> {
    return {};
  }
}
