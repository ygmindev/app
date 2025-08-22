import { createProtectedResource } from '@lib/backend/resource/utils/createProtectedResource/createProtectedResource';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withManyToManyField } from '@lib/backend/resource/utils/withManyToManyField/withManyToManyField';
import { withOneToManyField } from '@lib/backend/resource/utils/withOneToManyField/withOneToManyField';
import { CHAT_RESOURCE_NAME } from '@lib/model/chat/Chat/Chat.constants';
import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { Message } from '@lib/model/chat/Message/Message.entity';
import { MessageModel } from '@lib/model/chat/Message/Message.models';
import { User } from '@lib/model/user/User/User.entity';
import { type UserModel } from '@lib/model/user/User/User.models';
import { PartialArrayModel } from '@lib/shared/core/core.models';

@withEntity({ isDatabase: true, name: CHAT_RESOURCE_NAME })
export class Chat extends createProtectedResource() implements ChatModel {
  @withOneToManyField({ Resource: () => Message, root: 'chat' })
  messages?: PartialArrayModel<MessageModel>;

  @withField({ isDatabase: true, isOptional: true })
  name?: string;

  @withManyToManyField({ Resource: () => User, leaf: CHAT_RESOURCE_NAME })
  participants?: PartialArrayModel<UserModel>;
}

export default Chat;
