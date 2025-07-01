import { type ProtectedResourceModel } from '@lib/model/auth/ProtectedResource/ProtectedResource.models';
import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';

export type MessageModel = ProtectedResourceModel & {
  chat: Partial<ChatModel>;

  text?: string;
};
