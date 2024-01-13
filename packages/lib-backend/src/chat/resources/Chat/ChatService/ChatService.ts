import { Chat } from '@lib-backend/chat/resources/Chat/Chat';
import { withContainer } from '@lib-backend/core/utils/withContainer/withContainer';
import { createEntityResourceService } from '@lib-backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { CHAT_RESOURCE_NAME } from '@lib-shared/chat/resources/Chat/Chat.constants';
import { type ChatFormModel, type ChatModel } from '@lib-shared/chat/resources/Chat/Chat.models';
import { type ChatServiceModel } from '@lib-shared/chat/resources/Chat/ChatService/ChatService.models';

@withContainer({ name: `${CHAT_RESOURCE_NAME}Service` })
export class ChatService
  extends createEntityResourceService<ChatModel, ChatFormModel>({
    Resource: Chat,
    name: CHAT_RESOURCE_NAME,
  })
  implements ChatServiceModel {}
