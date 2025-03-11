import { type MessageModel } from '@lib/shared/chat/resources/Message/Message.models';

export type MainPubSubSchemaModel = {
  message: Array<MessageModel>;
};
