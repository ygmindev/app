import { useChat } from '@lib/frontend/ai/hooks/useChat/useChat';
import {
  type UseChatStreamModel,
  type UseChatStreamParamsModel,
} from '@lib/frontend/ai/hooks/useChatStream/useChatStream.models';
import { useApi } from '@lib/frontend/http/hooks/useApi/useApi';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { LLM_PAYLOAD_TYPE, MESSAGE_ROLE } from '@lib/model/ai/LlmPayload/LlmPayload.constants';
import { type LlmPayloadModel } from '@lib/model/ai/LlmPayload/LlmPayload.models';
import { MESSAGE_STATUS } from '@lib/model/chat/Message/Message.constants';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { ObjectId } from '@lib/shared/data/utils/ObjectId/ObjectId';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';
import { HTTP_RESPONSE_TYPE } from '@lib/shared/http/http.constants';
import some from 'lodash/some';
import { useCallback, useMemo, useRef } from 'react';

const registry = new Map<string, AbortController>();
const getKey = (chatId: string, messageId: string): string => `${chatId}:${messageId}`;

const abortRegistry = {
  abort: (chatId: string, messageId: string) => {
    const key = getKey(chatId, messageId);
    registry.get(key)?.abort();
    registry.delete(key);
  },

  delete: (chatId: string, messageId: string) => registry.delete(getKey(chatId, messageId)),

  set: (chatId: string, messageId: string, controller: AbortController) =>
    registry.set(getKey(chatId, messageId), controller),
};

export const useChatStream = ({ chatId, url }: UseChatStreamParamsModel): UseChatStreamModel => {
  const { post } = useApi({ baseUri: { port: process.env.SERVER_APP_PYTHON_PORT } });
  const currentUser = useCurrentUser();

  const fallback = useRef<string | null>(null);
  const chatIdF = chatId ?? (fallback.current ??= new ObjectId().toString());

  const { addMessage } = useChat({ chatId: chatIdF });

  const actions = useActions();
  const [streams, setStreams, getStreams] = useStore(`chat.chats.${chatIdF}.streams`);

  const streamMessage = useCallback(
    (messageId: string, message: Partial<MessageModel>) =>
      actions.chat.streamMessage({ chatId: chatIdF, message, messageId }),
    [actions, chatIdF],
  );

  const subscribe = useCallback(
    (data: Partial<MessageModel>) => {
      const userMessage: Partial<MessageModel> = {
        ...data,
        _id: new ObjectId().toString(),
        created: new DateTime(),
        createdBy: currentUser ?? undefined,
        role: MESSAGE_ROLE.USER,
      };
      addMessage(userMessage);

      const controller = new AbortController();

      void post({
        onMessage: (payload: Partial<LlmPayloadModel>): void => {
          const { chat_id, content, message_id, role, type } = payload;

          if (!chat_id) throw new NotFoundError('chat id');
          if (!message_id) throw new NotFoundError('message id');
          if (chat_id !== chatIdF) {
            unsubscribe();
            throw new Error(`chat_id_mismatch: expected ${chatIdF}, got ${chat_id}`);
          }

          switch (type) {
            case LLM_PAYLOAD_TYPE.START: {
              abortRegistry.set(chatIdF, message_id, controller);
              streamMessage(message_id, {
                content: content ?? '',
                role,
                status: MESSAGE_STATUS.STREAMING,
              });
              break;
            }

            case LLM_PAYLOAD_TYPE.UPDATE: {
              streamMessage(message_id, { content: content ?? '' });
              break;
            }

            case LLM_PAYLOAD_TYPE.END: {
              const stream = getStreams()?.[message_id];
              addMessage({
                ...stream,
                created: new DateTime(),
                status: MESSAGE_STATUS.COMPLETED,
              });
              setStreams({ [message_id]: undefined });
              abortRegistry.delete(chatIdF, message_id);
              break;
            }

            case LLM_PAYLOAD_TYPE.ERROR: {
              // TODO: error handling
              setStreams({ [message_id]: undefined });
              abortRegistry.delete(chatIdF, message_id);
              break;
            }
          }
        },
        params: { ...userMessage, chat: { _id: chatIdF } },
        request: {
          responseType: HTTP_RESPONSE_TYPE.STREAM,
          signal: controller.signal,
        },
        url,
      }).catch((e: Error) => {
        if (e.name === 'AbortError') return;
        throw e;
      });
    },
    [chatIdF, currentUser, streamMessage, addMessage, setStreams, getStreams, post, url],
  );

  const unsubscribe = useCallback(
    (messageId?: string): void => {
      const ids = messageId ? [messageId] : Object.keys(getStreams() ?? {});
      ids.forEach((id) => abortRegistry.abort(chatIdF, id));
      setStreams(messageId ? { [messageId]: undefined } : undefined);
    },
    [chatIdF, getStreams, addMessage, setStreams],
  );

  const isStreaming = useMemo(
    () => some(streams, (v) => v?.status === MESSAGE_STATUS.STREAMING),
    [streams],
  );

  return {
    isStreaming,
    subscribe,
    unsubscribe,
  };
};
