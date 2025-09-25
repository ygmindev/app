import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createProtectedResoureImplementation } from '@lib/backend/resource/utils/createProtectedResourceImplementation/createProtectedResourceImplementation';
import { MESSAGE_RESOURCE_NAME } from '@lib/model/chat/Message/Message.constants';
import { Message } from '@lib/model/chat/Message/Message.entity';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { type MessageImplementationModel } from '@lib/model/chat/Message/MessageImplementation/MessageImplementation.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { PubSub } from '@lib/shared/core/utils/PubSub/PubSub';

@withContainer()
export class MessageImplementation
  extends createProtectedResoureImplementation<MessageModel>({
    Resource: Message,
    afterCreate: async ({ output }) => {
      Container.get(PubSub).publish('message', output.result);
      return output;
    },
    name: MESSAGE_RESOURCE_NAME,
  })
  implements MessageImplementationModel {}
