import { type MessageModel } from '@lib/model/chat/Message/Message.models';

export type MessageContainerPropsModel = {
  isOwn?: boolean;
  message: Partial<MessageModel>;
  messageNext?: Partial<MessageModel>;
  messagePrevious?: Partial<MessageModel>;
};
