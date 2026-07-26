import { type SliceModel } from '@lib/frontend/state/state.models';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';

export type ChatStateModel = {
  chats: Record<
    string,
    {
      streams?: Record<string, Partial<MessageModel> | undefined>;
    }
  >;
};

export type ChatReducerModel = SliceModel<
  ChatStateModel,
  {
    streamMessage: {
      chatId: string;
      message: Partial<MessageModel>;
      messageId: string;
    };
  }
>;
