import { Message } from '@lib/model/chat/Message/Message';
import { MessageImplementation } from '@lib/model/chat/Message/MessageImplementation/MessageImplementation';
import { type MessageResolverModel } from '@lib/model/chat/Message/MessageResolver/MessageResolver.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createProtectedResourceResolver } from '@lib/backend/resource/utils/createProtectedResourceResolver/createProtectedResourceResolver';
import { MESSAGE_RESOURCE_NAME } from '@lib/model/chat/Message/Message.constants';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';

@withContainer()
@withResolver({ Resource: () => Message })
export class MessageResolver
  extends createProtectedResourceResolver<MessageModel>({
    Resource: () => Message,
    ResourceImplementation: MessageImplementation,
    name: MESSAGE_RESOURCE_NAME,
  })
  implements MessageResolverModel {}
