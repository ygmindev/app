import { Message } from '@lib/backend/chat/resources/Message/Message';
import { MessageImplementation } from '@lib/backend/chat/resources/Message/MessageImplementation/MessageImplementation';
import { type MessageResolverModel } from '@lib/backend/chat/resources/Message/MessageResolver/MessageResolver.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createProtectedResourceResolver } from '@lib/backend/resource/utils/createProtectedResourceResolver/createProtectedResourceResolver';
import { MESSAGE_RESOURCE_NAME } from '@lib/shared/chat/resources/Message/Message.constants';
import {
  type MessageFormModel,
  type MessageModel,
} from '@lib/shared/chat/resources/Message/Message.models';

@withContainer()
@withResolver({ Resource: () => Message })
export class MessageResolver
  extends createProtectedResourceResolver<MessageModel, MessageFormModel>({
    Resource: () => Message,
    ResourceImplementation: MessageImplementation,
    name: MESSAGE_RESOURCE_NAME,
  })
  implements MessageResolverModel {}
