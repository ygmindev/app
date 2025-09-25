import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createProtectedResoureImplementation } from '@lib/backend/resource/utils/createProtectedResourceImplementation/createProtectedResourceImplementation';
import { CHAT_RESOURCE_NAME } from '@lib/model/chat/Chat/Chat.constants';
import { Chat } from '@lib/model/chat/Chat/Chat.entity';
import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { type ChatImplementationModel } from '@lib/model/chat/Chat/ChatImplementation/ChatImplementation.models';

@withContainer()
export class ChatImplementation
  extends createProtectedResoureImplementation<ChatModel>({
    Resource: Chat,
    name: CHAT_RESOURCE_NAME,
  })
  implements ChatImplementationModel {}
