import { Chat } from '@lib/backend/chat/resources/Chat/Chat';
import { ChatImplementation } from '@lib/backend/chat/resources/Chat/ChatImplementation/ChatImplementation';
import { type ChatResolverModel } from '@lib/backend/chat/resources/Chat/ChatResolver/ChatResolver.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createProtectedResourceResolver } from '@lib/backend/resource/utils/createProtectedResourceResolver/createProtectedResourceResolver';
import { CHAT_RESOURCE_NAME } from '@lib/shared/chat/resources/Chat/Chat.constants';
import { type ChatFormModel, type ChatModel } from '@lib/shared/chat/resources/Chat/Chat.models';

@withContainer()
@withResolver({ Resource: () => Chat })
export class ChatResolver
  extends createProtectedResourceResolver<ChatModel, ChatFormModel>({
    Resource: () => Chat,
    ResourceImplementation: ChatImplementation,
    name: CHAT_RESOURCE_NAME,
  })
  implements ChatResolverModel {}
