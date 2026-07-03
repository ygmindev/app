import { type ReducerModel } from '@lib/frontend/state/state.models';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';

export type ChatStateModel = {
  chats: Record<
    string,
    {
      _id: string;
      currentMessage?: MessageModel;
      isStreaming: boolean;
      messages: Array<MessageModel>;
    }
  >;
};

export type ChatReducerModel = ReducerModel<ChatStateModel>;
