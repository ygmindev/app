import {
  type UseChatModel,
  type UseChatParamsModel,
} from '@lib/frontend/ai/hooks/useChat/useChat.models';
import { useChatResource } from '@lib/frontend/chat/hooks/useChatResource/useChatResource';
import { useQuery } from '@lib/frontend/data/hooks/useQuery/useQuery';
import { useApi } from '@lib/frontend/http/hooks/useApi/useApi';
import { useActions } from '@lib/frontend/state/hooks/useActions/useActions';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { LLM_PAYLOAD_TYPE, MESSAGE_ROLE } from '@lib/model/ai/LlmPayload/LlmPayload.constants';
import { type LlmPayloadModel } from '@lib/model/ai/LlmPayload/LlmPayload.models';
import { MESSAGE_STATUS } from '@lib/model/chat/Message/Message.constants';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { CHAT } from '@lib/shared/chat/chat.constants';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { ObjectId } from '@lib/shared/data/utils/ObjectId/ObjectId';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';
import { HTTP_RESPONSE_TYPE } from '@lib/shared/http/http.constants';
import { useCallback, useRef } from 'react';

const streamMap = new Map<
  string,
  {
    controller: AbortController;
    promise: Promise<Partial<LlmPayloadModel> | null>;
  }
>();

export const useChat = ({
  chatId,
  onStart,
  onSubscribe,
  url,
}: UseChatParamsModel): UseChatModel => {
  const { post } = useApi({ baseUri: { port: process.env.SERVER_APP_PYTHON_PORT } });
  const currentUser = useCurrentUser();

  const isNew = chatId === undefined;
  const fallback = useRef<string | null>(null);
  if (!chatId && fallback.current === null) {
    fallback.current = new ObjectId().toString();
  }
  const id = chatId ?? fallback.current!;

  const { get } = useChatResource();
  const { data: chat, setData: setChat } = useQuery(
    `${CHAT}.${id}`,
    async () => {
      if (isNew) return {};
      return (await get({ filter: [{ field: '_id', value: id }] })).result;
    },
    undefined,
    { initialData: isNew ? {} : undefined },
  );

  const actions = useActions();
  const [currentMessage, setCurrentMessage, getCurrentMessage] = useStore(
    `chat.chats.${id}.currentMessage`,
  );
  const mergeCurrentMessage = useCallback(
    (value: Partial<MessageModel>) => actions.chat.merge(`chats.${id}.currentMessage`, value),
    [actions, id],
  );

  const subscribe = useCallback(
    (data: Partial<MessageModel>) => {
      if (streamMap.has(id)) return;
      void setChat((prev) => ({
        ...prev,
        messages: [
          ...(prev?.messages ?? []),
          {
            _id: new ObjectId().toString(),
            content: data.content,
            created: new DateTime(),
            createdBy: currentUser ?? {},
            role: MESSAGE_ROLE.USER,
          },
        ],
      }));
      onSubscribe?.(id);
      setCurrentMessage(undefined);

      const controller = new AbortController();
      const promise = post({
        onMessage: (data: Partial<LlmPayloadModel>): void => {
          const { chat_id, content, message_id, role, type } = data;

          if (!chat_id) throw new NotFoundError('chat id');
          if (!message_id) throw new NotFoundError('message id');
          if (chat_id !== id) {
            streamMap.get(id)?.controller.abort();
            streamMap.delete(id);
            throw new Error(`chat_id_mismatch: expected ${id}, got ${chat_id}`);
          }

          switch (type) {
            case LLM_PAYLOAD_TYPE.START: {
              mergeCurrentMessage({
                _id: message_id,
                content: content ?? '',
                role,
                status: MESSAGE_STATUS.STREAMING,
              });
              onStart?.(data);
              break;
            }

            case LLM_PAYLOAD_TYPE.UPDATE: {
              const currentMessage = getCurrentMessage();
              if (!currentMessage) return;
              mergeCurrentMessage({
                content: (currentMessage.content ?? '') + (content ?? ''),
              });
              break;
            }

            case LLM_PAYLOAD_TYPE.END: {
              const currentMessage = getCurrentMessage();
              if (!currentMessage) return;
              void setChat((prev) => ({
                ...prev,
                messages: [
                  ...(prev?.messages ?? []),
                  { ...currentMessage, created: new DateTime(), status: MESSAGE_STATUS.COMPLETED },
                ],
              }));
              setCurrentMessage(undefined);
              break;
            }

            case LLM_PAYLOAD_TYPE.ERROR: {
              setCurrentMessage(undefined);
              break;
            }
          }
        },
        params: { ...data, chat: { _id: id } },
        request: {
          responseType: HTTP_RESPONSE_TYPE.STREAM,
          signal: controller.signal,
        },
        url,
      }).finally(() => {
        streamMap.delete(id);
      });

      streamMap.set(id, { controller, promise });
    },
    [id, currentUser, mergeCurrentMessage, setCurrentMessage, getCurrentMessage, post, url],
  );

  const unsubscribe = useCallback((): void => {
    streamMap.get(id)?.controller.abort();
    streamMap.delete(id);
    setCurrentMessage(undefined);
  }, [id, setCurrentMessage]);

  return {
    chat: chat ?? undefined,
    currentMessage,
    isStreaming: currentMessage?.status === MESSAGE_STATUS.STREAMING,
    subscribe,
    unsubscribe,
  };
};
