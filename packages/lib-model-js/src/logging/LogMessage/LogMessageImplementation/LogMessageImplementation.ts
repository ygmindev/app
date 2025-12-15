import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { RequestContextModel } from '@lib/config/api/api.models';
import { LogMessageModel } from '@lib/model/logging/LogMessage/LogMessage.models';
import { type LogMessageImplementationModel } from '@lib/model/logging/LogMessage/LogMessageImplementation/LogMessageImplementation.models';
import { IdInputModel } from '@lib/model/resource/IdInput/IdInput.models';
import { ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { PubSub } from '@lib/shared/core/utils/PubSub/PubSub';
import { PubSubModel } from '@lib/shared/core/utils/PubSub/PubSub.models';
import { withInject } from '@lib/shared/core/utils/withInject/withInject';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

@withContainer()
export class LogMessageImplementation implements LogMessageImplementationModel {
  @withInject(PubSub) protected _pubSub!: PubSubModel;

  async subscribe(
    input?: IdInputModel,
    context?: RequestContextModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, LogMessageModel>> {
    console.warn('\n\n@@@SUBSCRIBED!!!');
    console.warn(input);
    return {};
  }
}
