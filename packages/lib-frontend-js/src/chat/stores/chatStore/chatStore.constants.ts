import { type ChatReducerModel } from '@lib/frontend/chat/stores/chatStore/chatStore.models';
import { MESSAGE_STATUS } from '@lib/model/chat/Message/Message.constants';

export const CHAT_REDUCER: ChatReducerModel = {
  defaultState: {
    chats: {},
    pingValue: 0,
  },

  reducers: {
    streamEnd: (state, params) => {
      const chat = state.chats[params.chatId];
      const currentMessage = chat?.currentMessage;
      if (!currentMessage) return state;
      state?.chats[params.chatId]?.messages?.push({
        ...currentMessage,
        status: MESSAGE_STATUS.COMPLETED,
      });
      state.chats[params.chatId].currentMessage &&
        (state.chats[params.chatId].currentMessage = undefined);
      return state;
    },
  },
};
