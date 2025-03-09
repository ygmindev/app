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
import { PartialModel } from '@lib/shared/core/core.models';
import { Root, Subscription } from 'type-graphql';

@withContainer()
@withResolver({ Resource: () => Message })
export class MessageResolver
  extends createProtectedResourceResolver<MessageModel, MessageFormModel>({
    Resource: () => Message,
    ResourceImplementation: MessageImplementation,
    name: MESSAGE_RESOURCE_NAME,
  })
  implements MessageResolverModel
{
  // @withOutput({
  //     Resource: () => Message,
  //     method: RESOURCE_METHOD_TYPE.UPDATE,
  //     name: SIGN_IN_USER,
  //   })
  //   async userUpdate(
  //     @withInput({
  //       Resource: () => User,
  //       method: RESOURCE_METHOD_TYPE.UPDATE,
  //       name: SIGN_IN_USER,
  //     })
  //     input: InputModel<RESOURCE_METHOD_TYPE.UPDATE, UserModel, UserFormModel> = {},
  //     @withContext()
  //     context?: RequestContextModel,
  //   ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, SignInModel>> {
  //     return this.signInImplementation.userUpdate(input, context);
  //   }

  @Subscription(() => Message, { name: 'messageSubscription', topics: 'MESSAGE' })
  messageSubscription(@Root() x: MessageModel): PartialModel<MessageModel> {
    console.warn('@SUB!');
    console.warn(x);
    return { text: 'test' };
  }
}
