import { type ChatReducerModel } from '@lib/frontend/chat/stores/chatStore/chatStore.models';
import set from 'lodash/set';

export const CHAT_REDUCER: ChatReducerModel = {
  defaultState: {
    chats: {},
  },

  reducers: {
    streamMessage(state, { chatId, message, messageId }) {
      const stream = state.chats[chatId]?.streams?.[messageId] ?? {};
      set(state, `chats.${chatId}.streams.${messageId}`, {
        ...stream,
        ...message,
        content: (stream?.content ?? '') + (message.content ?? ''),
      });
      return state;
    },
  },
};
