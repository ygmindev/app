import {
  type ChatStoreModel,
  type UseChatModel,
  type UseChatParamsModel,
} from '@lib/frontend/ai/hooks/useChat/useChat.models';
import { useHttp } from '@lib/frontend/http/hooks/useHttp/useHttp';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { LLM_PAYLOAD_TYPE, MESSAGE_ROLE } from '@lib/model/ai/LlmPayload/LlmPayload.constants';
import { type LlmPayloadModel } from '@lib/model/ai/LlmPayload/LlmPayload.models';
import { MESSAGE_STATUS } from '@lib/model/chat/Message/Message.constants';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { uid } from '@lib/shared/core/utils/uid/uid';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';
import { HTTP_RESPONSE_TYPE } from '@lib/shared/http/http.constants';
import { useCallback, useSyncExternalStore } from 'react';

let buffer = '';

const listeners = new Set<() => void>();

const store: ChatStoreModel = {
  controller: undefined,
  currentChat: undefined,
  currentMessage: undefined,
  isStreaming: false,
};

let storeSnapshot = { ...store };

const chatStore = {
  getSnapshot: () => storeSnapshot,
  subscribe: (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  update: (patch: Partial<ChatStoreModel>): void => {
    Object.assign(store, patch);
    storeSnapshot = { ...store };
    listeners.forEach((l) => l());
  },
};

const onMessage = (data: Partial<LlmPayloadModel>): void => {
  const s = chatStore.getSnapshot();
  switch (data.type) {
    case LLM_PAYLOAD_TYPE.START: {
      buffer = data.content ?? '';
      const chat = { ...s.currentChat, _id: data.chat_id };
      chatStore.update({
        currentChat: chat,
        currentMessage: {
          _id: data.message_id,
          chat,
          content: buffer,
          created: new DateTime(data.created),
          role: data.role,
          status: MESSAGE_STATUS.STREAMING,
        },
      });
      break;
    }

    case LLM_PAYLOAD_TYPE.UPDATE: {
      buffer += data.content ?? '';
      chatStore.update({
        currentMessage: {
          ...s.currentMessage,
          content: buffer,
          status: MESSAGE_STATUS.STREAMING,
        },
      });
      break;
    }

    case LLM_PAYLOAD_TYPE.END: {
      const completed = { ...s.currentMessage, status: MESSAGE_STATUS.COMPLETED };
      const messages = s.currentChat?.messages ?? [];
      chatStore.update({
        controller: undefined,
        currentChat: {
          ...s.currentChat,
          messages: messages.some((m) => m._id === completed._id)
            ? messages
            : [...messages, completed],
        },
        currentMessage: undefined,
        isStreaming: false,
      });
      break;
    }

    case LLM_PAYLOAD_TYPE.ERROR: {
      chatStore.update({ controller: undefined, currentMessage: undefined, isStreaming: false });
      break;
    }
  }
};

export const useChat = ({ url }: UseChatParamsModel): UseChatModel => {
  const { post } = useHttp();
  const currentUser = useCurrentUser();
  const snapshot = useSyncExternalStore(chatStore.subscribe, chatStore.getSnapshot);

  const subscribe = useCallback(
    (data: Partial<MessageModel>): void => {
      const s = chatStore.getSnapshot();
      if (s.controller) return;

      const controller = new AbortController();
      buffer = '';
      chatStore.update({
        controller,
        currentChat: {
          ...s.currentChat,
          messages: [
            ...(s.currentChat?.messages ?? []),
            {
              ...data,
              _id: uid(),
              created: new DateTime(),
              createdBy: currentUser ?? {},
              role: MESSAGE_ROLE.USER,
            },
          ],
        },
        isStreaming: true,
      });

      void post({
        onMessage,
        params: data,
        request: { responseType: HTTP_RESPONSE_TYPE.STREAM, signal: controller.signal },
        url,
      }).finally(() => {
        if (chatStore.getSnapshot().controller === controller) {
          chatStore.update({ controller: undefined, isStreaming: false });
        }
      });
    },
    [currentUser, post, url],
  );

  const unsubscribe = useCallback((): void => {
    chatStore.getSnapshot().controller?.abort();
    chatStore.update({ controller: undefined, currentMessage: undefined, isStreaming: false });
    buffer = '';
  }, []);

  return {
    chat: snapshot.currentChat,
    currentMessage: snapshot.currentMessage,
    isStreaming: snapshot.isStreaming,
    subscribe,
    unsubscribe,
  };
};
