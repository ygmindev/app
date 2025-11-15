import { createProtectedResource } from '@lib/backend/resource/utils/createProtectedResource/createProtectedResource';
import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { withManyToOneField } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField';
import { Chat } from '@lib/model/chat/Chat/Chat.entity';
import { ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { MESSAGE_RESOURCE_NAME } from '@lib/model/chat/Message/Message.constants';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';

@withDatabaseEntity({ name: MESSAGE_RESOURCE_NAME })
export class Message extends createProtectedResource() implements MessageModel {
  @withManyToOneField({ Resource: () => Chat })
  chat!: RefModel<ChatModel>;

  @withDatabaseField({ isOptional: true })
  text?: string;
}

export default Message;
