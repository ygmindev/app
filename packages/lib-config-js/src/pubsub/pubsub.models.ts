import { type MessageModel } from '@lib/model/chat/Message/Message.models';

export type MainPubSubSchemaModel = {
  message: Array<MessageModel>;
};
