import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createRelatedResourceResolver } from '@lib/backend/resource/utils/createRelatedResourceResolver/createRelatedResourceResolver';
import { withResourceInput } from '@lib/backend/resource/utils/withResourceInput/withResourceInput';
import { withResourceOutput } from '@lib/backend/resource/utils/withResourceOutput/withResourceOutput';
import { withRoot } from '@lib/backend/resource/utils/withRoot/withRoot';
import { getUser } from '@lib/backend/user/utils/getUser/getUser';
import { ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import { Chat } from '@lib/model/chat/Chat/Chat';
import { CHAT_RESOURCE_NAME } from '@lib/model/chat/Chat/Chat.constants';
import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { ChatImplementation } from '@lib/model/chat/Chat/ChatImplementation/ChatImplementation';
import { type ChatResolverModel } from '@lib/model/chat/Chat/ChatResolver/ChatResolver.models';
import { Message } from '@lib/model/chat/Message/Message';
import { MessageModel } from '@lib/model/chat/Message/Message.models';
import { type UserModel } from '@lib/model/user/User/User.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';
import { ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';

@withContainer()
@withResolver({ Resource: () => Chat })
export class ChatResolver
  extends createRelatedResourceResolver<ChatModel, UserModel>({
    Resource: () => Chat,
    ResourceImplementation: ChatImplementation,
    name: CHAT_RESOURCE_NAME,
  })
  implements ChatResolverModel
{
  @withResourceOutput({
    Resource: () => Message,
    access: ACCESS_LEVEL.PROTECTED,
    filter: async ({ context, payload }) => {
      console.warn('@@@ uid:');
      console.warn(context?.user?._id);
      const user = await getUser(context?.user?._id);
      console.warn(user);
      console.warn('@@@ chats:');
      console.warn(user?.[CHAT_RESOURCE_NAME]);
      return true;
    },
    method: RESOURCE_METHOD_TYPE.SUBSCRIBE,
    name: CHAT_RESOURCE_NAME,
    topics: ['message'],
  })
  async messageSubscribe(
    @withResourceInput({
      Resource: () => Message,
      method: RESOURCE_METHOD_TYPE.SUBSCRIBE,
      name: CHAT_RESOURCE_NAME,
    })
    input: ResourceInputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, ChatModel> = {},
    @withRoot()
    root?: MessageModel,
  ): Promise<ResourceOutputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, MessageModel>> {
    return { result: root };
  }
}
