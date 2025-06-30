import { Message } from '@lib/backend/chat/resources/Message/Message';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createProtectedResoureImplementation } from '@lib/backend/resource/utils/createProtectedResourceImplementation/createProtectedResourceImplementation';
import { MESSAGE_RESOURCE_NAME } from '@lib/shared/chat/resources/Message/Message.constants';
import { type MessageModel } from '@lib/shared/chat/resources/Message/Message.models';
import { type MessageImplementationModel } from '@lib/model/chat/Message/MessageImplementation/MessageImplementation.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { PubSub } from '@lib/shared/core/utils/PubSub/PubSub';

@withContainer({ name: `${MESSAGE_RESOURCE_NAME}Implementation` })
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
