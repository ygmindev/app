import { type MessageModel } from '@lib/model/chat/Message/Message.models';

export type UseChatStreamParamsModel = {
  chatId?: string;
  url: string;
};

export type UseChatStreamModel = {
  isStreaming: boolean;
  subscribe(data: Partial<MessageModel>): void;
  unsubscribe(messageId?: string): void;
};
