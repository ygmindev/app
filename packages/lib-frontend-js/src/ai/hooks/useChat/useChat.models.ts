import { type LlmPayloadModel } from '@lib/model/ai/LlmPayload/LlmPayload.models';
import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';

export type UseChatParamsModel = {
  chatId?: string;
  url: string;
  onStart?(data: Partial<LlmPayloadModel>): void;
  onSubscribe?(chatId: string): void;
};

export type UseChatModel = {
  chat?: Partial<ChatModel>;
  currentMessage?: Partial<MessageModel>;
  isStreaming: boolean;
  subscribe(data: Partial<MessageModel>): void;
  unsubscribe(): void;
};
