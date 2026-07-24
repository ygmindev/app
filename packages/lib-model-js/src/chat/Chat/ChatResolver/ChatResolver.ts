import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createProtectedResourceResolver } from '@lib/backend/resource/utils/createProtectedResourceResolver/createProtectedResourceResolver';
import { ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import { CHAT_RESOURCE_NAME } from '@lib/model/chat/Chat/Chat.constants';
import { Chat } from '@lib/model/chat/Chat/Chat.entity';
import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { ChatImplementation } from '@lib/model/chat/Chat/ChatImplementation/ChatImplementation';
import { type ChatResolverModel } from '@lib/model/chat/Chat/ChatResolver/ChatResolver.models';

@withContainer()
@withResolver({ Resource: () => Chat })
export class ChatResolver
  extends createProtectedResourceResolver<ChatModel>({
    access: { default: ACCESS_LEVEL.PUBLIC },
    name: CHAT_RESOURCE_NAME,
    Resource: () => Chat,
    ResourceImplementation: ChatImplementation,
  })
  implements ChatResolverModel {}
