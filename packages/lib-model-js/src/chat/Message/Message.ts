import { createProtectedResource } from '@lib/backend/resource/utils/createProtectedResource/createProtectedResource';
import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withManyToOneField } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField';
import { Chat } from '@lib/model/chat/Chat/Chat';
import { ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { MESSAGE_RESOURCE_NAME } from '@lib/model/chat/Message/Message.constants';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isDatabase: true, name: MESSAGE_RESOURCE_NAME })
export class Message extends createProtectedResource() implements MessageModel {
  @withManyToOneField({ Resource: () => Chat })
  chat!: RefModel<ChatModel>;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  text?: string;
}
