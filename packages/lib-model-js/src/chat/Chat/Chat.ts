import { Message } from '@lib/model/chat/Message/Message';
import { createProtectedResource } from '@lib/backend/resource/utils/createProtectedResource/createProtectedResource';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withManyToManyField } from '@lib/backend/resource/utils/withManyToManyField/withManyToManyField';
import { withOneToManyField } from '@lib/backend/resource/utils/withOneToManyField/withOneToManyField';
import { User } from '@lib/model/user/User/User';
import { Collection } from '@lib/backend/core/utils/Collection/Collection';
import { type CollectionModel } from '@lib/backend/core/utils/Collection/Collection.models';
import { CHAT_RESOURCE_NAME } from '@lib/model/chat/Chat/Chat.constants';
import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { MessageModel } from '@lib/model/chat/Message/Message.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { UserModel } from '@lib/model/user/User/User.models';

@withEntity({ isDatabase: true, name: CHAT_RESOURCE_NAME })
export class Chat extends createProtectedResource() implements ChatModel {
  @withOneToManyField({ Resource: () => Message, root: 'chat' })
  messages?: CollectionModel<MessageModel> = new Collection(this);

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  name?: string;

  @withManyToManyField({ Resource: () => User, leaf: 'chats' })
  participants?: CollectionModel<UserModel> = new Collection(this);
}
