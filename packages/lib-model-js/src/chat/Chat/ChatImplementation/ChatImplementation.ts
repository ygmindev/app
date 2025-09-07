import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { CHAT_RESOURCE_NAME } from '@lib/model/chat/Chat/Chat.constants';
import { Chat } from '@lib/model/chat/Chat/Chat.entity';
import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { type ChatImplementationModel } from '@lib/model/chat/Chat/ChatImplementation/ChatImplementation.models';

@withContainer()
export class ChatImplementation
  extends createEntityResourceImplementation<ChatModel>({
    Resource: Chat,
    name: CHAT_RESOURCE_NAME,
  })
  implements ChatImplementationModel {}
