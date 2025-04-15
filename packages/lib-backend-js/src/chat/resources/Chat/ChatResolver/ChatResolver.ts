import { Chat } from '@lib/backend/chat/resources/Chat/Chat';
import { ChatImplementation } from '@lib/backend/chat/resources/Chat/ChatImplementation/ChatImplementation';
import { type ChatResolverModel } from '@lib/backend/chat/resources/Chat/ChatResolver/ChatResolver.models';
import { Message } from '@lib/backend/chat/resources/Message/Message';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createRelatedResourceResolver } from '@lib/backend/resource/utils/createRelatedResourceResolver/createRelatedResourceResolver';
import { withResourceInput } from '@lib/backend/resource/utils/withResourceInput/withResourceInput';
import { withResourceOutput } from '@lib/backend/resource/utils/withResourceOutput/withResourceOutput';
import { withRoot } from '@lib/backend/resource/utils/withRoot/withRoot';
import { getUser } from '@lib/backend/user/utils/getUser/getUser';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { CHAT_RESOURCE_NAME } from '@lib/shared/chat/resources/Chat/Chat.constants';
import { type ChatModel } from '@lib/shared/chat/resources/Chat/Chat.models';
import { MessageModel } from '@lib/shared/chat/resources/Message/Message.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';
import { ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';
import { UserModel } from '@lib/shared/user/resources/User/User.models';

@withContainer()
@withResolver({ Resource: () => Chat })
export class ChatResolver
  extends createRelatedResourceResolver<ChatModel, UserModel>({
    Resource: () => Chat,
    ResourceImplementation: ChatImplementation,
    name: 'chats',
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
      console.warn(user?.chats);
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
