import { Message } from '@lib/backend/chat/resources/Message/Message';
import { Collection } from '@lib/backend/resource/utils/Collection/Collection';
import { CollectionModel } from '@lib/backend/resource/utils/Collection/Collection.models';
import { createProtectedResource } from '@lib/backend/resource/utils/createProtectedResource/createProtectedResource';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withManyToManyField } from '@lib/backend/resource/utils/withManyToManyField/withManyToManyField';
import { withOneToManyField } from '@lib/backend/resource/utils/withOneToManyField/withOneToManyField';
import { User } from '@lib/backend/user/resources/User/User';
import { CHAT_RESOURCE_NAME } from '@lib/shared/chat/resources/Chat/Chat.constants';
import { type ChatModel } from '@lib/shared/chat/resources/Chat/Chat.models';
import { MESSAGE_RESOURCE_NAME } from '@lib/shared/chat/resources/Message/Message.constants';
import { MessageModel } from '@lib/shared/chat/resources/Message/Message.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { UserModel } from '@lib/shared/user/resources/User/User.models';

@withEntity({ isDatabase: true, name: CHAT_RESOURCE_NAME })
export class Chat extends createProtectedResource() implements ChatModel {
  @withOneToManyField({ Resource: () => Message, mappedBy: CHAT_RESOURCE_NAME })
  [MESSAGE_RESOURCE_NAME]?: CollectionModel<MessageModel> = new Collection(this);

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  name?: string;

  @withManyToManyField({ Resource: () => User, inversedBy: 'chats' })
  participants?: CollectionModel<UserModel> = new Collection(this);
}
