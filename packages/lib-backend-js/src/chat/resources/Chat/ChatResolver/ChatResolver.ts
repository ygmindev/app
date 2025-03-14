import { Chat } from '@lib/backend/chat/resources/Chat/Chat';
import { ChatImplementation } from '@lib/backend/chat/resources/Chat/ChatImplementation/ChatImplementation';
import { type ChatResolverModel } from '@lib/backend/chat/resources/Chat/ChatResolver/ChatResolver.models';
import { Message } from '@lib/backend/chat/resources/Message/Message';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createProtectedResourceResolver } from '@lib/backend/resource/utils/createProtectedResourceResolver/createProtectedResourceResolver';
import { withInput } from '@lib/backend/resource/utils/withInput/withInput';
import { withOutput } from '@lib/backend/resource/utils/withOutput/withOutput';
import { withRoot } from '@lib/backend/resource/utils/withRoot/withRoot';
import { getUser } from '@lib/backend/user/utils/getUser/getUser';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { CHAT_RESOURCE_NAME } from '@lib/shared/chat/resources/Chat/Chat.constants';
import { type ChatFormModel, type ChatModel } from '@lib/shared/chat/resources/Chat/Chat.models';
import { MessageModel } from '@lib/shared/chat/resources/Message/Message.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { OutputModel } from '@lib/shared/resource/utils/Output/Output.models';

@withContainer()
@withResolver({ Resource: () => Chat })
export class ChatResolver
  extends createProtectedResourceResolver<ChatModel, ChatFormModel>({
    Resource: () => Chat,
    ResourceImplementation: ChatImplementation,
    name: CHAT_RESOURCE_NAME,
  })
  implements ChatResolverModel
{
  @withOutput({
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
    @withInput({
      Resource: () => Message,
      method: RESOURCE_METHOD_TYPE.SUBSCRIBE,
      name: CHAT_RESOURCE_NAME,
    })
    input: InputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, ChatModel, ChatFormModel> = {},
    @withRoot()
    root?: MessageModel,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, MessageModel>> {
    console.warn('@@@ chat');
    console.warn(root);
    return { result: root };
  }
}
