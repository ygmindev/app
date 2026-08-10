import { createProtectedResource } from '@lib/backend/resource/utils/createProtectedResource/createProtectedResource';
import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { withManyToOneField } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField';
import { MESSAGE_ROLE } from '@lib/model/ai/LlmPayload/LlmPayload.constants';
import { Chat } from '@lib/model/chat/Chat/Chat.entity';
import { ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { MESSAGE_RESOURCE_NAME, MESSAGE_STATUS } from '@lib/model/chat/Message/Message.constants';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { Content } from '@lib/model/chat/utils/Content/Content';
import { ContentModel } from '@lib/model/chat/utils/Content/Content.models';

@withDatabaseEntity({ name: MESSAGE_RESOURCE_NAME })
export class Message extends createProtectedResource() implements MessageModel {
  @withManyToOneField({ Resource: () => Chat })
  chat?: RefModel<ChatModel>;

  @withDatabaseField({ isArray: true, isOptional: true, Resource: () => Content })
  content?: Array<ContentModel>;

  @withDatabaseField({ isOptional: true })
  role?: MESSAGE_ROLE;

  @withDatabaseField({ isOptional: true })
  status?: MESSAGE_STATUS;

  @withDatabaseField({ isOptional: true })
  text?: string;
}

export default Message;
