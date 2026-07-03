import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';

export type UseChatParamsModel = {
  url: string;
};

export type UseChatModel = {
  chat?: Partial<ChatModel>;
  currentMessage?: Partial<MessageModel>;
  isStreaming?: boolean;
  subscribe(data: Partial<MessageModel>): void;
  unsubscribe(): void;
};

export type ChatStoreModel = {
  controller: AbortController | undefined;
  currentChat: Partial<ChatModel> | undefined;
  currentMessage: Partial<MessageModel> | undefined;
  isStreaming: boolean;
};
