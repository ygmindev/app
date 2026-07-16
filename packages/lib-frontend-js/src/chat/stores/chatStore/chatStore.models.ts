import { type SliceModel } from '@lib/frontend/state/state.models';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';

export type ChatStreamModel = {
  _id: string;
  currentMessage?: MessageModel;
  messages?: Array<MessageModel>;
};

export type ChatStateModel = {
  chats: Record<string, ChatStreamModel>;
  pingValue: number;
};

export type ChatReducerModel = SliceModel<
  ChatStateModel,
  {
    streamEnd: { chatId: string };
  }
>;
