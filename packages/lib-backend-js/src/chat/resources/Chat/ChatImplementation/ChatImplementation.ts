import { Chat } from '@lib/backend/chat/resources/Chat/Chat';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createRelatedResourceImplementation } from '@lib/backend/resource/utils/createRelatedResourceImplementation/createRelatedResourceImplementation';
import { UserImplementation } from '@lib/backend/user/resources/User/UserImplementation/UserImplementation';
import { CHAT_RESOURCE_NAME } from '@lib/shared/chat/resources/Chat/Chat.constants';
import { type ChatModel } from '@lib/shared/chat/resources/Chat/Chat.models';
import { type ChatImplementationModel } from '@lib/model/chat/Chat/ChatImplementation/ChatImplementation.models';
import { UserModel } from '@lib/shared/user/resources/User/User.models';

@withContainer({ name: `${CHAT_RESOURCE_NAME}Implementation` })
export class ChatImplementation
  extends createRelatedResourceImplementation<ChatModel, UserModel>({
    Resource: Chat,
    RootImplementation: UserImplementation,
    name: 'chats',
    root: 'participants',
  })
  implements ChatImplementationModel {}
