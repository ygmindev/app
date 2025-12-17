import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createProtectedResourceResolver } from '@lib/backend/resource/utils/createProtectedResourceResolver/createProtectedResourceResolver';
import { CHAT_RESOURCE_NAME } from '@lib/model/chat/Chat/Chat.constants';
import { Chat } from '@lib/model/chat/Chat/Chat.entity';
import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { ChatImplementation } from '@lib/model/chat/Chat/ChatImplementation/ChatImplementation';
import { type ChatResolverModel } from '@lib/model/chat/Chat/ChatResolver/ChatResolver.models';

@withContainer()
@withResolver({ Resource: () => Chat })
export class ChatResolver
  extends createProtectedResourceResolver<ChatModel>({
    Resource: () => Chat,
    ResourceImplementation: ChatImplementation,
    name: CHAT_RESOURCE_NAME,
  })
  implements ChatResolverModel {
  // @withResourceOutput({
  //   Resource: () => Message,
  //   access: ACCESS_LEVEL.PROTECTED,
  //   method: RESOURCE_METHOD_TYPE.SUBSCRIBE,
  //   name: CHAT_RESOURCE_NAME,
  //   topic: () => 'message',
  // })
  // async messageSubscribe(
  //   @withResourceInput({
  //     Resource: () => Message,
  //     method: RESOURCE_METHOD_TYPE.SUBSCRIBE,
  //     name: CHAT_RESOURCE_NAME,
  //   })
  //   input: ResourceInputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, ChatModel> = {},
  //   @withRoot()
  //   root?: MessageModel,
  // ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, MessageModel>> {
  //   return { result: root };
  // }
}
