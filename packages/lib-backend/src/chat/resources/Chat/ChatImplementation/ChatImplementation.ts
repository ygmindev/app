import { Chat } from '@lib/backend/chat/resources/Chat/Chat';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { CHAT_RESOURCE_NAME } from '@lib/shared/chat/resources/Chat/Chat.constants';
import { type ChatFormModel, type ChatModel } from '@lib/shared/chat/resources/Chat/Chat.models';
import { type ChatImplementationModel } from '@lib/shared/chat/resources/Chat/ChatImplementation/ChatImplementation.models';

@withContainer({ name: `${CHAT_RESOURCE_NAME}Implementation` })
export class ChatImplementation
  extends createEntityResourceImplementation<ChatModel, ChatFormModel>({
    Resource: Chat,
    name: CHAT_RESOURCE_NAME,
  })
  implements ChatImplementationModel {}
