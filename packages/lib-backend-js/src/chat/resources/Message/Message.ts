import { Chat } from '@lib/backend/chat/resources/Chat/Chat';
import { createProtectedResource } from '@lib/backend/resource/utils/createProtectedResource/createProtectedResource';
import { RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withManyToOneField } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField';
import { CHAT_RESOURCE_NAME } from '@lib/shared/chat/resources/Chat/Chat.constants';
import { ChatModel } from '@lib/shared/chat/resources/Chat/Chat.models';
import { MESSAGE_RESOURCE_NAME } from '@lib/shared/chat/resources/Message/Message.constants';
import {
  type MessageFormModel,
  type MessageModel,
} from '@lib/shared/chat/resources/Message/Message.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isDatabase: true, name: MESSAGE_RESOURCE_NAME })
export class Message
  extends createProtectedResource({ mappedBy: MESSAGE_RESOURCE_NAME })
  implements MessageModel
{
  @withManyToOneField({ Resource: () => Chat, mappedBy: MESSAGE_RESOURCE_NAME })
  [CHAT_RESOURCE_NAME]!: RefFieldModel<ChatModel>;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  text?: string;
}

@withEntity({ name: `${MESSAGE_RESOURCE_NAME}Form` })
export class MessageForm implements MessageFormModel {}
