import { type SliceModel } from '@lib/frontend/state/state.models';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';

export type ChatStateModel = {
  chats: Record<string, { currentMessage?: MessageModel }>;
};

export type ChatReducerModel = SliceModel<ChatStateModel>;
