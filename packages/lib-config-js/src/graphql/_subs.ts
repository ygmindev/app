import { Container } from '@lib/backend/core/utils/Container/Container';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { PubSub } from '@lib/shared/core/utils/PubSub/PubSub';
import { Mutation, ObjectType, Resolver, Root, Subscription } from 'type-graphql';

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
  messageSubscription(@Root() { id, message }: MessagePayload): MessagePayloadModel {
    console.warn('@@@ subscribe!!!');
    return { id, message, sent: new Date() };
  }

  @Mutation(() => MessagePayload)
  async messageQuery(): Promise<MessagePayloadModel> {
    const message: MessagePayload = { id: 'id', message: 'message' };
    Container.get(PubSub).publish('MESSAGE', message);
    return { id: 'id', message: 'message' };
  }
}
