import { Message } from '@lib/backend/chat/resources/Message/Message';
import { createProtectedResource } from '@lib/backend/resource/utils/createProtectedResource/createProtectedResource';
import { RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { withManyToManyField } from '@lib/backend/resource/utils/withManyToManyField/withManyToManyField';
import { User } from '@lib/backend/user/resources/User/User';
import { CHAT_RESOURCE_NAME } from '@lib/shared/chat/resources/Chat/Chat.constants';
import { type ChatModel } from '@lib/shared/chat/resources/Chat/Chat.models';
import { MESSAGE_RESOURCE_NAME } from '@lib/shared/chat/resources/Message/Message.constants';
import { MessageModel } from '@lib/shared/chat/resources/Message/Message.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { UserModel } from '@lib/shared/user/resources/User/User.models';

@withEntity({ isDatabase: true, name: CHAT_RESOURCE_NAME })
export class Chat
  extends createProtectedResource({ mappedBy: CHAT_RESOURCE_NAME })
  implements ChatModel
{
  @withManyToManyField({ Resource: () => Message })
  [MESSAGE_RESOURCE_NAME]?: Array<RefFieldModel<MessageModel>>;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  name?: string;

  @withManyToManyField({ Resource: () => User })
  participants?: Array<RefFieldModel<UserModel>>;
}
