import { withField } from '@lib/backend/resource/utils/withField/withField';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { PubSub } from '@lib/shared/core/utils/PubSub/PubSub';
import { ObjectType, Query, Resolver, Root, Subscription } from 'type-graphql';

class MessagePayloadModel {
  id!: string;
  message!: string;
  sent?: Date;
}

@ObjectType()
export class MessagePayload implements MessagePayloadModel {
  @withField({ type: 'string' })
  id!: string;

  @withField({ type: 'string' })
  message!: string;

  @withField({ type: 'date' })
  sent?: Date;
}

@Resolver()
export class SubscriptionResolver {
  @Subscription(() => MessagePayload, { topics: 'MESSAGE' })
  messageSubscription(@Root() x: MessagePayload): MessagePayloadModel {
    console.warn('@@@ subscribe!!!');
    console.warn(x);
    return { id: '123', message: '345', sent: new Date() };
  }

  @Query(() => MessagePayload)
  async messageQuery(): Promise<MessagePayloadModel> {
    const message: MessagePayload = { id: 'id', message: 'message' };
    Container.get(PubSub).publish('MESSAGE', message);
    return { id: 'id', message: 'message' };
  }
}
