import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createRelatedResourceImplementation } from '@lib/backend/resource/utils/createRelatedResourceImplementation/createRelatedResourceImplementation';
import { Chat } from '@lib/model/chat/Chat/Chat';
import { CHAT_RESOURCE_NAME } from '@lib/model/chat/Chat/Chat.constants';
import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { type ChatImplementationModel } from '@lib/model/chat/Chat/ChatImplementation/ChatImplementation.models';
import { UserModel } from '@lib/model/user/User/User.models';
import { UserImplementation } from '@lib/model/user/User/UserImplementation/UserImplementation';

@withContainer({ name: `${CHAT_RESOURCE_NAME}Implementation` })
export class ChatImplementation
  extends createRelatedResourceImplementation<ChatModel, UserModel>({
    Resource: Chat,
    RootImplementation: UserImplementation,
    name: CHAT_RESOURCE_NAME,
    root: 'participants',
  })
  implements ChatImplementationModel {}
