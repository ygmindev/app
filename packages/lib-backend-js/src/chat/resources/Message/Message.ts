import { Chat } from '@lib/backend/chat/resources/Chat/Chat';
import { createProtectedResource } from '@lib/backend/resource/utils/createProtectedResource/createProtectedResource';
import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withManyToOneField } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField';
import { ChatModel } from '@lib/shared/chat/resources/Chat/Chat.models';
import { MESSAGE_RESOURCE_NAME } from '@lib/shared/chat/resources/Message/Message.constants';
import { type MessageModel } from '@lib/shared/chat/resources/Message/Message.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isDatabase: true, name: MESSAGE_RESOURCE_NAME })
export class Message extends createProtectedResource() implements MessageModel {
  @withManyToOneField({ Resource: () => Chat })
  chat!: RefFieldModel<ChatModel>;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  text?: string;
}
