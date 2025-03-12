import { Message } from '@lib/backend/chat/resources/Message/Message';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createProtectedResoureImplementation } from '@lib/backend/resource/utils/createProtectedResourceImplementation/createProtectedResourceImplementation';
import { MESSAGE_RESOURCE_NAME } from '@lib/shared/chat/resources/Message/Message.constants';
import {
  type MessageFormModel,
  type MessageModel,
} from '@lib/shared/chat/resources/Message/Message.models';
import { type MessageImplementationModel } from '@lib/shared/chat/resources/Message/MessageImplementation/MessageImplementation.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { PubSub } from '@lib/shared/core/utils/PubSub/PubSub';

@withContainer({ name: `${MESSAGE_RESOURCE_NAME}Implementation` })
export class MessageImplementation
  extends createProtectedResoureImplementation<MessageModel, MessageFormModel>({
    Resource: Message,
    afterCreate: async ({ output }) => {
      Container.get(PubSub).publish({ data: output.result, topic: 'message' });
      return output;
    },
    name: MESSAGE_RESOURCE_NAME,
  })
  implements MessageImplementationModel {}
