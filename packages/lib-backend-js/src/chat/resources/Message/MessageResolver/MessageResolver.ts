import { Message } from '@lib/backend/chat/resources/Message/Message';
import { MessageImplementation } from '@lib/backend/chat/resources/Message/MessageImplementation/MessageImplementation';
import { type MessageResolverModel } from '@lib/backend/chat/resources/Message/MessageResolver/MessageResolver.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createProtectedResourceResolver } from '@lib/backend/resource/utils/createProtectedResourceResolver/createProtectedResourceResolver';
import { withInput } from '@lib/backend/resource/utils/withInput/withInput';
import { withOutput } from '@lib/backend/resource/utils/withOutput/withOutput';
import { withRoot } from '@lib/backend/resource/utils/withRoot/withRoot';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { MESSAGE_RESOURCE_NAME } from '@lib/shared/chat/resources/Message/Message.constants';
import {
  type MessageFormModel,
  type MessageModel,
} from '@lib/shared/chat/resources/Message/Message.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { OutputModel } from '@lib/shared/resource/utils/Output/Output.models';

@withContainer()
@withResolver({ Resource: () => Message })
export class MessageResolver
  extends createProtectedResourceResolver<MessageModel, MessageFormModel>({
    Resource: () => Message,
    ResourceImplementation: MessageImplementation,
    name: MESSAGE_RESOURCE_NAME,
  })
  implements MessageResolverModel
{
  @withOutput({
    Resource: () => Message,
    access: ACCESS_LEVEL.PROTECTED,
    filter: async ({ payload }) => {
      console.warn('@@@ filter');
      console.warn(payload);
      return true;
    },
    method: RESOURCE_METHOD_TYPE.SUBSCRIBE,
    name: MESSAGE_RESOURCE_NAME,
    topics: ['message'],
  })
  async messageSubscribe(
    @withInput({
      Resource: () => Message,
      method: RESOURCE_METHOD_TYPE.SUBSCRIBE,
      name: MESSAGE_RESOURCE_NAME,
    })
    input: InputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, MessageModel, MessageFormModel> = {},
    @withRoot()
    root?: MessageModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, MessageModel>> {
    return { result: root };
  }
}
