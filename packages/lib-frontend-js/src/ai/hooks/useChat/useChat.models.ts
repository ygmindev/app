import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';

export type UseChatParamsModel = {
  chatId?: string;
};

export type UseChatModel = {
  chat?: Partial<ChatModel>;
  addMessage(message: Partial<MessageModel>): void;
};
