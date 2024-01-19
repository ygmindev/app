import { Chat } from '@lib/backend/chat/resources/Chat/Chat';
import { type ChatResolverModel } from '@lib/backend/chat/resources/Chat/ChatResolver/ChatResolver.models';
import { ChatService } from '@lib/backend/chat/resources/Chat/ChatService/ChatService';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { CHAT_RESOURCE_NAME } from '@lib/shared/chat/resources/Chat/Chat.constants';
import { type ChatFormModel, type ChatModel } from '@lib/shared/chat/resources/Chat/Chat.models';

@withContainer()
@withResolver({ Resource: () => Chat })
export class ChatResolver
  extends createEntityResourceResolver<ChatModel, ChatFormModel>({
    Resource: () => Chat,
    ResourceService: ChatService,
    name: CHAT_RESOURCE_NAME,
  })
  implements ChatResolverModel {}
